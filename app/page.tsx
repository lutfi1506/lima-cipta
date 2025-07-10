// src/app/page.tsx
import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import TrustedBy from "@/components/landing/trusted";
import Services from "@/components/landing/services";
import Portfolio from "@/components/landing/portfolio";
import Testimonial from "@/components/landing/testimonial";
import Contact from "@/components/landing/contact";

export default function HomePage() {
  return (
    <div className="container m-auto flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustedBy />
        <Services />
        <Portfolio />
        <Testimonial />
        <Contact />
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Lima Cipta Digital. All Rights
          Reserved.
        </p>
      </footer>
    </div>
  );
}
