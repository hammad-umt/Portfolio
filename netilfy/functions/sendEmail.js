export async function handler(event) {
  try {
    const { name, email, phone, message } = JSON.parse(event.body || "{}");

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing required fields" }),
      };
    }

    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;
    const privateKey = process.env.EMAILJS_PRIVATE_KEY || process.env.EMAILJS_ACCESS_TOKEN;

    if (!serviceId || !templateId || !publicKey) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: "Email service is not configured. Missing EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, or EMAILJS_PUBLIC_KEY.",
        }),
      };
    }

    const payload = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      ...(privateKey ? { accessToken: privateKey } : {}),
      // Send both naming styles so either template variable set can work.
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
      const strictModeMissingKey = text.toLowerCase().includes("strict mode") && text.toLowerCase().includes("private key");
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: strictModeMissingKey
            ? "EmailJS strict mode is enabled. Add EMAILJS_PRIVATE_KEY in Netlify environment variables."
            : text,
        }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Message sent successfully" }),
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
}
  