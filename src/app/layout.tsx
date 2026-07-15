import type { Metadata } from "next";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; 
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import ToastProvider from "@/components/ui/ToastProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hammad Ur Rehman — Full Stack Developer",
  description:
    "Software Engineer specializing in ASP.NET Core, MERN Stack, and Next.js. Building production-ready web applications with clean, scalable architecture.",
  keywords: [
    "Hammad Ur Rehman",
    "Full Stack Developer",
    "ASP.NET Core",
    "MERN Stack",
    "Next.js",
    "Software Engineer",
    "Lahore",
    "Pakistan",
    "React",
    "Node.js",
  ],
  authors: [{ name: "Hammad Ur Rehman" }],
  openGraph: {
    title: "Hammad Ur Rehman — Full Stack Developer",
    description:
      "Software Engineer specializing in ASP.NET Core, MERN Stack, and Next.js.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hammad Ur Rehman — Full Stack Developer",
    description:
      "Software Engineer specializing in ASP.NET Core, MERN Stack, and Next.js.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
        <ToastProvider />
      </body>
    </html>
  );
}
