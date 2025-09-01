import Image from "next/image";
import React from "react";
import {
  User,
  Mail,
  MessageSquare,
  Send,
  Phone,
  HeadsetIcon,
} from "lucide-react";

const Contact = () => {
  //   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //     const form = e.currentTarget;
  //     const name = form.name.valueOf;
  //     const email = form.email.value;
  //     const message = form.message.value;

  //     window.location.href = `mailto:youremail@example.com?subject=Contact Form: ${name}&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
  //   };

  return (
    <div className="w-full py-16 px-4 md:px-12 lg:px-20 bg-[#fce7af]">
      {/* Heading */}
      <h2 className="flex items-center justify-center text-3xl md:text-4xl font-bold text-gray-900 mb-12 gap-2">
        <HeadsetIcon className="w-10 h-10 text-[#F4B400]" />
        Get In <span className="text-[#F4B400]">Touch</span>
      </h2>

      {/* Layout */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/images/contactus.jpg"
            width={500}
            height={500}
            alt="Contact Us"
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Form Section */}
        <form
          //   onSubmit={handleSubmit}
          className="md:w-1/2 w-full bg-white shadow-md rounded-2xl p-6 flex flex-col gap-4"
        >
          {/* Name */}
          <div className="flex items-center gap-3 border border-gray-300 rounded-xl p-3 focus-within:ring-2 focus-within:ring-[#F4B400]">
            <User className="text-gray-400 size-5" />
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="flex-1 outline-none"
              required
            />
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 border border-gray-300 rounded-xl p-3 focus-within:ring-2 focus-within:ring-[#F4B400]">
            <Mail className="text-gray-400 size-5" />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="flex-1 outline-none"
              required
            />
          </div>
          {/*Phone */}
          <div className="flex items-center gap-3 border border-gray-300 rounded-xl p-3 focus-within:ring-2 focus-within:ring-[#F4B400]">
            <Phone className="text-gray-400 size-5" />
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              className="flex-1 outline-none"
              required
            />
          </div>
          {/* Message */}
          <div className="flex items-start gap-3 border border-gray-300 rounded-xl p-3 focus-within:ring-2 focus-within:ring-[#F4B400]">
            <MessageSquare className="text-gray-400 size-5 mt-2" />
            <textarea
              name="message"
              rows={5}
              placeholder="Message"
              className="flex-1 outline-none resize-none"
              required
            />
          </div>

          {/* Submit Button (Right Aligned) */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="flex items-center gap-2 bg-[#F4B400] text-white font-semibold py-3 px-6 rounded-xl hover:bg-yellow-500 transition-colors"
            >
              Send Message
              <Send className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
