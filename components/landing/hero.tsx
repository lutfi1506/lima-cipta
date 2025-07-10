// src/components/landing/hero-section.tsx
"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Ubah Ide Anda Menjadi Karya Digital Luar Biasa
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Kami bukan hanya developer, kami adalah partner digital Anda.
                Kami menggabungkan teknologi modern dan desain yang berpusat
                pada pengguna untuk melambungkan bisnis Anda.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="#contact">Mulai Proyek Anda</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#portfolio">Lihat Hasil Kerja Kami</Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="/hero-image.jpg"
              width="600"
              height="400"
              alt="Digital Agency Hero Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
