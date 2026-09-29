"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { getPresignedUrl } from "@/app/actions/upload";
import { createConsultOrder } from "@/app/actions/consult";
import { toast } from "sonner";
import Script from "next/script";
import { UploadCloud, File, ShieldCheck, Video, FileText, PhoneCall } from "lucide-react";

export function ConsultForm({ city }: { city?: string }) {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        doctorName: formData.get("doctorName") as string,
        doctorCity: (formData.get("doctorCity") as string) || city || "Unknown",
        doctorEmail: formData.get("doctorEmail") as string,
        doctorPhone: formData.get("doctorPhone") as string,
        caseDetails: formData.get("caseDetails") as string,
        documentUrl: undefined as string | undefined,
      };

      // 1. Upload file to R2 if exists
      if (file) {
        const presigned = await getPresignedUrl(file.name, file.type);
        if (presigned.success && presigned.url) {
          const uploadRes = await fetch(presigned.url, {
            method: "PUT",
            body: file,
            headers: {
              "Content-Type": file.type,
            },
          });
          if (uploadRes.ok) {
            data.documentUrl = presigned.key; // Store the key or full URL
          } else {
            toast.error("Failed to upload document");
          }
        }
      }

      // 2. Create Razorpay Order
      const orderRes = await createConsultOrder(data);
      if (!orderRes.success) {
        throw new Error(orderRes.error || "Order creation failed");
      }

      // 3. Open Razorpay Checkout
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderRes.amount,
        currency: orderRes.currency,
        name: "MedicoLegalAid",
        description: "1:1 Consultation with Dr. Vinay Kumar S",
        order_id: orderRes.orderId,
        handler: function (response: any) {
          toast.success("Payment Successful! We will contact you shortly.");
          // Ideally send this response to an API route to verify the signature
          // window.location.href = "/success";
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
    <div className="grid lg:grid-cols-5 gap-10">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      
      <aside className="lg:col-span-2 space-y-6">
        <div className="p-5 rounded-sm bg-primary text-white space-y-3 shadow-md">
          <div className="flex items-center gap-2">
            <PhoneCall className="w-5 h-5 text-accent" />
            <p className="font-bold text-base">Need help urgently?</p>
          </div>
          <p className="text-sm text-white/80">
            If you've just received a legal notice or are in an emergency situation, call us directly.
          </p>
          <a
            href="tel:+918105633270"
            className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-sm bg-accent text-white font-bold text-base hover:bg-accent/90 transition-colors"
          >
            Call Now: +91 81056 33270
          </a>
        </div>

        <div>
          <h2 className="text-xl font-bold text-primary mb-4">Topics Covered</h2>
          <ul className="space-y-2.5">
            {[
              "Consumer court notices & defence strategy",
              "Medical negligence allegations & MLC cases",
              "Professional indemnity insurance claims",
              "Consent documentation gaps",
              "NMC / State Medical Council notices",
              "Death during procedure — legal exposure",
            ].map((topic, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <ShieldCheck className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                {topic}
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <div className="lg:col-span-3">
        <div className="bg-card border border-border/50 rounded-sm overflow-hidden shadow-sm">
          <div className="bg-primary/5 border-b border-border/40 px-6 py-4 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
              <span className="text-accent text-lg">⚖️</span>
            </div>
            <div>
              <h2 className="text-base font-bold text-primary leading-none">Tell Us About Your Case</h2>
              <p className="text-xs text-muted-foreground mt-0.5">Fill in your details — no payment yet</p>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="doctorName" className="text-xs uppercase tracking-wide">Your Full Name *</Label>
                <Input id="doctorName" name="doctorName" required placeholder="Dr. Rajesh Sharma" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="doctorCity" className="text-xs uppercase tracking-wide">City {city ? `(${city})` : '*'}</Label>
                <Input id="doctorCity" name="doctorCity" defaultValue={city || ""} required={!city} placeholder="e.g. Mumbai" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="doctorEmail" className="text-xs uppercase tracking-wide">Email Address *</Label>
                <Input id="doctorEmail" type="email" name="doctorEmail" required placeholder="you@hospital.com" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="doctorPhone" className="text-xs uppercase tracking-wide">WhatsApp Number *</Label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 border border-r-0 border-border rounded-l-sm bg-muted text-sm text-muted-foreground">+91</span>
                  <Input id="doctorPhone" name="doctorPhone" required pattern="[0-9]{10}" maxLength={10} className="rounded-l-none" placeholder="9876543210" />
                </div>
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="caseDetails" className="text-xs uppercase tracking-wide">Describe Your Legal Issue *</Label>
              <Textarea 
                id="caseDetails" 
                name="caseDetails" 
                required 
                rows={5} 
                placeholder="e.g. I received a consumer court notice for a surgery I performed in 2024..."
              />
            </div>

            <div className="space-y-2.5">
              <div>
                <Label className="text-xs uppercase tracking-wide">Upload Documents (optional)</Label>
                <p className="text-xs text-muted-foreground mt-0.5">Upload court notices, MLC reports, or case files.</p>
              </div>
              
              <Label htmlFor="documentUpload" className="block relative border-2 border-dashed rounded-sm transition-all py-6 px-4 w-full cursor-pointer border-border hover:border-accent/50 hover:bg-accent/5">
                <input 
                  id="documentUpload" 
                  type="file" 
                  className="sr-only" 
                  accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                />
                <div className="flex flex-col items-center justify-center w-full">
                  <UploadCloud className="w-8 h-8 text-muted-foreground mb-2" />
                  <p className="text-sm font-medium text-primary text-center">
                    {file ? file.name : <span>Drop your documents here or <span className="text-accent underline">browse</span></span>}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 text-center">PDF, Word, JPEG, PNG — up to 50MB</p>
                </div>
              </Label>
            </div>

            <Button type="submit" disabled={loading} className="w-full h-14 text-base font-bold bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20">
              {loading ? "Processing..." : "Pay ₹3,000 & Secure Slot"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
