
import React, { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const navItems = [
    { label: "Accueil", href: "/", isExternal: false },
    { label: "Services", href: "/#services", isExternal: false },
    { label: "À propos", href: "/#about", isExternal: false },
    { label: "Blog", href: "/blog", isExternal: false },
    { label: "Devis", href: "/#quote", isExternal: false },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 lg:px-10",
        scrolled
          ? "py-3 backdrop-blur-lg bg-background/80 shadow-md"
          : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-tighter flex items-center"
        >
          <span className="text-gogogo-yellow dark:text-gogogo-yellow">Go</span>
          <span className="text-gogogo-purple dark:text-gogogo-purple">Go</span>
          <span className="text-gogogo-yellow dark:text-gogogo-yellow mr-1">Go</span>
          <span className="text-foreground">Studio</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-foreground hover:text-gogogo-purple dark:hover:text-gogogo-yellow transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gogogo-purple dark:after:bg-gogogo-yellow after:origin-bottom-right after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 hover:after:origin-bottom-left"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/#quote"
            className="bg-gogogo-purple dark:bg-gogogo-yellow text-black font-bold px-6 py-2.5 rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            Demander un devis
          </Link>
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden gap-4">
          <ThemeToggle className="mr-2" />
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-foreground focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "absolute top-full left-0 right-0 glass-card md:hidden transition-all ease-in-out duration-300 overflow-hidden",
          mobileMenuOpen
            ? "max-h-screen opacity-100 py-4"
            : "max-h-0 opacity-0 py-0"
        )}
      >
        <div className="px-6 flex flex-col space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-foreground py-2 border-b border-border hover:text-gogogo-purple dark:hover:text-gogogo-yellow transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/#quote"
            className="bg-gogogo-purple dark:bg-gogogo-yellow text-black font-medium py-3 mt-2 rounded-full text-center hover:shadow-lg transition-all"
            onClick={() => setMobileMenuOpen(false)}
          >
            Demander un devis
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
