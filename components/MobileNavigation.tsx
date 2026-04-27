"use client";

import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import ThemeToggle from "./ThemeToggle";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { navItems } from "@/lib/constant";
import Link from "next/link";
import { useState } from "react";

const MobileNavigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex shrink-0 items-center md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" aria-label="Open menu">
                        <Menu />
                    </Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetTitle className="px-8 pt-2 text-left text-xs uppercase tracking-widest text-muted-foreground">
                        Portal Menu
                    </SheetTitle>
                    <div className="px-8 pt-6">
                        <ThemeToggle />
                    </div>
                    <div className="mt-8 flex flex-col space-y-4 p-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-lg font-medium text-foreground transition-colors duration-200 hover:text-primary"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default MobileNavigation;