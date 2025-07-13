// components/landing/hero.tsx

import Link from "next/link";
import { MoveRight, MessagesSquare } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full py-20 lg:py-32 bg-background text-foreground"
    >
      <div className="container px-6 md:px-10 ">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* Kolom Teks */}
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none">
              Mewujudkan Ide Anda Menjadi Solusi Digital Profesional
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Kami membantu bisnis, sekolah, dan individu membangun citra merek
              yang kuat melalui website, desain grafis, dan produk kreatif yang
              berkualitas.
            </p>
            {/* Tombol Aksi */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20layanan%20Anda." // Ganti dengan nomor WhatsApp Anda
                target="_blank"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                <MessagesSquare className="mr-2 h-5 w-5" />
                Hubungi via WhatsApp
              </Link>
              <Link
                href="#portfolio" // Arahkan ke section portofolio
                className="inline-flex h-12 items-center justify-center rounded-lg border border-border bg-transparent px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Lihat Portofolio
                <MoveRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Kolom Visual/Gambar (Placeholder) */}
          <div className="flex items-center justify-center">
            {/* Ganti dengan komponen Image dari Next.js atau SVG kustom */}
            <div className="w-full max-w-md h-80 rounded-xl bg-muted flex items-center justify-center">
              <p className="text-muted-foreground">Visual/Gambar Portofolio</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
