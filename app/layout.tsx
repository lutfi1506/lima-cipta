// app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingWhatsAppButton from "@/components/common/FloatingWhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.limaciptadigital.com"),
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://www.limaciptadigital.com",
    title: "Lima Cipta Digital - Jasa Website & Desain Grafis Profesional",
    description:
      "Solusi kreatif untuk UMKM dan bisnis di seluruh Indonesia. Kami menawarkan jasa pembuatan website, desain grafis, aplikasi Android, hingga merchandise.",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Lima Cipta Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lima Cipta Digital - Jasa Website & Desain Grafis Profesional",
    description:
      "Solusi kreatif untuk UMKM dan bisnis di seluruh Indonesia. Kami menawarkan jasa pembuatan website, desain grafis, aplikasi Android, hingga merchandise.",
    images: ["/og-image.webp"],
    creator: "@limaciptadigital",
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
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
