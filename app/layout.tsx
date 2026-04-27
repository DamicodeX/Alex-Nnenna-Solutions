import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";

const frauncesHeading = Fraunces({
  subsets: ["latin"],
  variable: "--font-heading",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "HR Portal | HR Self-Service Hub",
    template: "%s | Alexnnenna HR Portal",
  },
  description:
    "A modern workplace hub for onboarding, policy access, employee directory search, forms, and company events.",
  keywords: [
    "HR Portal",
    "Onboarding",
    "Employee Directory",
    "Policies and Benefits",
    "People Operations",
    "Internal Forms",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "HR Portal",
    title: "HR Portal | HR Self-Service Hub",
    description:
      "One place for onboarding, forms, policy documents, workforce updates, and employee support.",
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
        manrope.variable,
        frauncesHeading.variable
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
