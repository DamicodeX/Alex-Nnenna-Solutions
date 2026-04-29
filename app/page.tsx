import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import AffilatedInstitutions from "@/components/sections/AffilatedInstitutions";
import CorePillars from "@/components/sections/CorePillars";
import LeadershipSection from "@/components/sections/LeadershipSection";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Alexannne Solutions LTD"
}
export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <AffilatedInstitutions />
      <CorePillars />
      <LeadershipSection />
    </main>
  );
}
