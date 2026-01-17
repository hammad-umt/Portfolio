"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { User, Mail, MessageSquare, Send, Phone, Headset } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    const formData = new FormData(form.current);
    const data = Object.fromEntries(formData); // {name, email, phone, message}

    try {
      const res = await fetch("/.netlify/functions/sendEmail", {
        method: "POST",
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (res.ok)
        toast.success(result.message, { style: { backgroundColor: "#22c55e" } });
      else
        toast.error(result.error, { style: { backgroundColor: "#ef4444" } });
    } catch (err) {
      toast.error("Error sending message \n Kindly WhatsApp us", {
        style: { backgroundColor: "#ef4444" },
      });
    }

    form.current.reset();
  };

  return (
    <div className="w-full py-16 px-4 md:px-12 lg:px-20 bg-gradient-to-br from-indigo-50 to-cyan-50">
      <h2 className="flex items-center justify-center text-3xl md:text-4xl font-bold text-slate-900 mb-12 gap-2">
        <Headset className="w-10 h-10 text-indigo-600" />
        Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">Touch</span>
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/images/contactus.jpg"
            width={500}
            height={500}
            alt="Contact Us"
            className="rounded-xl shadow-lg"
          />
        </div>

        <form
          ref={form}
          onSubmit={handleSubmit}
          className="md:w-1/2 w-full bg-white shadow-md rounded-2xl p-6 flex flex-col gap-4 border border-slate-200"
        >
          <div className="flex items-center gap-3 border border-slate-300 rounded-xl p-3 focus-within:ring-2 focus-within:ring-indigo-600">
            <User className="text-slate-400 w-5 h-5" />
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="flex-1 outline-none"
              required
            />
          </div>

          <div className="flex items-center gap-3 border border-slate-300 rounded-xl p-3 focus-within:ring-2 focus-within:ring-indigo-600">
            <Mail className="text-slate-400 w-5 h-5" />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="flex-1 outline-none"
              required
            />
          </div>

          <div className="flex items-center gap-3 border border-slate-300 rounded-xl p-3 focus-within:ring-2 focus-within:ring-indigo-600">
            <Phone className="text-slate-400 w-5 h-5" />
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              className="flex-1 outline-none"
              required
            />
          </div>

          <div className="flex items-start gap-3 border border-slate-300 rounded-xl p-3 focus-within:ring-2 focus-within:ring-indigo-600">
            <MessageSquare className="text-slate-400 w-5 h-5 mt-2" />
            <textarea
              name="message"
              rows={5}
              placeholder="Message"
              className="flex-1 outline-none resize-none"
              required
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="flex items-center gap-2 bg-[#F4B400] text-white font-semibold py-3 px-6 rounded-xl hover:bg-yellow-500 transition-colors"
            >
              Send
              <Send className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
