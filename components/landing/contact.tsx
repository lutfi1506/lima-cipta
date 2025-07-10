// src/components/landing/contact-section.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-12 md:py-24 lg:py-32 bg-muted/50"
    >
      <div className="container grid items-center justify-center gap-8 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Mari Wujudkan Proyek Anda
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Punya ide brilian? Kami siap membantu. Isi formulir di bawah dan tim
            kami akan segera menghubungi Anda untuk konsultasi gratis.
          </p>
        </div>
        <div className="mx-auto w-full max-w-lg">
          <form className="grid gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="grid gap-1.5 text-left">
                <Label htmlFor="name">Nama</Label>
                <Input id="name" placeholder="Nama Lengkap" required />
              </div>
              <div className="grid gap-1.5 text-left">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Email Anda"
                  required
                />
              </div>
            </div>
            <div className="grid gap-1.5 text-left">
              <Label htmlFor="message">Pesan Anda</Label>
              <Textarea
                placeholder="Jelaskan kebutuhan proyek Anda di sini..."
                id="message"
                required
              />
            </div>
            <Button type="submit" size="lg">
              Kirim Pesan
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
