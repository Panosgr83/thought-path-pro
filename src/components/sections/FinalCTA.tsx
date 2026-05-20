import { Link } from "@tanstack/react-router";
import { Phone, Calendar } from "lucide-react";
import { SITE } from "@/lib/site";

export function FinalCTA() {
  return (
    <section className="reveal bg-brand-blue py-24 text-brand-blue-foreground md:py-32">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
        <h2 className="font-serif text-3xl leading-[1.05] tracking-[-0.02em] md:text-5xl">
          Κάντε το πρώτο βήμα για μια καλύτερη ζωή
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-brand-blue-foreground/85">
          Δεν χρειάζεται να αντιμετωπίζετε τις δυσκολίες μόνοι σας. Είμαστε εδώ
          για να σας υποστηρίξουμε — κλείστε σήμερα το πρώτο σας ραντεβού
          γνωριμίας, χωρίς καμία δέσμευση.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
          >
            <Calendar className="h-4 w-4" />
            Κλείστε ραντεβού
          </Link>
          <a
            href={`tel:${SITE.phonesTel[0]}`}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-brand-blue-foreground/30 bg-transparent px-6 py-3.5 text-sm font-semibold text-brand-blue-foreground transition-colors hover:bg-brand-blue-foreground/10"
          >
            <Phone className="h-4 w-4" />
            {SITE.phones[0]}
          </a>
        </div>
      </div>
    </section>
  );
}