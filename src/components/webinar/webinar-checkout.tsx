"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createWebinarOrder, joinWaitlist } from "@/app/actions/webinar";
import { toast } from "sonner";
import Script from "next/script";

interface WebinarProps {
  webinar: {
    id: number;
    title: string;
    priceInPaise: number;
    originalPriceInPaise: number;
    maxSeats: number;
    seatCutoff: number;
  };
  registrationsCount: number;
}

export function WebinarCheckout({ webinar, registrationsCount }: WebinarProps) {
  const [loading, setLoading] = useState(false);
  
  const isWaitlist = registrationsCount >= webinar.seatCutoff;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        webinarId: webinar.id,
        doctorName: formData.get("doctorName") as string,
        doctorEmail: formData.get("doctorEmail") as string,
        doctorPhone: formData.get("doctorPhone") as string,
      };

      if (isWaitlist) {
        const res = await joinWaitlist(data);
        if (res.success) {
          toast.success("Added to waitlist! We will notify you if a seat opens up.");
          (e.target as HTMLFormElement).reset();
        } else {
          toast.error("Failed to join waitlist.");
        }
        setLoading(false);
        return;
      }

      // 1. Create Razorpay Order
      const orderRes = await createWebinarOrder({
        ...data,
        priceInPaise: webinar.priceInPaise,
      });

      if (!orderRes.success) {
        throw new Error(orderRes.error || "Order creation failed");
      }

      // 2. Open Razorpay Checkout
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderRes.amount,
        currency: orderRes.currency,
        name: "MedicoLegalAid",
        description: webinar.title,
        order_id: orderRes.orderId,
        handler: function (response: any) {
          toast.success("Payment Successful! Check your email for Zoom link.");
          // Ideally send this response to an API route to verify the signature
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        },
        prefill: {
          name: data.doctorName,
          email: data.doctorEmail,
          contact: data.doctorPhone,
        },
        theme: {
          color: "#060f1a",
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl p-8 shadow-lg relative overflow-hidden">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      
      {isWaitlist && (
        <div className="absolute top-0 left-0 w-full bg-accent text-accent-foreground text-center py-2 text-sm font-bold shadow-md z-10">
          Seats Full — Join Waitlist
        </div>
      )}

      <div className={`text-center mb-8 ${isWaitlist ? 'mt-6' : ''}`}>
        <h2 className="text-2xl font-bold text-primary mb-2">
          {isWaitlist ? "Join the Waitlist" : "Secure Your Seat"}
        </h2>
        <p className="text-sm text-muted-foreground">
          {isWaitlist 
            ? "We will notify you if there's any cancellation." 
            : `Only ${Math.max(0, webinar.seatCutoff - registrationsCount)} seats remaining.`}
        </p>
      </div>

      {!isWaitlist && (
        <div className="flex justify-center items-end gap-3 mb-8">
          <div className="text-4xl font-black text-primary">
            ₹{webinar.priceInPaise / 100}
          </div>
          <div className="text-lg font-medium text-muted-foreground line-through mb-1">
            ₹{webinar.originalPriceInPaise / 100}
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1.5">
          <Label htmlFor="doctorName">Full Name *</Label>
          <Input id="doctorName" name="doctorName" required placeholder="Dr. Rajesh Sharma" />
        </div>
        
        <div className="space-y-1.5">
          <Label htmlFor="doctorEmail">Email Address *</Label>
          <Input id="doctorEmail" type="email" name="doctorEmail" required placeholder="you@hospital.com" />
        </div>
        
        <div className="space-y-1.5">
          <Label htmlFor="doctorPhone">WhatsApp Number *</Label>
          <div className="flex">
            <span className="inline-flex items-center px-3 border border-r-0 border-border rounded-l-sm bg-muted text-sm text-muted-foreground">+91</span>
            <Input id="doctorPhone" name="doctorPhone" required pattern="[0-9]{10}" maxLength={10} className="rounded-l-none" placeholder="9876543210" />
          </div>
        </div>

        <Button type="submit" disabled={loading} className={`w-full h-12 text-base font-bold mt-4 ${isWaitlist ? 'bg-accent text-accent-foreground hover:bg-accent/90' : 'bg-primary text-primary-foreground hover:bg-primary/90'}`}>
          {loading ? "Processing..." : isWaitlist ? "Join Waitlist" : "Pay & Register"}
        </Button>
      </form>
    </div>
  );
}
