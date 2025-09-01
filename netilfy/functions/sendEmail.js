export async function handler(event) {
    try {
      const { name, email, phone, message } = JSON.parse(event.body);
  
      // Validate required fields
      if (!name || !email || !message) {
        return {
          statusCode: 400,
          body: JSON.stringify({ error: "Missing required fields" }),
        };
      }
  
      // Send email using EmailJS REST API
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: process.env.EMAILJS_SERVICE_ID,
          template_id: process.env.EMAILJS_TEMPLATE_ID,
          user_id: process.env.EMAILJS_PUBLIC_KEY,
          template_params: { name, email, phone, message },
        }),
      });
  
      if (!response.ok) {
        const text = await response.text();
        return { statusCode: 500, body: JSON.stringify({ error: text }) };
      }
  
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Message sent successfully" }),
      };
    } catch (err) {
      return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
    }
  }
  