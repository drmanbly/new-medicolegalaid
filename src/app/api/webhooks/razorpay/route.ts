import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { db } from "@/db";
import { webinarRegistrations, courseEnrollments, consultations } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function POST(req: NextRequest) {
  try {
    const bodyText = await req.text();
    const signature = req.headers.get("x-razorpay-signature");

    if (!signature) {
      return NextResponse.json({ error: "Missing signature" }, { status: 400 });
    }

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_WEBHOOK_SECRET!)
      .update(bodyText)
      .digest("hex");

    if (expectedSignature !== signature) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }

    const event = JSON.parse(bodyText);

    if (event.event === "payment.captured") {
      const payment = event.payload.payment.entity;
      const orderId = payment.order_id;
      
      // Determine what was purchased by searching DB tables
      // For a real app, you might encode context in Razorpay notes
      
      let type = "unknown";
      let recordId = null;

      // 1. Check Webinars
      const [webinarReg] = await db.select().from(webinarRegistrations).where(eq(webinarRegistrations.razorpayOrderId, orderId));
      if (webinarReg) {
        await db.update(webinarRegistrations).set({ status: "successful", razorpayPaymentId: payment.id }).where(eq(webinarRegistrations.id, webinarReg.id));
        type = "webinar";
        recordId = webinarReg.id;
      }

      // 2. Check Consultations
      const [consult] = await db.select().from(consultations).where(eq(consultations.razorpayOrderId, orderId));
      if (consult) {
        await db.update(consultations).set({ status: "successful", razorpayPaymentId: payment.id }).where(eq(consultations.id, consult.id));
        type = "consultation";
        recordId = consult.id;
      }

      // 3. Queue post-payment automations via QStash
      if (type !== "unknown" && recordId) {
        await fetch(`https://qstash.upstash.io/v2/publish/${process.env.NEXT_PUBLIC_APP_URL}/api/webhooks/qstash`, {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${process.env.QSTASH_TOKEN}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            type,
            recordId,
            paymentId: payment.id,
          })
        });
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Razorpay webhook error:", error);
    return NextResponse.json({ error: "Webhook handler failed" }, { status: 500 });
  }
}
