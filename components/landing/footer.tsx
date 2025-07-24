// components/landing/footer.tsx

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

// --- 1. Data dikelola secara terpusat agar mudah diubah ---
const services = [
  { name: "Website & Toko Online", href: "#services" },
  { name: "Aplikasi Android", href: "#services" },
  { name: "Desain Grafis", href: "#services" },
  { name: "Merchandise", href: "#services" },
  { name: "Iklan & Promosi", href: "#services" },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/limaciptadigital",
    icon: <Instagram className="h-4 w-4" />,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/limaciptadigital",
    icon: <Facebook className="h-4 w-4" />,
  },
  {
    name: "Twitter",
    href: "https://x.com/limaciptadigital",
    icon: <Twitter className="h-4 w-4" />,
  },
];

const Footer = () => {
  return (
    <footer className="w-full shrink-0 border-t bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
      <div className="container px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Kolom 1: Tentang Kami */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold">Lima Cipta Digital</h4>
            <p className="text-sm text-primary-foreground/90">
              Partner digital untuk UMKM, sekolah, dan komunitas di Indonesia.
              Membantu mewujudkan ide kreatif menjadi solusi digital yang
              berdampak nyata.
            </p>
          </div>

          {/* Kolom 2: Layanan */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold">Layanan Kami</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/90">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="hover:underline">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Kontak */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold">Kontak Kami</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/90">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-1" />
                {/* GANTI DENGAN ALAMAT LEBIH SPESIFIK */}
                <span>
                  Jl. Jenderal Sudirman Kav. 52-53, Jakarta Selatan, 12190,
                  Indonesia
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <Link
                  href="https://wa.me/6283822995395"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  +62 838-2299-5395
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                {/* GANTI DENGAN EMAIL DOMAIN PROFESIONAL */}
                <Link
                  href="mailto:kontak@limaciptadigital.com"
                  className="hover:underline"
                >
                  kontak@limaciptadigital.com
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Media Sosial */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold">Ikuti Kami</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="rounded-full border border-primary-foreground/50 p-2 text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
            <p className="pt-2 text-sm text-primary-foreground/90">
              Dapatkan update terbaru seputar layanan dan promosi menarik dari
              kami.
            </p>
          </div>
        </div>

        {/* Hak Cipta */}
        <div className="mt-12 flex flex-col items-center justify-center gap-20 border-t border-primary-foreground/20 pt-6 text-xs text-primary-foreground/80 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Lima Cipta Digital. All Rights
            Reserved.
          </p>
          <p>
            <a
              href="https://storyset.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Illustrations by Storyset
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
