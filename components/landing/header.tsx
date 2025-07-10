// src/components/landing/header.tsx
import Link from "next/link";
import { CodeXmlIcon } from "lucide-react";

export default function Header() {
  return (
    // Biarkan header ini full-width untuk latar belakang
    <header className="sticky top-0 z-50 w-full px-10 border-b bg-background/95 backdrop-blur-sm">
      {/* Tambahkan div dengan class "container" untuk membungkus konten */}
      <div className="container flex items-center h-14 px-4 lg:px-6">
        <Link href="#" className="flex items-center justify-center mr-6">
          <CodeXmlIcon className="h-6 w-6 text-primary" />
          <span className="ml-2 font-semibold">Lima Cipta Digital</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#services"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Layanan
          </Link>
          <Link
            href="#portfolio"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Portofolio
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Testimoni
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Kontak
          </Link>
        </nav>
      </div>
    </header>
  );
}
