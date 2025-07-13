// src/app/page.tsx
import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import Services from "@/components/landing/services";
import Portfolio from "@/components/landing/portfolio";
import Testimonial from "@/components/landing/testimonial";
import Contact from "@/components/landing/contact";
import About from "@/components/landing/about";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonial />
        <Contact />
      </main>
      <footer className="w-full shrink-0 border-t">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 items-center px-4 md:px-6">
          <p className="text-xs text-muted-foreground flex-1">
            &copy; {new Date().getFullYear()} Lima Cipta Digital. All Rights
            Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
