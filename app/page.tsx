import type { Metadata } from "next";
import PortalAnnouncementsSection from "@/components/sections/PortalAnnouncementsSection";
import PortalHighlightsSection from "@/components/sections/PortalHighlightsSection";
// import PortalInsightsSection from "@/components/sections/PortalInsightsSection";
import PortalQuickLinksGrid from "@/components/sections/PortalQuickLinksGrid";
// import PortalSpotlightSection from "@/components/sections/PortalSpotlightSection";
import PortalWelcomeBanner from "@/components/sections/PortalWelcomeBanner";

export const metadata: Metadata = {
  title: "Home",
  description:
    "People portal home with quick links, updates, spotlight content, and workforce insights.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <PortalWelcomeBanner />
      <PortalQuickLinksGrid />
      {/* <PortalSpotlightSection />
      <PortalInsightsSection /> */}
      <PortalAnnouncementsSection />
      <PortalHighlightsSection />
    </main>
  );
}
