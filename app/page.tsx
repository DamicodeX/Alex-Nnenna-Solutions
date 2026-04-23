import HeroSection from "@/components/sections/HeroSection";
import CorePillarsSection from "@/components/sections/CorePillarsSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <CorePillarsSection />
      <CTASection />
    </main>
  );
}
