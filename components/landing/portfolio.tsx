// src/components/landing/portfolio-section.tsx
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "E-commerce Mewah",
    description:
      "Platform e-commerce untuk brand fashion premium dengan integrasi pembayaran.",
    image: "https://placehold.co/600x400.png",
    tags: ["Web App", "UI/UX", "Next.js"],
  },
  {
    title: "Aplikasi SaaS",
    description:
      "Desain dan pengembangan aplikasi Software-as-a-Service untuk manajemen proyek.",
    image: "https://placehold.co/600x400.png",
    tags: ["UI/UX", "React", "SaaS"],
  },
  {
    title: "Landing Page Startup",
    description:
      "Landing page konversi tinggi untuk peluncuran produk startup teknologi.",
    image: "https://placehold.co/600x400.png",
    tags: ["Web Design", "Marketing"],
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="w-full py-12 md:py-24 lg:py-32 bg-muted/50"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Karya yang Kami Banggakan
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Setiap piksel dan baris kode dibuat dengan dedikasi. Inilah
              beberapa di antaranya.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-12">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden group">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    width="600"
                    height="400"
                    alt={project.title}
                    className="aspect-video w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
