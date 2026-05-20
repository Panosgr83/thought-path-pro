import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import aboutPortrait from "@/assets/about-portrait.png";

export function AboutPreview() {
  return (
    <section className="reveal bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-[1fr_1.2fr] md:items-center md:px-8">
        <div className="relative">
          <div className="overflow-hidden rounded-2xl bg-secondary shadow-[0_20px_60px_-20px_rgba(239,106,59,0.2)]">
            <img
              src={aboutPortrait}
              alt="Ευδοκία Τίντζη-Σαββιδάκη"
              className="mx-auto block h-auto w-full object-contain"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden rounded-xl border border-border bg-card p-4 shadow-lg md:block">
            <div className="text-3xl font-serif text-primary">7+</div>
            <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
              χρόνια εμπειρίας
            </div>
          </div>
        </div>

        <div>
          <span className="eyebrow">Ποια είμαστε</span>
          <h2 className="mt-3 font-serif text-3xl leading-[1.1] tracking-[-0.02em] text-ink md:text-[2.5rem]">
            Ευδοκία Τίντζη-Σαββιδάκη
          </h2>
          <p className="mt-2 text-sm font-medium text-muted-foreground">
            Κοινωνική Ψυχολόγος · Παιδοψυχολόγος · Σύμβουλος Συνθετικής Συμβουλευτικής
          </p>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/85">
            <p>
              Με πολυετή εκπαίδευση και εμπειρία στον χώρο της ψυχικής υγείας, προσφέρω
              ολοκληρωμένες υπηρεσίες προσαρμοσμένες στις ανάγκες κάθε ατόμου, ζευγαριού ή
              οικογένειας.
            </p>
            <p>
              Μέλος της Ελληνικής και Ευρωπαϊκής Εταιρείας Συμβουλευτικής. Η προσέγγισή μου είναι
              συνθετική και επικεντρώνεται στον σεβασμό της μοναδικότητας του κάθε ανθρώπου.
            </p>
          </div>
          <Link
            to="/viografiko"
            className="mt-8 inline-flex items-center gap-2 rounded-md border border-primary/30 bg-card px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Διαβάστε το πλήρες βιογραφικό
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
