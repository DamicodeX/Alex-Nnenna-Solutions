import React from "react";
import Image from "next/image";
import { navItems } from "@/lib/constant";
import { siteConfig } from "@/lib/data";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import MobileNavigation from "./MobileNavigation";

const Navigation = () => {
  const portalWord = "Portal";
  const hasPortalWord = siteConfig.shortName.includes(portalWord);
  const brandPrefix = hasPortalWord
    ? siteConfig.shortName.replace(portalWord, "").trim()
    : siteConfig.shortName;

  return (
    <nav
      className="sticky top-0 z-50 border-b border-border bg-background/75 backdrop-blur-xl"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="shrink-0 flex items-center gap-2 sm:gap-3">
            <Image
              src="/alexnnena solutions logo.jpg"
              alt="Alexnnenna People Portal logo"
              width={50}
              height={55}
              className="h-10 w-10 rounded-full object-cover sm:h-12 sm:w-12"
              priority
            />
            <span className="text-lg font-(family-name:--font-heading) font-black tracking-tight text-foreground sm:text-xl">
              {brandPrefix}
              {hasPortalWord && (
                <>
                  {" "}
                  <span className="text-primary">{portalWord}</span>
                </>
              )}
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