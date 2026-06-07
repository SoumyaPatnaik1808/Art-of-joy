"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import Link from "next/link";

interface NavbarProps {
  onScrollTo?: (id: string) => void;
}

export default function Navbar({ onScrollTo }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    // Scroll listener for sticky styling
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const navItems = [
    { label: "ABOUT", id: "about", href: "/Landing/about" },
    { label: "COURSES", id: "courses", href: "/Landing/courses" },
    { label: "COMMUNITY", id: "community", href: "/Landing/community" },
    { label: "JOURNAL", id: "journal", href: "/Landing/journal" },
    { label: "CONTACT", id: "contact", href: "/Landing/contact" },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };



  return (
    <header className="fixed top-6 left-0 right-0 z-50 px-4 md:px-8 max-w-7xl mx-auto w-full transition-all duration-300">
      <nav 
        className={`mx-auto rounded-full py-2.5 px-6 flex items-center justify-between transition-all duration-500 max-w-6xl backdrop-blur-md border ${
          isScrolled 
            ? "scale-[0.98] bg-[#F2EBE2]/90 dark:bg-[#101119]/90 border-gold-primary/30 shadow-xl" 
            : "bg-[#F2EBE2]/65 dark:bg-[#101119]/50 border-gold-primary/15 shadow-[0_8px_32px_0_rgba(130,100,40,0.06)]"
        }`}
      >
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 flex items-center justify-center rounded-full border border-gold-primary/40 group-hover:border-gold-primary transition-colors duration-500 overflow-hidden">
            {/* Sacred Geometry SVG Logo */}
            <svg 
              viewBox="0 0 100 100" 
              className="w-7 h-7 text-gold-primary group-hover:rotate-45 transition-transform duration-1000 ease-out"
            >
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <rect x="25" y="25" width="50" height="50" fill="none" stroke="currentColor" strokeWidth="1" />
              <rect x="25" y="25" width="50" height="50" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(45 50 50)" />
              <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="50" cy="50" r="2.5" fill="currentColor" />
            </svg>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[#1e1b42] dark:text-white font-sans text-xs md:text-sm font-light tracking-[0.25em] leading-tight">
              ART OF LIVING
            </span>
            <span className="text-[7px] md:text-[8px] text-gold-dark dark:text-gold-light font-sans font-light tracking-[0.2em] leading-tight">
              AWAKEN TO YOUR TRUE NATURE
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={handleNavClick}
              className="text-[#1e1b42]/80 hover:text-gold-dark dark:text-white/80 dark:hover:text-gold-light text-xs font-sans tracking-[0.2em] transition-colors duration-300 relative py-1 group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold-primary group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-gold-primary/30 text-[#1e1b42] dark:text-white hover:border-gold-primary hover:bg-gold-primary/10 transition-all duration-300 bg-white/20 dark:bg-[#12161A]/80 shadow-[0_0_15px_rgba(212,175,55,0.02)] hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? (
              <Moon size={16} className="text-[#1e1b42] hover:rotate-12 transition-transform duration-300" />
            ) : (
              <Sun size={16} className="text-gold-light hover:rotate-45 transition-transform duration-500" />
            )}
          </button>
          <Link
            href="/Landing/contact"
            onClick={handleNavClick}
            className="px-6 py-2 rounded-full border border-[#1e1b42]/20 dark:border-gold-primary/30 text-[#1e1b42] dark:text-white hover:border-gold-primary hover:bg-gold-primary/10 transition-all duration-300 text-xs font-sans tracking-[0.15em] bg-white/20 dark:bg-[#12161A]/80 shadow-[0_0_15px_rgba(212,175,55,0.02)] hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] animate-pulse"
          >
            BEGIN THE JOURNEY
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gold-primary/30 text-[#1e1b42] dark:text-white hover:border-gold-primary bg-white/20 dark:bg-[#12161A]/80 cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? (
              <Moon size={14} className="text-[#1e1b42]" />
            ) : (
              <Sun size={14} className="text-gold-light" />
            )}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-8 h-8 flex items-center justify-center rounded-full text-[#1e1b42] dark:text-white/90 hover:text-[#1e1b42]/80 dark:hover:text-white"
            aria-label="Open Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-4 right-4 p-6 rounded-3xl bg-[#F2EBE2]/95 dark:bg-[#101119]/95 backdrop-blur-2xl border border-gold-primary/20 shadow-2xl animate-fade-in">
          <div className="flex flex-col gap-6 items-center text-center">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={handleNavClick}
                className="text-[#1e1b42]/80 hover:text-gold-dark dark:text-white/80 dark:hover:text-gold-light text-sm font-sans tracking-[0.2em] py-2 w-full transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
            <div className="h-[1px] w-full bg-gold-primary/10 my-2" />
            <Link
              href="/Landing/contact"
              onClick={handleNavClick}
              className="w-full py-3 rounded-full border border-gold-primary/30 text-[#1e1b42] bg-gold-primary/5 dark:text-white dark:bg-gold-primary/10 text-xs font-sans tracking-[0.15em] hover:bg-gold-primary/25 transition-all duration-300"
            >
              BEGIN THE JOURNEY
            </Link>
          </div>
        </div>
      )}

    </header>
  );
}
