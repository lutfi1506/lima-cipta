"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsAppButton() {
  return (
    <Link
      href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20layanan%20Anda."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
      aria-label="Hubungi kami di WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </Link>
  );
}
