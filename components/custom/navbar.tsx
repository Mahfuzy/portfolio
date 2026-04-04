"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="w-full fixed top-0 left-0 right-0 z-50 bg-[#0A0A0F]/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Title */}
          <div className="flex-shrink-0 min-w-[44px] min-h-[44px] flex items-center">
            <h1 className="text-xl font-bold bg-gradient-to-r from-gold-400 to-gold-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer">
              Mahfuz.dev
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-400 hover:text-gold-300 px-4 py-2 min-h-[44px] min-w-[44px] flex items-center rounded-lg text-sm font-medium transition-colors hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-gold-400 focus-visible:outline-offset-2"
                aria-label={`Navigate to ${link.label} section`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors focus-visible:outline-2 focus-visible:outline-gold-400 focus-visible:outline-offset-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav"
            className="md:hidden border-t border-white/5 bg-[#0D0D15] absolute left-0 right-0 top-16 w-full rounded-b-lg"
          >
            <div className="flex flex-col space-y-1 p-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="text-gray-400 hover:text-gold-300 px-4 py-3 rounded-lg text-sm font-medium transition-colors hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-gold-400 focus-visible:outline-offset-2 cursor-pointer"
                  aria-label={`Navigate to ${link.label} section`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}