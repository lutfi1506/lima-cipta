"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Button } from "../ui/button";
import { Lightbulb, Palette, Wrench } from "lucide-react";

// Data untuk Studi Kasus Konseptual
const caseStudies = [
  {
    id: "website",
    category: "Website & Branding",
    title: "Kopi Senja - Rebranding & Website E-Commerce",
    challenge:
      "Kopi Senja, sebuah kedai kopi lokal, ingin bertransisi ke ranah digital untuk menjangkau pelanggan yang lebih luas. Mereka membutuhkan identitas brand yang segar dan sebuah website e-commerce yang mudah digunakan.",
    solution: [
      {
        icon: <Lightbulb className="h-6 w-6 text-primary" />,
        step: "Tahap 1: Strategi & Riset",
        details:
          "Menganalisis target pasar dan kompetitor untuk merumuskan identitas brand yang unik dan strategi penjualan online yang efektif.",
      },
      {
        icon: <Palette className="h-6 w-6 text-primary" />,
        step: "Tahap 2: Desain UI/UX",
        details:
          "Merancang logo baru dan antarmuka website yang bersih, modern, dan mengutamakan kemudahan dalam proses pemesanan.",
      },
      {
        icon: <Wrench className="h-6 w-6 text-primary" />,
        step: "Tahap 3: Pengembangan",
        details:
          "Membangun website dengan teknologi Next.js untuk performa super cepat dan mengintegrasikan sistem pembayaran yang aman.",
      },
    ],
    result:
      "Sebuah platform digital yang tidak hanya cantik secara visual, tetapi juga berhasil meningkatkan brand awareness dan membuka kanal pendapatan baru bagi Kopi Senja.",
    image: "https://placehold.co/1200x800/A78BFA/FFFFFF?text=Kopi+Senja+Mockup",
  },
  {
    id: "android",
    category: "Aplikasi Android",
    title: "GearUp - Aplikasi Komunitas Otomotif",
    challenge:
      "Komunitas otomotif 'GearUp' memerlukan sebuah platform terpusat di mana para anggotanya dapat berbagi informasi, jadwal acara, dan berdiskusi secara eksklusif.",
    solution: [
      {
        icon: <Lightbulb className="h-6 w-6 text-primary" />,
        step: "Tahap 1: Perencanaan Fitur",
        details:
          "Melakukan workshop dengan perwakilan komunitas untuk memetakan fitur-fitur utama seperti forum, kalender acara, dan profil anggota.",
      },
      {
        icon: <Palette className="h-6 w-6 text-primary" />,
        step: "Tahap 2: Prototyping & Desain",
        details:
          "Membuat prototipe interaktif untuk menguji alur pengguna sebelum masuk ke tahap desain antarmuka yang gagah dan sesuai tema otomotif.",
      },
      {
        icon: <Wrench className="h-6 w-6 text-primary" />,
        step: "Tahap 3: Pengembangan Native",
        details:
          "Mengembangkan aplikasi dengan Kotlin untuk memastikan performa yang mulus, stabil, dan integrasi penuh dengan fitur-fitur perangkat Android.",
      },
    ],
    result:
      "Aplikasi mobile yang menjadi 'rumah digital' bagi komunitas, meningkatkan interaksi anggota dan mempermudah koordinasi kegiatan.",
    image: "https://placehold.co/1200x800/34D399/FFFFFF?text=GearUp+App+Mockup",
  },
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState(caseStudies[0].id);

  const activeStudy = caseStudies.find((study) => study.id === activeTab);

  return (
    <section id="portfolio" className="container py-24 sm:py-32 bg-sidebar">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Bagaimana Kami{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Bekerja
          </span>
        </h2>
        <p className="mt-4 text-xl text-muted-foreground">
          Kami mengubah ide menjadi kenyataan melalui proses yang terstruktur
          dan kolaboratif.
        </p>
      </div>

      <div className="flex justify-center gap-4 mb-8">
        {caseStudies.map((study) => (
          <Button
            key={study.id}
            variant={activeTab === study.id ? "default" : "outline"}
            onClick={() => setActiveTab(study.id)}
          >
            {study.category}
          </Button>
        ))}
      </div>

      {/* Konten Studi Kasus */}
      {activeStudy && (
        <Card className="overflow-hidden bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Kolom Gambar */}
            <div className="relative min-h-[300px] lg:min-h-[500px]">
              <Image
                src={activeStudy.image}
                alt={`Mockup untuk ${activeStudy.title}`}
                fill
                className="object-cover"
              />
            </div>

            {/* Kolom Teks */}
            <div className="p-8 md:p-10 flex flex-col">
              <Badge variant="secondary" className="w-fit mb-2">
                {activeStudy.category}
              </Badge>
              <CardTitle className="text-2xl mb-4">
                {activeStudy.title}
              </CardTitle>

              <p className="text-muted-foreground mb-6">
                <span className="font-semibold text-foreground">
                  Tantangan:
                </span>{" "}
                {activeStudy.challenge}
              </p>

              <h3 className="font-semibold text-lg mb-3">
                Solusi & Proses Kami:
              </h3>
              <div className="space-y-4 mb-6">
                {activeStudy.solution.map((sol, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">{sol.icon}</div>
                    <div>
                      <p className="font-semibold">{sol.step}</p>
                      <p className="text-sm text-muted-foreground">
                        {sol.details}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-auto bg-muted/50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Hasil Akhir:</h3>
                <p className="text-sm text-muted-foreground">
                  {activeStudy.result}
                </p>
              </div>
            </div>
          </div>
        </Card>
      )}
    </section>
  );
};

export default Portfolio;
