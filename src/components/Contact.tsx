"use client";

import React, { useRef, useState, useEffect } from "react";
import { User, Mail, MessageSquare, Send, Phone } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

// Initialize EmailJS with environment variable
if (typeof window !== 'undefined') {
  emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "");
}

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setIsLoading(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        form.current
      );

      toast.success("Message sent successfully! I'll get back to you soon.", {
        style: { backgroundColor: "#22c55e" },
      });
      form.current.reset();
    } catch (err) {
      console.error("EmailJS Error:", err);
      toast.error("Failed to send message. Please try again or contact me on WhatsApp.", {
        style: { backgroundColor: "#ef4444" },
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-8 bg-slate-950">
      <div className="max-w-2xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-linear-to-r from-indigo-400 to-blue-400 text-transparent bg-clip-text">Let's Talk</span>
          </h2>
          <p className="text-gray-400 text-base">Have a question? Drop me a message and I'll get back to you ASAP.</p>
        </div>

        <form
          ref={form}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg p-3 focus-within:border-indigo-500/50 transition-colors">
            <User className="text-indigo-400 w-5 h-5 shrink-0" />
            <input
              name="user_name"
              type="text"
              placeholder="Your Name"
              className="flex-1 bg-transparent outline-none text-white placeholder:text-gray-500 text-sm"
              required
            />
          </div>

          <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg p-3 focus-within:border-indigo-500/50 transition-colors">
            <Mail className="text-indigo-400 w-5 h-5 shrink-0" />
            <input
              name="user_email"
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-transparent outline-none text-white placeholder:text-gray-500 text-sm"
              required
            />
          </div>

          <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg p-3 focus-within:border-indigo-500/50 transition-colors">
            <Phone className="text-indigo-400 w-5 h-5 shrink-0" />
            <input
              name="user_phone"
              type="tel"
              placeholder="Your Phone"
              className="flex-1 bg-transparent outline-none text-white placeholder:text-gray-500 text-sm"
              required
            />
          </div>

          <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-lg p-3 focus-within:border-indigo-500/50 transition-colors">
            <MessageSquare className="text-indigo-400 w-5 h-5 mt-1 shrink-0" />
            <textarea
              name="message"
              rows={4}
              placeholder="Your message..."
              className="flex-1 bg-transparent outline-none text-white placeholder:text-gray-500 resize-none text-sm"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-2 px-6 rounded-lg transition-colors mt-6 text-sm"
          >
            <Send className="w-4 h-4" />
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
