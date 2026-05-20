import { Link } from "@tanstack/react-router";
import { Phone, Calendar } from "lucide-react";
import { SITE } from "@/lib/site";

export function FinalCTA() {
  return (
    <section className="bg-primary py-20 text-primary-foreground md:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
        <h2 className="font-serif text-3xl leading-tight md:text-5xl">
          Έτοιμοι να κάνετε το πρώτο βήμα;
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/85">
          Επικοινωνήστε μαζί μας για να κλείσετε τη συνάντηση γνωριμίας. Δεν
          υπάρχει καμία δέσμευση — απλώς ένας χώρος για να ξεκινήσουμε.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-background px-6 py-3.5 text-sm font-semibold text-primary shadow-sm transition-all hover:bg-background/90"
          >
            <Calendar className="h-4 w-4" />
            Κλείστε γνωριμία
          </Link>
          <a
            href={`tel:${SITE.phonesTel[0]}`}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-primary-foreground/30 bg-transparent px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            <Phone className="h-4 w-4" />
            {SITE.phones[0]}
          </a>
        </div>
      </div>
    </section>
  );
}