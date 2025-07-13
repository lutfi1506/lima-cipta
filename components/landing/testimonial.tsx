// src/components/landing/testimonial-section.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Aria W.",
    title: "CEO, Innovate Inc.",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    text: "Lima Cipta Digital mengubah visi kami menjadi kenyataan. Profesionalisme dan kualitas kerja mereka melampaui ekspektasi. Sangat direkomendasikan!",
  },
  {
    name: "Budi S.",
    title: "Founder, Starlight Co.",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026705d",
    text: "Proses kerjanya sangat terstruktur dan komunikatif. Hasil akhir websitenya tidak hanya indah, tapi juga sangat cepat dan fungsional.",
  },
];

export default function Testimonial() {
  return (
    <section id="testimonial" className="w-full py-20 lg:py-32 ">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Apa Kata Mereka Tentang Kami
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Kepuasan klien adalah prioritas utama kami.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-1 md:grid-cols-2 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <p className="text-muted-foreground italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4 mt-6">
                  <Avatar>
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.title}
                    </p>
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
