// app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingWhatsAppButton from "@/components/common/FloatingWhatsAppButton"; // 1. Impor komponen

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lima Cipta Digital - Jasa Website & Desain Grafis Profesional",
  description:
    "Solusi kreatif untuk UMKM dan bisnis di seluruh Indonesia. Kami menawarkan jasa pembuatan website, desain grafis, aplikasi Android, hingga merchandise.",
  keywords: [
    "jasa website",
    "desain grafis online",
    "freelance desainer",
    "lima cipta digital",
    "jasa toko online",
    "jasa desain logo",
    "jasa aplikasi android",
  ],
  authors: [{ name: "Lima Cipta Digital" }],
  creator: "Lima Cipta Digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <FloatingWhatsAppButton /> {/* 2. Panggil komponen di sini */}
      </body>
    </html>
  );
}
