import Image from "next/image";
import AnimationWrapper from "../common/AnimationWrapper";
import { CheckCircle, Zap, TrendingUp, Users, Award } from "lucide-react";

const ourPromise = [
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    value: "100% Fokus",
    label: "Pada Keberhasilan Proyek Anda",
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    value: "Pendekatan Agile",
    label: "Adaptif dan Responsif Terhadap Perubahan",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    value: "Teknologi Modern",
    label: "Solusi Terkini untuk Hasil Optimal",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    value: "Kemitraan Sejati",
    label: "Kolaborasi Transparan dari Awal Hingga Akhir",
  },
];

const values = [
  {
    title: "Semangat untuk Inovasi",
    description:
      "Kami membawa energi dan perspektif baru untuk menciptakan solusi yang unik dan efektif.",
  },
  {
    title: "Komitmen pada Kualitas",
    description:
      "Setiap proyek adalah portofolio utama kami. Kami memberikan yang terbaik, tanpa kompromi.",
  },
  {
    title: "Desain yang Berpusat pada Pengguna",
    description:
      "Kami terobsesi untuk menciptakan pengalaman yang intuitif dan menyenangkan bagi pengguna akhir.",
  },
];

const About = () => {
  return (
    <section id="about" className="container pt-16 bg-sidebar">
      <div className="py-12 px-7 md:px-14">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-center">
          {/* Bagian Teks */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                Membangun Masa Depan{" "}
              </span>
              Digital, Bersama.
            </h2>
            <p className="text-xl text-muted-foreground mt-4">
              Lima Cipta adalah tim baru yang terdiri dari para talenta digital
              yang penuh semangat. Kami hadir bukan karena kami telah melakukan
              semuanya, tetapi karena kami percaya kami dapat melakukannya lebih
              baik. Misi kami adalah memberikan energi baru, ide-ide segar, dan
              dedikasi penuh untuk setiap proyek yang kami tangani.
            </p>

            <div className="mt-8 space-y-4">
              {values.map((value) => (
                <div key={value.title} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bagian Visual */}
          <div className="md:w-1/2 flex justify-center items-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-200 via-pink-200 to-purple-200 rounded-full blur-xl opacity-60 animate-pulse-slow"></div>
              <Image
                src="/logo.webp"
                width={300}
                height={300}
                alt="Logo Lima Cipta"
                className="relative w-full h-auto rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Janji dan Pendekatan Kami */}
        <div className="mt-20 px-6 text-center">
          <h3 className="text-2xl font-bold mb-10">Pendekatan Kami</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {ourPromise.map(({ icon, value, label }) => (
              <div key={value} className="flex flex-col items-center gap-2">
                {icon}
                <h4 className="text-2xl font-bold text-primary">{value}</h4>
                <p className="text-md font-medium text-muted-foreground">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
