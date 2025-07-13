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

  // Metadata Open Graph
  openGraph: {
    title: "Lima Cipta Digital - Jasa Website & Desain Grafis Profesional",
    description: "Solusi kreatif untuk UMKM dan bisnis di seluruh Indonesia.",
    url: "https://www.namawebsitemu.com", // Ganti dengan URL asli Anda nanti
    siteName: "Lima Cipta Digital",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Layanan Jasa Website dan Desain Grafis oleh Lima Cipta Digital",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  // Metadata Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Lima Cipta Digital - Jasa Website & Desain Grafis Profesional",
    description:
      "Jasa pembuatan website, desain grafis, dan merchandise untuk bisnis Anda.",
    images: ["/og-image.png"],
  },

  // Metadata Lainnya
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
