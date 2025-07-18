// components/landing/hero.tsx

import Link from "next/link";
import Image from "next/image";
import { MoveRight, MessagesSquare } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-b from-secondary/50 to-background text-foreground"
    >
      <div className="container px-6 md:px-10">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex flex-col justify-center space-y-6 text-center items-center lg:text-left lg:items-start z-10">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none">
              Mewujudkan Ide Anda Menjadi{" "}
              <span className="text-primary">Solusi Digital Profesional</span>
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Kami membantu bisnis, sekolah, dan individu membangun citra merek
              yang kuat melalui website, desain grafis, dan produk kreatif yang
              berkualitas.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="https://wa.me/6283822995395?text=Halo,%20saya%20tertarik%20dengan%20layanan%20Anda."
                target="_blank"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                <MessagesSquare className="mr-2 h-5 w-5" />
                Hubungi via WhatsApp
              </Link>
              <Link
                href="#portfolio"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-border bg-transparent px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Lihat Portofolio
                <MoveRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center mb-8 lg:mb-0">
            <Image
              src="/mockup.webp"
              alt="Visual representasi layanan Lima Cipta Digital"
              width={1200}
              height={900}
              className="w-full max-w-lg rounded-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
