import { NextResponse } from "next/server";
import * as z from "zod";

const quoteRequestSchema = z.object({
  fullName: z.string().min(2),
  company: z.string().optional(),
  email: z.string().email(),
  phone: z.string().optional(),
  productInterested: z.string().min(1),
  coreType: z.string().optional(),
  targetMarket: z.string().min(1),
  message: z.string().optional(),
  agreePrivacy: z.boolean(),
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const result = quoteRequestSchema.safeParse(json);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid quotation data. Please review the highlighted fields.",
          issues: result.error.issues,
        },
        { status: 400 }
      );
    }

    const data = result.data;

    // Log the inquiry for server-side persistence / debugging
    console.log("=== NEW B2B QUOTATION INQUIRY RECEIVED ===");
    console.log(`From: ${data.fullName} (${data.email})`);
    console.log(`Company: ${data.company || "N/A"}`);
    console.log(`Phone: ${data.phone || "N/A"}`);
    console.log(`Product: ${data.productInterested}`);
    console.log(`Core: ${data.coreType}`);
    console.log(`Market: ${data.targetMarket}`);
    console.log(`Message: ${data.message || "N/A"}`);
    console.log("==========================================");

    // If RESEND_API_KEY is configured in .env.local, dispatch email
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.EMAIL_TO || "vegaimpextrading@gmail.com";

    if (resendApiKey) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: process.env.EMAIL_FROM || "inquiries@vegaimpex.com",
            to: recipientEmail,
            subject: `[B2B Quote Request] ${data.productInterested} - ${data.fullName}`,
            text: `
New B2B Quotation Request:
----------------------------------
Product: ${data.productInterested}
Name: ${data.fullName}
Company: ${data.company || "N/A"}
Email: ${data.email}
Phone/WhatsApp: ${data.phone || "N/A"}
Target Market: ${data.targetMarket}
Core Type: ${data.coreType}
Message: ${data.message || "None"}
----------------------------------
Sent from Vega Impex Website Quotation System
            `,
          }),
        });
      } catch (emailErr) {
        console.warn("Email delivery notification failed, inquiry logged:", emailErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your inquiry has been received. Our export desk will reply within 24 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("API Error in /api/quote:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error occurred while processing your quotation request.",
      },
      { status: 500 }
    );
  }
}
