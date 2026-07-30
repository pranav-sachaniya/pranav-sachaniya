"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/data";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out-expo ${
        isScrolled ? "py-4" : "py-6 sm:py-8"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        {/* Nav Container */}
        <div
          className={`flex items-center justify-between w-full max-w-5xl mx-auto rounded-full transition-all duration-500 ease-out-expo ${
            isScrolled
              ? "bg-bg-surface/80 backdrop-blur-md shadow-[var(--shadow-sm)] border border-border px-6 py-3"
              : "px-0 py-0"
          }`}
        >
          <a href="#" className="text-xl font-bold font-display tracking-tight z-50">
            Pranav
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <MagneticButton size="sm" href="#contact">
              Let's Talk
            </MagneticButton>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 text-text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-bg-primary pt-24 px-6 flex flex-col md:hidden"
          >
            <nav className="flex flex-col gap-6 text-center mt-12">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-3xl font-display font-bold text-text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-8 mx-auto">
                <MagneticButton
                  size="lg"
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Let's Talk
                </MagneticButton>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
