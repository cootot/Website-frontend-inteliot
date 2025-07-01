"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Events", href: "/events" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
    { name: "Hackathon", href: "/hackathon" },
    { name: "Timeline", href: "/timeline" },
    { name: "Brochure", href: "/brochure.pdf", external: true },
    { name: "Socials", href: "https://linktr.ee/inteliotclub", external: true },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 transition-shadow">
      <div className="container mx-auto flex h-16 lg:h-20 items-center justify-between px-4 lg:px-6">
        <Link
          href="/"
          className="text-2xl lg:text-3xl font-extrabold tracking-tight truncate"
        >
          Intel IoT Club
        </Link>

        {/* Desktop Nav - Hidden on tablet and below for better UX */}
        <nav className="hidden xl:flex items-center gap-8">
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative text-sm font-semibold transition-all duration-200 hover:text-primary ${
                  pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                <span className="group inline-block">
                  {item.name}
                  <span className="block h-[3px] max-w-0 bg-primary transition-all duration-300 group-hover:max-w-full rounded-full"></span>
                </span>
              </a>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm font-semibold transition-all duration-200 hover:text-primary ${
                  pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                <span className="group inline-block">
                  {item.name}
                  <span className="block h-[3px] max-w-0 bg-primary transition-all duration-300 group-hover:max-w-full rounded-full"></span>
                </span>
              </Link>
            ),
          )}
          <ThemeToggle />
          <Link href="/contact">
            <Button
              size="lg"
              className="ml-2 text-base font-semibold px-5 py-2.5"
            >
              Join the Club
            </Button>
          </Link>
        </nav>

        {/* Tablet Nav - Compact horizontal nav for tablets */}
        <nav className="hidden lg:flex xl:hidden items-center gap-4">
          {navItems.slice(0, 6).map((item) =>
            item.external ? (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative text-xs font-medium transition-all duration-200 hover:text-primary ${
                  pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                <span className="group inline-block">
                  {item.name}
                  <span className="block h-[2px] max-w-0 bg-primary transition-all duration-300 group-hover:max-w-full rounded-full"></span>
                </span>
              </a>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-xs font-medium transition-all duration-200 hover:text-primary ${
                  pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                <span className="group inline-block">
                  {item.name}
                  <span className="block h-[2px] max-w-0 bg-primary transition-all duration-300 group-hover:max-w-full rounded-full"></span>
                </span>
              </Link>
            ),
          )}
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-muted transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="More Menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>

        {/* Mobile/Tablet Toggle */}
        <button
          className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground focus:outline-none focus:ring-2 focus:ring-ring hover:bg-muted transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile/Tablet Nav Dropdown */}
      <div
        className={cn(
          "xl:hidden overflow-hidden transition-all duration-500 ease-in-out",
          isOpen
            ? "max-h-screen opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2",
        )}
      >
        <div className="rounded-b-xl border-t bg-background/95 backdrop-blur-md px-4 py-6 shadow-lg animate-fade-in-down">
          {/* For tablets (lg breakpoint), show in a grid layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4">
            {navItems.map((item, i) =>
              item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center rounded-lg px-4 py-3 text-base font-medium text-muted-foreground transition-all hover:bg-muted hover:text-primary touch-manipulation",
                    pathname === item.href && "text-primary bg-muted/50",
                    `delay-[${i * 50}ms]`,
                  )}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center rounded-lg px-4 py-3 text-base font-medium text-muted-foreground transition-all hover:bg-muted hover:text-primary touch-manipulation",
                    pathname === item.href && "text-primary bg-muted/50",
                    `delay-[${i * 50}ms]`,
                  )}
                >
                  {item.name}
                </Link>
              ),
            )}
          </div>

          {/* Action buttons - better spacing for tablets */}
          <div className="mt-6 pt-4 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <ThemeToggle />
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <Button size="lg" className="w-full sm:w-auto touch-manipulation">
                Join the Club
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
