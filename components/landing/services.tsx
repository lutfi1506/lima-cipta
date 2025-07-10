// src/components/landing/services-section.tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { LaptopIcon, PenToolIcon, SearchIcon } from "lucide-react";

const services = [
  {
    icon: LaptopIcon,
    title: "Web Development",
    description:
      "Pembuatan website modern, cepat, dan responsif menggunakan teknologi terkini seperti React dan Next.js.",
  },
  {
    icon: PenToolIcon,
    title: "UI/UX Design",
    description:
      "Desain antarmuka yang intuitif dan pengalaman pengguna yang memikat untuk aplikasi web dan mobile Anda.",
  },
  {
    icon: SearchIcon,
    title: "Digital Marketing",
    description:
      "Strategi pemasaran digital, SEO, dan manajemen media sosial untuk meningkatkan jangkauan brand Anda.",
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Solusi Digital untuk Anda
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Dari ide hingga peluncuran, kami menyediakan layanan lengkap untuk
              mewujudkan visi digital Anda.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-stretch gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="flex flex-col hover:shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <CardHeader>
                <div className="p-4 bg-primary/10 rounded-full w-fit mb-4">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
