import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mahfuz Seidu Agbor — Backend Developer & AI Engineer",
  description:
    "Portfolio of Mahfuz Seidu Agbor. Backend developer specialising in Python, Django, REST APIs, and AI-powered systems. Building scalable, production-ready solutions.",
  keywords: [
    "Mahfuz Seidu Agbor",
    "Backend Developer",
    "Python Developer",
    "Django",
    "REST API",
    "AI Engineer",
    "Machine Learning",
    "Portfolio",
  ],
  openGraph: {
    title: "Mahfuz Seidu Agbor — Backend Developer & AI Engineer",
    description:
      "Backend developer specialising in Python, Django, REST APIs, and AI-powered systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-body antialiased bg-obsidian-900 text-obsidian-50 overflow-x-hidden noise-texture">
        {/* Skip to main content for keyboard/screen-reader users */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-0 focus:left-0 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-amber-500 focus:text-obsidian-900 focus:font-bold focus:font-heading"
        >
          Skip to main content
        </a>

        <main id="main">{children}</main>
      </body>
    </html>
  );
}
