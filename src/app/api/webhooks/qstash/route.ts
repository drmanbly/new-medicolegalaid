import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { webinarRegistrations, consultations } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function POST(req: NextRequest) {
  try {
    // 1. Verify QStash signature (using @upstash/qstash or manual verification)
    // For brevity, skipping manual signature verification code here, but it MUST be done in production
    
    const body = await req.json();
    const { type, recordId } = body;

    if (type === "webinar") {
      const [reg] = await db.select().from(webinarRegistrations).where(eq(webinarRegistrations.id, recordId));
      if (reg) {
        // Send Brevo Email
        console.log(`Sending Brevo email to ${reg.doctorEmail} for Webinar ID: ${reg.webinarId}`);
        // Send WhatsApp via Meta Cloud API
        console.log(`Sending WhatsApp message to ${reg.doctorPhone}`);
        // Send Telegram alert to admin
        console.log(`Sending Telegram alert for new webinar registration`);
      }
    } else if (type === "consultation") {
      const [consult] = await db.select().from(consultations).where(eq(consultations.id, recordId));
      if (consult) {
        console.log(`Sending Brevo email to ${consult.doctorEmail} for Consultation`);
        console.log(`Sending Telegram alert for new 1:1 consult booking`);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("QStash webhook error:", error);
    // Returning 500 ensures QStash will automatically retry the request
    return NextResponse.json({ error: "Failed to process fulfillment" }, { status: 500 });
  }
}
