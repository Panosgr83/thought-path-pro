import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-primary/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/"
            className="flex items-center gap-3 md:gap-4 flex-1 lg:flex-none group"
          >
            <div className="relative shrink-0 w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
              <img
                src={logo}
                alt="Διά... Λόγου Νόησις Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex flex-col items-center justify-center text-center gap-1 leading-tight max-w-[13.5rem]">
              <span className="font-serif text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-brand-blue tracking-tight transition-opacity duration-200 group-hover:opacity-90">
                Διά... Λόγου Νόησις
              </span>
              <span className="text-[9px] sm:text-[10px] md:text-[11px] text-brand-coral uppercase tracking-[0.12em] font-normal w-full transition-opacity duration-200 group-hover:opacity-90">
                ΚΕΝΤΡΟ ΨΥΧΙΚΗΣ ΥΓΕΙΑΣ
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center justify-center gap-1 xl:gap-2">
            <Link
              to="/"
              className="px-4 py-2 text-[15px] font-medium text-muted-foreground hover:text-ink transition-colors rounded-md hover:bg-accent/50 [&.active]:text-ink [&.active]:bg-accent"
            >
              Αρχική
            </Link>
            <Link
              to="/ypiresies"
              className="px-4 py-2 text-[15px] font-medium text-muted-foreground hover:text-ink transition-colors rounded-md hover:bg-accent/50 [&.active]:text-ink [&.active]:bg-accent"
            >
              Υπηρεσίες
            </Link>
            <Link
              to="/viografiko"
              className="px-4 py-2 text-[15px] font-medium text-muted-foreground hover:text-ink transition-colors rounded-md hover:bg-accent/50 [&.active]:text-ink [&.active]:bg-accent"
            >
              Βιογραφικό
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 text-[15px] font-medium text-muted-foreground hover:text-ink transition-colors rounded-md hover:bg-accent/50 [&.active]:text-ink [&.active]:bg-accent"
            >
              Επικοινωνία
            </Link>
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center justify-center rounded-lg bg-primary px-4 md:px-5 py-2 md:py-2.5 text-sm md:text-[15px] font-semibold text-primary-foreground hover:bg-primary/90 transition-all shadow-sm hover:shadow-md"
            >
              Κλείστε ραντεβού
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-muted-foreground hover:text-ink hover:bg-accent/50 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-border/40">
            <div className="flex flex-col gap-1">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-base font-medium text-muted-foreground hover:text-ink hover:bg-accent/50 rounded-md transition-colors [&.active]:text-ink [&.active]:bg-accent"
              >
                Αρχική
              </Link>
              <Link
                to="/ypiresies"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-base font-medium text-muted-foreground hover:text-ink hover:bg-accent/50 rounded-md transition-colors [&.active]:text-ink [&.active]:bg-accent"
              >
                Υπηρεσίες
              </Link>
              <Link
                to="/viografiko"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-base font-medium text-muted-foreground hover:text-ink hover:bg-accent/50 rounded-md transition-colors [&.active]:text-ink [&.active]:bg-accent"
              >
                Βιογραφικό
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-base font-medium text-muted-foreground hover:text-ink hover:bg-accent/50 rounded-md transition-colors [&.active]:text-ink [&.active]:bg-accent"
              >
                Επικοινωνία
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-lg bg-primary px-4 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-all shadow-sm"
              >
                Κλείστε ραντεβού
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
