import { Globe, Palette, FileText, Smartphone, Shirt } from "lucide-react";

const servicesList = [
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: "Website & Toko Online",
    description:
      "Kami membangun website modern yang tidak hanya berfungsi sebagai profil, tapi juga sebagai mesin penjualan Anda. Cocok untuk UMKM, sekolah, hingga landing page produk.",
  },
  {
    icon: <Palette className="h-8 w-8 text-primary" />,
    title: "Desain Grafis & Branding",
    description:
      "Dari desain logo yang ikonik hingga konten media sosial yang menarik. Kami membantu membangun identitas visual yang kuat dan konsisten untuk merek Anda.",
  },
  {
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    title: "Aplikasi Android Kustom",
    description:
      "Butuh aplikasi sederhana untuk katalog, profil perusahaan, atau undangan digital? Kami kembangkan aplikasi yang fungsional dan mudah diakses di Play Store.",
  },
  {
    icon: <Shirt className="h-8 w-8 text-primary" />,
    title: "Merchandise & Produk Kreatif",
    description:
      "Wujudkan ide Anda dalam bentuk fisik. Kami melayani desain dan produksi merchandise (kaos, stiker, dll) untuk kebutuhan komunitas, acara, atau promosi.",
  },
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: "Pengetikan & Olah Dokumen",
    description:
      "Layanan profesional untuk olah data dan pengetikan dokumen penting seperti proposal, makalah, atau laporan, dengan format yang rapi dan akurat.",
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full py-20 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
            Layanan Kami
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Solusi Digital Terintegrasi untuk Anda
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Dari identitas visual hingga kehadiran online, kami menyediakan
            semua yang Anda butuhkan untuk bertumbuh di dunia digital.
          </p>
        </div>

        <div className="mx-auto flex max-w-5xl flex-wrap items-stretch justify-center gap-8">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="flex w-full flex-col items-start rounded-lg bg-card p-6 shadow-sm transition-shadow hover:shadow-md sm:w-[300px]"
            >
              <div className="p-3 rounded-full bg-primary/10 mb-4 mx-auto">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-center mx-auto">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm text-justify">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
