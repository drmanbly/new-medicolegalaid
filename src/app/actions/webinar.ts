"use server";

import { db } from "@/db";
import { webinars, webinarRegistrations, webinarWaitlist } from "@/db/schema";
import { razorpay } from "@/lib/razorpay";
import { eq, sql } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function createWebinarOrder(data: {
  webinarId: number;
  doctorName: string;
  doctorEmail: string;
  doctorPhone: string;
  priceInPaise: number;
}) {
  try {
    const order = await razorpay.orders.create({
      amount: data.priceInPaise,
      currency: "INR",
      receipt: `webinar_${Date.now()}`,
    });

    const [record] = await db.insert(webinarRegistrations).values({
      webinarId: data.webinarId,
      doctorName: data.doctorName,
      doctorEmail: data.doctorEmail,
      doctorPhone: data.doctorPhone,
      razorpayOrderId: order.id,
      amount: data.priceInPaise,
      status: "pending",
    }).returning();

    return {
      success: true,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      recordId: record.id,
    };
  } catch (error) {
    console.error("Error creating webinar order:", error);
    return { success: false, error: "Failed to create order" };
  }
}

export async function joinWaitlist(data: {
  webinarId: number;
  doctorName: string;
  doctorEmail: string;
  doctorPhone: string;
}) {
  try {
    await db.insert(webinarWaitlist).values(data);
    return { success: true };
  } catch (error) {
    console.error("Error joining waitlist:", error);
    return { success: false, error: "Failed to join waitlist" };
  }
}
