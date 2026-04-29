import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import AffilatedInstitutions from "@/components/sections/AffilatedInstitutions";
import CorePillars from "@/components/sections/CorePillars";


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
    </main>
  );
}
