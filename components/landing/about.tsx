// components/landing/about.tsx

import { Award, Users, Goal } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="w-full py-20 lg:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        {/* Judul Section */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
            Tentang Kami
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Dari Ide Menjadi Karya Digital
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Lima Cipta Digital adalah partner kreatif Anda. Kami bersemangat
            membantu bisnis bertumbuh melalui solusi digital yang efektif dan
            berkualitas tinggi.
          </p>
        </div>

        {/* Grid Keunggulan */}
        <div className="mx-auto grid max-w-5xl items-stretch gap-8 sm:grid-cols-3">
          <div className="flex flex-col items-center text-center p-6">
            <Award className="h-10 w-10 mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">Kualitas Terbaik</h3>
            <p className="text-muted-foreground text-sm">
              Kami berkomitmen untuk memberikan hasil yang tidak hanya bagus
              secara estetika, tapi juga fungsional dan berdampak.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6">
            <Users className="h-10 w-10 mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">Pendekatan Kolaboratif</h3>
            <p className="text-muted-foreground text-sm">
              Anda adalah bagian dari tim. Kami mendengarkan, berdiskusi, dan
              bekerja sama untuk mencapai visi Anda.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6">
            <Goal className="h-10 w-10 mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">Fokus pada Tujuan</h3>
            <p className="text-muted-foreground text-sm">
              Setiap proyek dikerjakan dengan tujuan yang jelas: membantu
              kesuksesan dan pertumbuhan bisnis Anda.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
