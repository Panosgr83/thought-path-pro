import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone, Star, ShieldCheck, Clock } from "lucide-react";
import { SITE } from "@/lib/site";
import heroPortrait from "@/assets/hero-portrait.png";

export function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Full-bleed background portrait */}
      <img
        src={heroPortrait}
        alt="Ευδοκία Τίντζη-Σαββιδάκη — Κοινωνική Ψυχολόγος, Παιδοψυχολόγος"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_top]"
        loading="eager"
      />
      {/* Dark overlay for readability */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-black/45"
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24 md:px-20">
        <div className="fade-up flex max-w-[700px] flex-col text-white">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {SITE.tagline}
          </span>

          <h1 className="mt-7 font-serif text-[3rem] leading-[1.02] tracking-[-0.025em] text-white sm:text-[3.75rem] md:text-[4.5rem]">
            Κατανόηση.
            <br />
            Αποδοχή.
            <br />
            <span className="text-primary">Αλλαγή.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
            Επαγγελματική ψυχολογική στήριξη σε έναν ζεστό, φιλόξενο χώρο —
            για να αντιμετωπίσετε τις δυσκολίες, να γνωρίσετε καλύτερα τον
            εαυτό σας και να προχωρήσετε μπροστά.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
            >
              Κλείστε γνωριμία
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              Δείτε τις υπηρεσίες
            </Link>
            <a
              href={`tel:${SITE.phonesTel[0]}`}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20 sm:hidden"
            >
              <Phone className="h-4 w-4" />
              Καλέστε τώρα
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/20 pt-6 text-sm text-white/80">
            <div className="flex items-center gap-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-warm text-warm" />
              ))}
              <span className="ml-1 font-medium text-white">5.0</span>
              <span>(120+ κριτικές)</span>
            </div>
            <span className="hidden h-1 w-1 rounded-full bg-white/40 sm:inline-block" />
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-white/80" />
              7+ χρόνια εμπειρίας
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-white/40 sm:inline-block" />
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-white/80" />
              Μέλος Ε.Ε.Σ.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
