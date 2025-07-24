import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AnimationWrapper from "../common/AnimationWrapper";
import Image from "next/image";
import { Check } from "lucide-react";

// Data layanan dengan tambahan URL gambar dan daftar fitur
const serviceList = [
  {
    title: "Pembuatan Website",
    description:
      "Membangun kehadiran digital Anda dengan website profesional, cepat, dan mobile-friendly yang dirancang untuk konversi.",
    image: "https://placehold.co/600x400/E0F2FE/0C4A6E?text=Website",
    features: [
      "Desain Custom & Modern",
      "SEO Friendly",
      "Responsif di Semua Perangkat",
      "Panel Admin Mudah",
    ],
  },
  {
    title: "Aplikasi Android",
    description:
      "Menjangkau jutaan pengguna melalui aplikasi Android yang fungsional, intuitif, dan dibangun dengan performa terbaik.",
    image: "https://placehold.co/600x400/D1FAE5/064E3B?text=Aplikasi+Android",
    features: [
      "Pengembangan Native",
      "Desain UI/UX Menarik",
      "Integrasi Fitur Custom",
      "Dukungan Penuh",
    ],
  },
  {
    title: "Desain Grafis",
    description:
      "Menciptakan identitas visual yang kuat dan materi promosi yang menarik, mulai dari logo hingga konten media sosial.",
    image: "https://placehold.co/600x400/F3E8FF/581C87?text=Desain+Grafis",
    features: [
      "Desain Logo & Branding",
      "Konten Media Sosial",
      "Desain Kemasan",
      "Materi Pemasaran",
    ],
  },
  {
    title: "Merchandise",
    description:
      "Wujudkan brand Anda dalam produk fisik. Kami menyediakan desain dan produksi merchandise berkualitas tinggi.",
    image: "https://placehold.co/600x400/FEF2F2/991B1B?text=Merchandise",
    features: [
      "Desain Kaos & Topi",
      "Mug, Totebag, & Stiker",
      "Kualitas Cetak Premium",
    ],
  },
  {
    title: "Promosi / Iklan",
    description:
      "Tingkatkan jangkauan bisnis Anda dengan kampanye iklan digital yang strategis, tertarget, dan terukur.",
    image: "https://placehold.co/600x400/FFF7ED/9A3412?text=Promosi+&+Iklan",
    features: [
      "Iklan Media Sosial (Meta/TikTok)",
      "Google Ads (SEM)",
      "Manajemen Kampanye",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="container py-24 sm:py-32 px-14">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Layanan yang Kami{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Tawarkan
          </span>
        </h2>
        <p className="mt-4 text-xl text-muted-foreground">
          Kami menyediakan solusi digital end-to-end untuk membantu bisnis Anda
          bertransformasi.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {serviceList.map((service) => (
          <Card
            key={service.title}
            className="flex flex-col md:flex-row items-center overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl p-0"
          >
            <div className="w-full md:w-5/12 h-64 md:h-full relative">
              <Image
                src={service.image}
                alt={`Gambar untuk ${service.title}`}
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-7/12 py-4">
              <CardHeader>
                <CardTitle className="mb-3 text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
