import { useEffect, useState } from "react";
import { Phone, Calendar } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";

export function StickyMobileCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!show}
      className={`fixed inset-x-0 bottom-0 z-40 transition-transform duration-300 md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex gap-2 border-t border-border bg-background/95 p-3 backdrop-blur-md shadow-[0_-4px_16px_rgba(14,27,26,0.06)]">
        <a
          href={`tel:${SITE.phonesTel[0]}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-md bg-warm py-3 text-sm font-semibold text-warm-foreground"
        >
          <Phone className="h-4 w-4" />
          Καλέστε
        </a>
        <Link
          to="/contact"
          className="flex flex-1 items-center justify-center gap-2 rounded-md bg-primary py-3 text-sm font-semibold text-primary-foreground"
        >
          <Calendar className="h-4 w-4" />
          Ραντεβού
        </Link>
      </div>
    </div>
  );
}