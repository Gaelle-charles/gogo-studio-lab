
import React from "react";
import { useTheme } from "@/hooks/useTheme";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative p-2 rounded-full transition-all duration-300",
        theme === "dark" ? "bg-gogogo-purple/20" : "bg-gogogo-yellow/20",
        className
      )}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Moon className="text-gogogo-purple w-5 h-5" />
      ) : (
        <Sun className="text-gogogo-yellow w-5 h-5" />
      )}
    </button>
  );
};

export default ThemeToggle;
