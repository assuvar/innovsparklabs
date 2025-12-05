import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Comparison from "@/components/Comparison";
import Offerings from "@/components/Offerings";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="bg-brand-dark text-brand-light font-sans antialiased overflow-x-hidden">
      <Hero />
      <Marquee />
      <Comparison />
      <Offerings />
      <CTA />
    </main>
  );
}
