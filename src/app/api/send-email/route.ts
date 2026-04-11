import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const serviceId = (process.env.EMAILJS_SERVICE_ID || process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "").trim();
    const templateId = (process.env.EMAILJS_TEMPLATE_ID || process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "").trim();
    const publicKey = (process.env.EMAILJS_PUBLIC_KEY || process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "").trim();
    const privateKey = (
      process.env.EMAILJS_PRIVATE_KEY ||
      process.env.EMAILJS_ACCESS_TOKEN ||
      process.env.NEXT_PUBLIC_EMAILJS_PRIVATE_KEY ||
      ""
    ).trim();

    if (!serviceId || !templateId || !publicKey) {
      return NextResponse.json(
        {
          error:
            "Email service is not configured. Add EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, and EMAILJS_PUBLIC_KEY (or NEXT_PUBLIC_ prefixed variants) in your deployment environment variables.",
        },
        { status: 500 }
      );
    }

    const payload = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      ...(privateKey ? { accessToken: privateKey } : {}),
      template_params: {
        name,
        email,
        phone,
        message,
        user_name: name,
        user_email: email,
        user_phone: phone,
      },
    };

    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const text = await response.text();
      const lowerText = text.toLowerCase();
      const strictModeMissingKey = lowerText.includes("strict mode") && lowerText.includes("private key");
      const gmailInvalidGrant = lowerText.includes("gmail_api") && lowerText.includes("invalid grant");
      const accountNotFound = lowerText.includes("account not found");

      return NextResponse.json(
        {
          error: strictModeMissingKey
            ? "EmailJS strict mode is enabled. Add EMAILJS_PRIVATE_KEY in Netlify environment variables."
            : gmailInvalidGrant
              ? "EmailJS Gmail connection expired. Reconnect your Gmail service in EmailJS dashboard and redeploy."
              : accountNotFound
                ? "EmailJS account not found. Ensure EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, and EMAILJS_TEMPLATE_ID are from the same EmailJS account."
                : text,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: "Message sent successfully" }, { status: 200 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unexpected error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
