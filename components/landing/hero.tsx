"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight, Building, Gem, Target, Zap } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// import Autoplay from "embla-carousel-autoplay";

// 1. Data untuk setiap slide carousel dikelola di sini
//    Ini membuat kode lebih bersih dan mudah diubah.
const carouselSlides = [
  {
    titlePrimary: "Website Profesional",
    titleSecondary: "untuk Jangkauan Global",
    subtitle:
      "Kami membangun website dan toko online yang cepat, aman, dan responsif untuk menampilkan brand Anda dan meningkatkan penjualan.",
    imageSrc: "/hero/designer.png", // Gambar yang sudah Anda miliki
    altText: "Mockup Website Profesional Lima Cipta Digital",
  },
  {
    titlePrimary: "Aplikasi Android",
    titleSecondary: "dalam Genggaman Anda",
    subtitle:
      "Wujudkan ide brilian Anda menjadi aplikasi Android yang intuitif. Dari konsep hingga rilis di Play Store, kami siap membantu.",
    imageSrc: "/hero/mobile.png", // GANTI DENGAN GAMBAR ANDA
    altText: "Mockup Aplikasi Android Lima Cipta Digital",
  },
  {
    titlePrimary: "Iklan & Promosi",
    titleSecondary: "yang Tepat Sasaran",
    subtitle:
      "Maksimalkan potensi bisnis Anda melalui kampanye iklan strategis di Google, Instagram, dan Facebook untuk hasil yang terukur.",
    imageSrc: "/hero/promote.png", // GANTI DENGAN GAMBAR ANDA
    altText: "Ilustrasi Pemasaran Digital oleh Lima Cipta Digital",
  },
  {
    titlePrimary: "Desain Grafis",
    titleSecondary: "yang Memukau",
    subtitle:
      "Logo, profil perusahaan, hingga konten media sosial. Tim desainer kami siap menciptakan visual yang konsisten dan menarik untuk brand Anda.",
    imageSrc: "/hero/design.png", // GANTI DENGAN GAMBAR ANDA
    altText: "Kolase Desain Grafis oleh Lima Cipta Digital",
  },
  {
    titlePrimary: "Merchandise Unik",
    titleSecondary: "untuk Brand Anda",
    subtitle:
      "Ciptakan merchandise ikonik dan berkualitas tinggi—dari kaos hingga hadiah korporat—untuk membangun loyalitas dan kebanggaan.",
    imageSrc: "/hero/merchandise.png", // GANTI DENGAN GAMBAR ANDA
    altText: "Mockup Merchandise oleh Lima Cipta Digital",
  },
];

// Komponen untuk menampilkan logo placeholder (tidak berubah)
const PlaceholderLogo = ({
  name,
  icon,
}: {
  name: string;
  icon: React.ReactNode;
}) => (
  <div className="flex items-center gap-2 h-10 px-4 bg-slate-100 rounded-md text-slate-500 text-sm font-semibold">
    {icon}
    {name}
  </div>
);

const Hero = () => {
  return (
    <section className="container pt-16 bg-linear-to-bl/oklch from-primary to-background">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {/* 3. Looping data slide untuk membuat setiap item carousel */}
          {carouselSlides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="grid lg:grid-cols-2 place-items-center gap-12 px-5 md:px-16">
                {/* Bagian Kiri: Konten Teks */}
                <div className="text-center lg:text-start space-y-6">
                  <main className="text-4xl md:text-5xl font-bold">
                    <h1>
                      {slide.titlePrimary}{" "}
                      <span className="text-secondary">
                        {slide.titleSecondary}
                      </span>
                    </h1>
                  </main>

                  <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
                    {slide.subtitle}
                  </p>

                  <div className="space-y-4 md:space-y-0 md:space-x-4">
                    <Button className="w-full md:w-auto p-5 font-semibold group shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30">
                      Mulai Proyek Anda{" "}
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <Button variant="outline" className="w-full md:w-auto p-5">
                      Lihat Portofolio
                    </Button>
                  </div>
                </div>

                {/* Bagian Kanan: Gambar Hero */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-200 to-cyan-200 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500 -z-10"></div>
                  <div className="relative rounded-xl p-4">
                    <Image
                      src={slide.imageSrc}
                      width={500}
                      height={500}
                      alt={slide.altText}
                      className="h-auto w-full rounded-lg object-contain"
                      priority={index === 0} // Prioritaskan gambar pertama untuk LCP
                    />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* --- PERUBAHAN UTAMA DI SINI --- */}
        <CarouselPrevious
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 
                     hidden lg:inline-flex bg-primary-foreground hover:bg-primary text-primary hover:text-primary-foreground border-primary"
        />
        <CarouselNext
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 
                     hidden lg:inline-flex bg-primary-foreground hover:bg-primary text-primary hover:text-primary-foreground border-primary"
        />
      </Carousel>
    </section>
  );
};

export default Hero;
