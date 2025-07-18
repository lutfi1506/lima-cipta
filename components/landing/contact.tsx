// components/landing/contact.tsx

import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-20 lg:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
            Hubungi Kami
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Siap Mewujudkan Ide Anda?
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Kami sangat antusias untuk mendengar tentang proyek Anda. Isi
            formulir di bawah atau hubungi kami langsung melalui WhatsApp untuk
            respon lebih cepat.
          </p>
        </div>

        <div className="mx-auto max-w-4xl grid lg:grid-cols-2 gap-12">
          <form className="flex flex-col space-y-4">
            <Input
              id="name"
              type="text"
              placeholder="Nama Lengkap Anda"
              className="bg-white"
              required
            />
            <Input
              id="email"
              type="email"
              placeholder="Alamat Email Anda"
              className="bg-white"
              required
            />
            <Textarea
              id="message"
              placeholder="Ceritakan sedikit tentang proyek atau ide yang ingin Anda wujudkan..."
              rows={5}
              className="bg-white"
              required
            />
            <Button type="submit" size="lg" className="w-full">
              Kirim Pesan
            </Button>
          </form>

          <div className="flex flex-col justify-center space-y-6">
            <h3 className="text-2xl font-bold">Detail Kontak</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-md bg-muted flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">WhatsApp (Respon Cepat)</p>
                  <Link
                    href="https://wa.me/6283822995395?text=Halo, saya tertarik dengan layanan Lima Cipta Digital."
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +62 812-3456-7890
                  </Link>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-md bg-muted flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <a
                    href="mailto:halo@limacipta.co.id"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    halo@limacipta.id
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-md bg-muted flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Lokasi</p>
                  <p className="text-muted-foreground">
                    Melayani Klien di Seluruh Indonesia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
