import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mahfuz Seidu Agbor | Backend Developer",
  description: "Portfolio of Mahfuz Seidu Agbor – Backend Developer specialising in Python, Django, and AI-powered systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} antialiased bg-[#0A0A0F] text-white overflow-x-hidden`}
      >
        {/* Skip to main content link for accessibility */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-0 focus:left-0 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-gold-400 focus:text-black focus:font-bold"
        >
          Skip to main content
        </a>
        
        <main id="main">
          {children}
        </main>
      </body>
    </html>
  );
}
