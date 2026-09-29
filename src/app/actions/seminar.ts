"use server";

import { db } from "@/db";
import { seminarEnquiries } from "@/db/schema";
import { revalidatePath } from "next/cache";

export async function submitSeminarEnquiry(formData: FormData) {
  try {
    await db.insert(seminarEnquiries).values({
      hospitalName: formData.get("hospitalName") as string,
      contactPerson: formData.get("contactPerson") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      city: formData.get("city") as string,
      expectedAttendees: parseInt(formData.get("expectedAttendees") as string) || 50,
    });

    return { success: true };
  } catch (error) {
    console.error("Error submitting seminar enquiry:", error);
    return { success: false, error: "Failed to submit enquiry" };
  }
}
