"use client";

import React, { useRef, useState } from "react";
import { User, Mail, MessageSquare, Send, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";
import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hammadurrehmanse@gmail.com",
    href: "mailto:hammadurrehmanse@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 334 971 1129",
    href: "tel:+923349711129",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lahore, Pakistan",
  },
];

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setIsLoading(true);

    try {
      const formData = new FormData(form.current);
      const payload = {
        name: String(formData.get("name") || ""),
        email: String(formData.get("email") || ""),
        phone: String(formData.get("phone") || ""),
        message: String(formData.get("message") || ""),
      };

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response
          .json()
          .catch(() => ({ error: "Failed to send message" }));
        throw new Error(data.error || "Failed to send message");
      }

      toast.success(
        "Message sent successfully! I'll get back to you soon.",
        {
          style: {
            backgroundColor: "#f0fdf4",
            color: "#166534",
            border: "1px solid #bbf7d0",
          },
        }
      );
      form.current.reset();
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to send message";
      toast.error(
        `${message}. Please try again or reach out on WhatsApp.`,
        {
          style: {
            backgroundColor: "#fef2f2",
            color: "#991b1b",
            border: "1px solid #fecaca",
          },
        }
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 px-6 md:px-10 bg-[var(--bg-dark)]"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <hr className="section-divider mb-4" />
          <h2 className="text-4xl md:text-5xl font-normal text-[var(--text-on-dark)]">
            Let&apos;s<span className="italic text-[var(--accent)]"> Talk</span>
          </h2>
          <p className="text-[var(--text-on-dark-muted)] text-base mt-3">
            Have a project in mind or just want to say hello? Drop me a message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info + Socials */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Details */}
            <div className="space-y-5">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-[var(--accent)]" />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-on-dark-muted)] uppercase tracking-wider mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-[var(--text-on-dark)] text-sm font-medium hover:text-[var(--accent)] transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-[var(--text-on-dark)] text-sm font-medium">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-4 border-t border-[var(--border-dark)]">
              <p className="text-xs text-[var(--text-on-dark-muted)] uppercase tracking-wider mb-4">
                Find me on
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/hammad-umt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[var(--text-on-dark-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)]/30 transition-all duration-200"
                  aria-label="GitHub"
                >
                  <FontAwesomeIcon icon={faGithub} className="text-base" />
                </a>
                <a
                  href="https://www.linkedin.com/in/hammad-ur-rehman-b36b8229b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[var(--text-on-dark-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)]/30 transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="text-base" />
                </a>
                <a
                  href="https://wa.me/923349711129?text=Hi%20Hammad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[var(--text-on-dark-muted)] hover:text-[#25D366] hover:border-[#25D366]/30 transition-all duration-200"
                  aria-label="WhatsApp"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="text-base" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form ref={form} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs text-[var(--text-on-dark-muted)] uppercase tracking-wider mb-2"
                  >
                    Name
                  </label>
                  <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus-within:border-[var(--accent)]/50 transition-colors">
                    <User className="text-[var(--text-on-dark-muted)] w-4 h-4 shrink-0" />
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      className="flex-1 bg-transparent outline-none text-[var(--text-on-dark)] placeholder:text-[var(--text-on-dark-muted)]/50 text-sm"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs text-[var(--text-on-dark-muted)] uppercase tracking-wider mb-2"
                  >
                    Email
                  </label>
                  <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus-within:border-[var(--accent)]/50 transition-colors">
                    <Mail className="text-[var(--text-on-dark-muted)] w-4 h-4 shrink-0" />
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      className="flex-1 bg-transparent outline-none text-[var(--text-on-dark)] placeholder:text-[var(--text-on-dark-muted)]/50 text-sm"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-phone"
                  className="block text-xs text-[var(--text-on-dark-muted)] uppercase tracking-wider mb-2"
                >
                  Phone
                </label>
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus-within:border-[var(--accent)]/50 transition-colors">
                  <Phone className="text-[var(--text-on-dark-muted)] w-4 h-4 shrink-0" />
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder="Your Phone"
                    className="flex-1 bg-transparent outline-none text-[var(--text-on-dark)] placeholder:text-[var(--text-on-dark-muted)]/50 text-sm"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs text-[var(--text-on-dark-muted)] uppercase tracking-wider mb-2"
                >
                  Message
                </label>
                <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus-within:border-[var(--accent)]/50 transition-colors">
                  <MessageSquare className="text-[var(--text-on-dark-muted)] w-4 h-4 mt-0.5 shrink-0" />
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="flex-1 bg-transparent outline-none text-[var(--text-on-dark)] placeholder:text-[var(--text-on-dark-muted)]/50 resize-none text-sm leading-relaxed"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent-hover)] disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-full transition-colors duration-300 mt-2 text-sm"
              >
                <Send className="w-4 h-4" />
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
