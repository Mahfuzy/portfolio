import type { Metadata, Viewport } from "next";
import { Dela_Gothic_One, JetBrains_Mono, Newsreader } from "next/font/google";
import Nav from "@/components/site/nav";
import Footer from "@/components/site/footer";
import { MotionProvider } from "@/components/site/motion";
import "./globals.css";

const display = Dela_Gothic_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const serif = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-serif",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-blush-two-60.vercel.app"),
  title: "Mahfuz Seidu Agbor: backend developer, Ghana",
  description:
    "From a pricing card in 2023 to real-time AI backends. The story of Mahfuz Seidu Agbor, a final-year CS student in Ghana, told through his commits.",
  openGraph: {
    title: "Mahfuz Seidu Agbor: the story so far",
    description: "Backend developer from Ghana. Fluent in Python. Still losing a fight with Japanese.",
    images: [{ url: "/mahfuz-portrait.jpg", width: 960, height: 1280 }],
  },
};

export const viewport: Viewport = {
  themeColor: "#efeae0",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${serif.variable} ${mono.variable}`}>
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-[100] focus:bg-ink focus:px-4 focus:py-3 focus:font-mono focus:text-sm focus:text-paper"
        >
          Skip to content
        </a>
        <div aria-hidden className="grain" />
        <MotionProvider>
          <Nav />
          <main id="main">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
