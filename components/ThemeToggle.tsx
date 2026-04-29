"use client";

import { Moon, Sun } from "lucide-react";
import { Switch } from "./ui/switch";
import { useTheme } from "./ThemeProvicer";

const ThemeToggle = () => {
    const { resolvedTheme, setTheme } = useTheme();

  return (
        <div className="flex items-center space-x-2">
            <Sun
                className={`h-4 w-4 transition-colors ${
                    resolvedTheme === "light" ? "text-yellow-500" : "text-muted-foreground"
                }`}
            />
            <Switch
                checked={resolvedTheme === "dark"}
                onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
            />
            <Moon
                className={`h-4 w-4 transition-colors ${
                    resolvedTheme === "dark" ? "text-yellow-500" : "text-muted-foreground"
                }`}
            />
    </div>
    );
};

export default ThemeToggle;