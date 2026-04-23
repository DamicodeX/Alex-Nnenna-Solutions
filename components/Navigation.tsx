import React from "react";
import Image from "next/image";
import { navItems } from "@/lib/constant";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import MobileNavigation from "./MobileNavigation";

const Navigation = () => {
  return (
    <nav
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="shrink-0 flex items-center gap-2 sm:gap-3">
            <Image
              src="/alexnnena solutions logo.jpg"
              alt="Alexnnena Solutions Logo"
              width={50}
              height={55}
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover"
              priority
            />
            <span className="text-lg sm:text-xl font-(family-name:--font-heading) font-bold text-foreground">
              Alexnnenna Solutions
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                className="text-xs font-semibold tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
                key={item.href}
                href={item.href}
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <MobileNavigation />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;