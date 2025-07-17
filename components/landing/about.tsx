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
            Kami Percaya Setiap Usaha Berhak Bersinar
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Lima Cipta Digital lahir dari semangat kolaborasi. Kami adalah tim
            solid yang berdedikasi untuk membantu UMKM dan institusi pendidikan
            di Indonesia bertransformasi secara digital. Bagi kami, setiap ide
            berharga dan layak untuk menjangkau audiens yang lebih luas.
          </p>
        </div>

        {/* Grid Keunggulan */}
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-3">
          <div className="flex flex-col items-center text-center p-6">
            <Award className="h-10 w-10 mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">Desain Strategis</h3>
            <p className="text-muted-foreground text-sm">
              Kami merancang solusi yang tidak hanya menarik secara visual,
              tetapi juga fungsional dan dirancang untuk mencapai tujuan
              spesifik Anda.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6">
            <Users className="h-10 w-10 mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">Proses Kolaboratif</h3>
            <p className="text-muted-foreground text-sm">
              Anda adalah bagian terpenting dari proses kreatif. Kami bekerja
              bersama Anda di setiap langkah untuk memastikan visi Anda terwujud
              dengan sempurna.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6">
            <Goal className="h-10 w-10 mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">Fokus Pada Pertumbuhan</h3>
            <p className="text-muted-foreground text-sm">
              Keberhasilan kami diukur dari keberhasilan Anda. Kami berfokus
              memberikan hasil nyata untuk membantu UMKM dan sekolah terus
              berkembang di era digital.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
