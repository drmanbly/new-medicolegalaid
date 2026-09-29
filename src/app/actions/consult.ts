"use server";

import { db } from "@/db";
import { consultations } from "@/db/schema";
import { razorpay } from "@/lib/razorpay";

export async function createConsultOrder(data: {
  doctorName: string;
  doctorCity: string;
  doctorPhone: string;
  doctorEmail: string;
  caseDetails: string;
  documentUrl?: string;
  cityContext?: string;
}) {
  try {
    const amount = 3000 * 100; // ₹3000 in paise

    const order = await razorpay.orders.create({
      amount,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    });

    // Save initial pending record in DB
    const [record] = await db
      .insert(consultations)
      .values({
        doctorId: `DOC_${Date.now()}`,
        doctorName: data.doctorName,
        doctorCity: data.doctorCity, // Use form city if any, else cityContext
        doctorPhone: data.doctorPhone,
        doctorEmail: data.doctorEmail,
        caseDetails: data.caseDetails,
        documentUrl: data.documentUrl,
        razorpayOrderId: order.id,
        amount,
        status: "pending",
      })
      .returning();

    return {
      success: true,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      recordId: record.id,
    };
  } catch (error) {
    console.error("Error creating consult order:", error);
    return { success: false, error: "Failed to create order" };
  }
}
