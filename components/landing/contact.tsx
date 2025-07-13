// components/landing/contact.tsx

import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-20 lg:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        {/* Judul Section */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
            Hubungi Kami
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Siap Memulai Proyek Anda?
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Kami sangat antusias untuk mendengar ide Anda. Hubungi kami melalui
            formulir di bawah atau detail kontak di samping.
          </p>
        </div>

        {/* Konten Kontak (Grid) */}
        <div className="mx-auto max-w-4xl grid lg:grid-cols-2 gap-12">
          {/* Kolom Formulir */}
          <div className="flex flex-col space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">
                Nama
              </label>
              <input
                id="name"
                type="text"
                placeholder="Nama Anda"
                className="w-full rounded-md border border-input bg-background p-3 text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email Anda"
                className="w-full rounded-md border border-input bg-background p-3 text-sm"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Pesan
              </label>
              <textarea
                id="message"
                placeholder="Tuliskan pesan Anda di sini..."
                rows={5}
                className="w-full rounded-md border border-input bg-background p-3 text-sm"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full h-12 rounded-lg bg-primary text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Kirim Pesan
            </button>
          </div>

          {/* Kolom Detail Kontak */}
          <div className="flex flex-col justify-center space-y-6">
            <h3 className="text-2xl font-bold">Detail Kontak</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-md bg-muted">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <Link
                    href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20layanan%20Anda."
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +62 812-3456-7890
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-md bg-muted">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <a
                    href="mailto:halo@limacipta.id" // Ganti dengan email Anda
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    halo@limacipta.id
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-md bg-muted">
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
