// components/landing/header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "#hero", label: "Beranda" },
  { href: "#about", label: "Tentang Kami" },
  { href: "#services", label: "Layanan" },
  { href: "#portfolio", label: "Portofolio" },
  { href: "#testimonial", label: "Testimoni" },
  { href: "#contact", label: "Kontak" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-6 md:px-15">
        <div className="flex h-16 items-center justify-between">
          <Link href="#" className="flex items-center gap-2 font-bold text-lg">
            <Image
              src="/logo.webp"
              alt="Lima Cipta Digital Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span>Lima Cipta Digital</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
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
              href="https://wa.me/6283822995395?text=Halo,%20saya%20tertarik%20dengan%20layanan%20Anda."
              target="_blank"
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Hubungi Kami
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-background border-t">
          <nav className="container flex flex-col items-center gap-6 py-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://wa.me/6283822995395?text=Halo,%20saya%20tertarik%20dengan%20layanan%20Anda."
              target="_blank"
              className="w-full max-w-xs inline-flex h-12 items-center justify-center rounded-lg bg-primary px-4 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Hubungi Kami
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
