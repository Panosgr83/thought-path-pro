import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const NAV = [
  { to: "/", label: "Αρχική" },
  { to: "/services", label: "Υπηρεσίες" },
  { to: "/about", label: "Βιογραφικό" },
  { to: "/contact", label: "Επικοινωνία" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/85 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:h-20 md:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt={`${SITE.name} — λογότυπο`}
            className="h-11 w-11 shrink-0 md:h-12 md:w-12"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-base font-medium tracking-tight text-ink md:text-lg">
              {SITE.name}
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground md:text-[11px]">
              {SITE.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
          >
            Κλείστε ραντεβού
          </Link>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href={`tel:${SITE.phonesTel[0]}`}
            aria-label="Καλέστε μας"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground"
          >
            <Phone className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Άνοιγμα μενού"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-foreground"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}