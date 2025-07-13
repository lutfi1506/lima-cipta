// components/landing/services.tsx

import { Globe, Palette, FileText, Smartphone, Shirt } from "lucide-react";

const servicesList = [
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: "Desain & Pembuatan Website",
    description:
      "Kami merancang Company Profile, Toko Online, dan Landing Page yang responsif dan modern untuk kebutuhan bisnis Anda.",
  },
  {
    icon: <Palette className="h-8 w-8 text-primary" />,
    title: "Desain Grafis",
    description:
      "Layanan desain kreatif untuk Flayer, Poster, Logo, Banner, hingga konten visual untuk media sosial Anda.",
  },
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: "Jasa Pengetikan & Dokumen",
    description:
      "Jasa profesional untuk pengetikan dan pembuatan dokumen seperti Proposal, Skripsi, Makalah, dan Laporan.",
  },
  {
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    title: "Aplikasi Android Sederhana",
    description:
      "Pengembangan aplikasi Android untuk portofolio, company profile, undangan digital, dan kebutuhan spesifik lainnya.",
  },
  {
    icon: <Shirt className="h-8 w-8 text-primary" />,
    title: "Produk Kreatif & Merchandise",
    description:
      "Produksi berbagai merchandise custom seperti Kaos, Stiker, Gantungan Kunci, dan lainnya untuk branding atau acara Anda.",
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full py-20 lg:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        {/* Judul Section */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
            Layanan Kami
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Solusi Lengkap untuk Kebutuhan Digital Anda
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Dari identitas visual hingga kehadiran online, kami menyediakan
            layanan terintegrasi untuk mendukung pertumbuhan Anda.
          </p>
        </div>

        {/* Container Layanan - MENGGUNAKAN FLEXBOX */}
        <div className="mx-auto flex max-w-5xl flex-wrap items-stretch justify-center gap-8">
          {servicesList.map((service, index) => (
            // Setiap kartu sekarang memiliki lebar yang ditentukan
            <div
              key={index}
              className="flex w-full flex-col items-start rounded-lg bg-card p-6 shadow-sm transition-shadow hover:shadow-md sm:w-[300px] text-center justify-center"
            >
              <div className="p-3 rounded-full bg-primary/10 mb-4 mx-auto">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 mx-auto">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
