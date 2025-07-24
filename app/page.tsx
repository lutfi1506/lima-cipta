// src/app/page.tsx
import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import Services from "@/components/landing/services";
import Portfolio from "@/components/landing/portfolio";
import Contact from "@/components/landing/contact";
import About from "@/components/landing/about";
import Footer from "@/components/landing/footer";
import AnimationWrapper from "@/components/common/AnimationWrapper";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <AnimationWrapper>
          <About />
        </AnimationWrapper>
        <AnimationWrapper>
          <Services />
        </AnimationWrapper>
        <AnimationWrapper>
          <Portfolio />
        </AnimationWrapper>
        <AnimationWrapper>
          <Contact />
        </AnimationWrapper>
      </main>
      <Footer />
    </div>
  );
}
