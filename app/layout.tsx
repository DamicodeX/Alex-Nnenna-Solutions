import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";

const playfairDisplayHeading = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default:
      "Alexnnenna Solutions LTD | Strategic Governance & Human Capacity Consultant",
    template: "%s | Alexnnenna Solutions",
  },
  description:
    "Senior Lecturer and Consultant specializing in Peace, Security, and Human Capacity Development. Bridging academic excellence with institutional growth.",
  keywords: [
    "Business Consulting",
    "Peace and Conflict Resolution",
    "Governance Research",
    "Human Capacity Development",
    "Lagos Consultant",
    "Mountain Top University",
  ],
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: "Alexnnenna Solutions Nig. Ltd",
    title:
      "Alexnnenna Solutions LTD | Strategic Governance & Human Capacity Consultant",
    description:
      "Bridging academic excellence with institutional growth through expert consulting in Peace, Security, and Human Capacity Development.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        inter.variable,
        playfairDisplayHeading.variable
      )}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <div className="flex-1">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
