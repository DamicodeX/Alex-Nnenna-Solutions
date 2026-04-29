import type { Metadata } from "next";
import { Fraunces, Manrope, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvicer";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const frauncesHeading = Fraunces({
  subsets: ["latin"],
  variable: "--font-heading",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Alexnnena Solutions",
  description: "Bridging academic excellence with institutional growth through expert consulting in Peace, Security, and Human Capacity Development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", manrope.variable, frauncesHeading.variable, "font-sans", inter.variable)}
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
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
