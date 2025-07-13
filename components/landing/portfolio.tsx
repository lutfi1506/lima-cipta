// components/landing/portfolio.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

const portfolioItems = [
  {
    category: "Website",
    title: "Company Profile B-Corp",
    image: "https://placehold.co/500x300/1f2937/ffffff.png?text=Website",
    alt: "Tampilan mockup halaman utama website company profile untuk B-Corp di berbagai perangkat.",
  },
  {
    category: "Desain Grafis",
    title: "Logo & Branding K-Food",
    image: "https://placehold.co/500x300/4a0e89/ffffff.png?text=Desain+Grafis",
    alt: "Presentasi desain logo dan identitas brand untuk usaha kuliner Korea K-Food.",
  },
  {
    category: "Aplikasi",
    title: "Aplikasi Undangan Digital",
    image: "https://placehold.co/500x300/1f2937/ffffff.png?text=Aplikasi",
    alt: "Tampilan antarmuka pengguna (UI) dari aplikasi mobile undangan digital.",
  },
  {
    category: "Website",
    title: "Toko Online Furnitur",
    image: "https://placehold.co/500x300/4a0e89/ffffff.png?text=Toko+Online",
    alt: "Screenshot halaman produk dari website e-commerce (toko online) furnitur.",
  },
  {
    category: "Merchandise",
    title: "Kaos Komunitas Motor",
    image: "https://placehold.co/500x300/1f2937/ffffff.png?text=Merchandise",
    alt: "Mockup desain kaos custom untuk acara touring komunitas motor klasik.",
  },
  {
    category: "Desain Grafis",
    title: "Konten Instagram Edukasi",
    image: "https://placehold.co/500x300/4a0e89/ffffff.png?text=Konten+Sosmed",
    alt: "Contoh desain konten carousel edukasi untuk feed Instagram.",
  },
];

const categories = [
  "Semua",
  "Website",
  "Desain Grafis",
  "Aplikasi",
  "Merchandise",
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredItems =
    activeCategory === "Semua"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="w-full py-20 lg:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        {/* Judul Section */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
            Portofolio Kami
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Karya yang Berbicara
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Lihat beberapa proyek yang telah kami kerjakan untuk klien dari
            berbagai industri.
          </p>
        </div>

        {/* Tombol Filter */}
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted hover:bg-accent"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid Portofolio */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={500}
                  height={300}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
              <div className="p-4 bg-card">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
