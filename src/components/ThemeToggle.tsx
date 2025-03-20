
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
        "relative p-2 rounded-full transition-all duration-500 ease-out",
        theme === "dark" ? "bg-gogogo-purple/20" : "bg-gogogo-yellow/20",
        className
      )}
      aria-label="Toggle theme"
    >
      <div className="relative w-12 h-6 rounded-full overflow-hidden transition-colors duration-300">
        <div className={`absolute inset-0 transition-opacity duration-500 ${theme === 'dark' ? 'opacity-0' : 'opacity-100'}`}>
          <Sun className="absolute left-1 top-0.5 text-gogogo-yellow w-5 h-5" />
        </div>
        <div className={`absolute inset-0 transition-opacity duration-500 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}>
          <Moon className="absolute right-1 top-0.5 text-gogogo-purple w-5 h-5" />
        </div>
        <div
          className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-md transform transition-transform duration-500 ${
            theme === "dark" ? "translate-x-7" : "translate-x-1"
          }`}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
