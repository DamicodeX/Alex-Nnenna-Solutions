"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { Switch } from "./ui/switch";
import { useTheme } from "./ThemeProvicer";

const ThemeToggle = () => {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="flex items-center space-x-2" aria-hidden="true">
                <Sun className="h-4 w-4 text-muted-foreground" />
                <Switch checked={false} disabled />
                <Moon className="h-4 w-4 text-muted-foreground" />
            </div>
        );
    }

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