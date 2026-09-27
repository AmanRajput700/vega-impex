"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import Link from "next/link";
import { products } from "@/data/products";

const quotationSchema = z.object({
  fullName: z.string().min(2, "Full name is required (min 2 characters)"),
  company: z.string().optional(),
  email: z.string().email("Please enter a valid business email address"),
  phone: z.string().optional(),
  productInterested: z.string().min(1, "Please select a product of interest"),
  coreType: z.string().min(1, "Please choose a core option"),
  targetMarket: z.string().min(1, "Please select your target market"),
  message: z.string().optional(),
  agreePrivacy: z.boolean().refine((val) => val === true, {
    message: "You must agree to the privacy policy to submit an inquiry",
  }),
});

type QuotationFormData = z.infer<typeof quotationSchema>;

interface QuotationFormProps {
  initialProduct?: string;
  className?: string;
}

export function QuotationForm({ initialProduct = "", className = "" }: QuotationFormProps) {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuotationFormData>({
    resolver: zodResolver(quotationSchema),
    defaultValues: {
      productInterested: initialProduct || "",
      coreType: "not-sure",
      targetMarket: "Middle East",
      agreePrivacy: true,
    },
  });

  const onSubmit = async (data: QuotationFormData) => {
    setSubmitStatus("loading");
    setStatusMessage("");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus("success");
        setStatusMessage(
          "✓ Your inquiry has been sent successfully! Our export manager will reply with FOB Hazira pricing within 24 hours."
        );
        reset();
      } else {
        setSubmitStatus("error");
        setStatusMessage(
          result.error || "✗ Something went wrong while submitting. Please try again or reach out on WhatsApp."
        );
      }
    } catch {
      setSubmitStatus("error");
      setStatusMessage("✗ Network connection error. Please check your connection or contact us via WhatsApp.");
    }
  };

  return (
    <div className={`bg-white rounded-2xl p-6 sm:p-10 border border-[#E3D9C8] shadow-lg ${className}`}>
      <div className="mb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-[#B4835A] block mb-1">
          Direct Factory Sourcing
        </span>
        <h3 className="text-2xl font-bold text-[#2E4A5C]">
          Request B2B Quotation & Free Samples
        </h3>
        <p className="text-xs sm:text-sm text-[#5B6B75] mt-1">
          Receive FOB Hazira pricing, packaging dielines, and container load estimates. 24-hour response guaranteed.
        </p>
      </div>

      {submitStatus === "success" && (
        <div className="mb-6 p-4 rounded-xl bg-[#2FA84F]/10 border border-[#2FA84F]/30 text-[#2FA84F] flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
          <p className="text-sm font-semibold">{statusMessage}</p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <p className="text-sm font-semibold">{statusMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">
        {/* Full Name & Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-[#2E4A5C] mb-1.5">
              Full Name <span className="text-[#B4835A]">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. John Doe"
              {...register("fullName")}
              className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-[#F6F1E9]/40 focus:bg-white text-[#2E4A5C] placeholder-[#5B6B75]/60 transition-colors ${
                errors.fullName ? "border-red-400 focus:ring-red-400" : "border-[#E3D9C8] focus:border-[#B4835A]"
              }`}
            />
            {errors.fullName && (
              <span className="text-xs text-red-500 mt-1 block">{errors.fullName.message}</span>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#2E4A5C] mb-1.5">
              Company / Organization
            </label>
            <input
              type="text"
              placeholder="e.g. Apex Global Distribution"
              {...register("company")}
              className="w-full px-4 py-2.5 rounded-xl border border-[#E3D9C8] text-sm bg-[#F6F1E9]/40 focus:bg-white text-[#2E4A5C] placeholder-[#5B6B75]/60 focus:border-[#B4835A] transition-colors"
            />
          </div>
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-[#2E4A5C] mb-1.5">
              Business Email <span className="text-[#B4835A]">*</span>
            </label>
            <input
              type="email"
              placeholder="name@company.com"
              {...register("email")}
              className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-[#F6F1E9]/40 focus:bg-white text-[#2E4A5C] placeholder-[#5B6B75]/60 transition-colors ${
                errors.email ? "border-red-400 focus:ring-red-400" : "border-[#E3D9C8] focus:border-[#B4835A]"
              }`}
            />
            {errors.email && (
              <span className="text-xs text-red-500 mt-1 block">{errors.email.message}</span>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#2E4A5C] mb-1.5">
              Phone / WhatsApp (Optional)
            </label>
            <input
              type="tel"
              placeholder="+1 (555) 000-0000"
              {...register("phone")}
              className="w-full px-4 py-2.5 rounded-xl border border-[#E3D9C8] text-sm bg-[#F6F1E9]/40 focus:bg-white text-[#2E4A5C] placeholder-[#5B6B75]/60 focus:border-[#B4835A] transition-colors"
            />
          </div>
        </div>

        {/* Product Interested & Target Market */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-[#2E4A5C] mb-1.5">
              Product Interested <span className="text-[#B4835A]">*</span>
            </label>
            <select
              {...register("productInterested")}
              className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-[#F6F1E9]/40 focus:bg-white text-[#2E4A5C] transition-colors ${
                errors.productInterested ? "border-red-400" : "border-[#E3D9C8] focus:border-[#B4835A]"
              }`}
            >
              <option value="">Select a Product</option>
              {products.map((p) => (
                <option key={p.slug} value={p.name}>
                  {p.name}
                </option>
              ))}
              <option value="Mixed Products (Consolidated Container)">
                Mixed Products (Consolidated Container)
              </option>
            </select>
            {errors.productInterested && (
              <span className="text-xs text-red-500 mt-1 block">{errors.productInterested.message}</span>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#2E4A5C] mb-1.5">
              Target Destination Market <span className="text-[#B4835A]">*</span>
            </label>
            <select
              {...register("targetMarket")}
              className="w-full px-4 py-2.5 rounded-xl border border-[#E3D9C8] text-sm bg-[#F6F1E9]/40 focus:bg-white text-[#2E4A5C] focus:border-[#B4835A] transition-colors"
            >
              <option value="Southeast Asia">Southeast Asia</option>
              <option value="Middle East">Middle East</option>
              <option value="Africa">Africa</option>
              <option value="Europe">Europe</option>
              <option value="North America">North America</option>
              <option value="South America">South America</option>
              <option value="Australia & Oceania">Australia & Oceania</option>
              <option value="Other">Other Region</option>
            </select>
          </div>
        </div>

        {/* Core Type Preference */}
        <div>
          <label className="block text-xs font-semibold text-[#2E4A5C] mb-1.5">
            Preferred Core Technology Option
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { id: "wood-pulp", label: "Wood Pulp" },
              { id: "composite", label: "Composite" },
              { id: "all-sap", label: "All-SAP" },
              { id: "not-sure", label: "Recommend for me" },
            ].map((option) => (
              <label
                key={option.id}
                className="flex items-center gap-2 p-2.5 rounded-xl border border-[#E3D9C8] text-xs font-medium text-[#2E4A5C] hover:bg-[#F6F1E9] cursor-pointer"
              >
                <input
                  type="radio"
                  value={option.id}
                  {...register("coreType")}
                  className="text-[#B4835A] focus:ring-[#B4835A]"
                />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Message / Specifications */}
        <div>
          <label className="block text-xs font-semibold text-[#2E4A5C] mb-1.5">
            Order Details / Target Specs (Optional)
          </label>
          <textarea
            rows={3}
            placeholder="Tell us about your estimated container volume, target sizes, packaging preferences, or specific absorbency requirements..."
            {...register("message")}
            className="w-full px-4 py-2.5 rounded-xl border border-[#E3D9C8] text-sm bg-[#F6F1E9]/40 focus:bg-white text-[#2E4A5C] placeholder-[#5B6B75]/60 focus:border-[#B4835A] transition-colors resize-none"
          />
        </div>

        {/* Privacy Checkbox */}
        <div>
          <label className="flex items-start gap-2.5 cursor-pointer">
            <input
              type="checkbox"
              {...register("agreePrivacy")}
              className="mt-1 text-[#B4835A] rounded border-[#E3D9C8] focus:ring-[#B4835A]"
            />
            <span className="text-xs text-[#5B6B75] leading-relaxed">
              I agree to the{" "}
              <Link href="/privacy-policy" className="underline text-[#2E4A5C] hover:text-[#B4835A]">
                Privacy Policy
              </Link>{" "}
              and consent to Vega Impex processing my contact data for the purpose of quotation and export coordination.
            </span>
          </label>
          {errors.agreePrivacy && (
            <span className="text-xs text-red-500 mt-1 block">{errors.agreePrivacy.message}</span>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={submitStatus === "loading"}
            className="w-full py-3.5 px-6 rounded-full text-sm font-bold text-white bg-[#B4835A] hover:bg-[#9C6F49] shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed transform active:scale-[0.99]"
          >
            {submitStatus === "loading" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Processing Inquiry...</span>
              </>
            ) : (
              <>
                <span>Submit Quotation Request</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
