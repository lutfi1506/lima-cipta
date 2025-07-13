// components/landing/header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Rocket } from "lucide-react";

const navLinks = [
  { href: "#services", label: "Layanan" },
  { href: "#portfolio", label: "Portofolio" },
  { href: "#testimonial", label: "Testimoni" },
  { href: "#contact", label: "Kontak" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-2 font-bold text-lg">
            <Rocket className="h-6 w-6 text-primary" />
            <span>Lima Cipta Digital</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20layanan%20Anda."
              target="_blank"
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Hubungi Kami
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t">
          <nav className="flex flex-col gap-4 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary"
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20layanan%20Anda."
              target="_blank"
              className="w-full inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Hubungi Kami
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
