import React from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import { siteConfig, contactContent } from "@/lib/data";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="dark border-t border-border bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-(family-name:--font-heading) text-lg font-bold">
              {siteConfig.name}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              {siteConfig.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <p className="text-xs tracking-widest uppercase font-semibold text-muted-foreground">
              Navigation
            </p>
            <nav
              className="flex flex-col space-y-2"
              aria-label="Footer navigation"
            >
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 w-fit"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <p className="text-xs tracking-widest uppercase font-semibold text-muted-foreground">
              Get in Touch
            </p>
            <div className="space-y-3">
              <a
                href={`mailto:${contactContent.email}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="size-4" />
                {contactContent.email}
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="size-4" />
                {contactContent.location}
              </div>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <LinkedinIcon className="size-4" />
                LinkedIn
                <ArrowUpRight className="size-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <Separator />
        <div className="py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Strategic Governance & Human Capacity Consulting
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
