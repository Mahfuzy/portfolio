"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-obsidian-900/90 backdrop-blur-lg border-b border-obsidian-600/30 shadow-lg shadow-black/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo — span, NOT h1 (page.tsx owns the h1) */}
          <a
            href="#"
            className="flex-shrink-0 min-w-[44px] min-h-[44px] flex items-center cursor-pointer"
          >
            <span className="font-heading text-xl font-bold text-amber-500 hover:text-amber-400 transition-colors duration-200">
              mahfuz
              <span className="text-obsidian-200">.dev</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 min-h-[44px] min-w-[44px] flex items-center rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer
                  ${
                    activeSection === link.href
                      ? "text-amber-500"
                      : "text-obsidian-200 hover:text-obsidian-50 hover:bg-obsidian-800/50"
                  }`}
                aria-label={`Navigate to ${link.label} section`}
                aria-current={activeSection === link.href ? "true" : undefined}
              >
                {link.label}
                {/* Active indicator dot */}
                {activeSection === link.href && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-amber-500" />
                )}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-obsidian-800/50 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-obsidian-50" />
            ) : (
              <Menu className="w-5 h-5 text-obsidian-50" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          id="mobile-nav"
          className={`md:hidden absolute left-0 right-0 top-16 bg-obsidian-900/95 backdrop-blur-lg border-b border-obsidian-600/30 transition-all duration-300 origin-top ${
            mobileMenuOpen
              ? "opacity-100 scale-y-100 pointer-events-auto"
              : "opacity-0 scale-y-95 pointer-events-none"
          }`}
        >
          <div className="flex flex-col p-3 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer flex items-center gap-3
                  ${
                    activeSection === link.href
                      ? "text-amber-500 bg-amber-500/5"
                      : "text-obsidian-200 hover:text-obsidian-50 hover:bg-obsidian-800/50"
                  }`}
                aria-label={`Navigate to ${link.label} section`}
              >
                {activeSection === link.href && (
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                )}
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}