import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap, Mail, Phone, ArrowRight, Check } from "lucide-react";
import { SITE } from "@/lib/site";

const TITLE = `Σεμινάρια — Εκπαιδευτικά Προγράμματα | ${SITE.name}`;
const DESCRIPTION =
  "Εκπαιδευτικά σεμινάρια για προσωπική και επαγγελματική ανάπτυξη στο Γαλάτσι. Επικοινωνήστε μαζί μας για περισσότερες πληροφορίες.";

export const Route = createFileRoute("/seminaria")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: `${SITE.url}/seminaria` },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/seminaria` }],
  }),
  component: SeminariaPage,
});

const TOPICS = [
  "Διαχείριση άγχους και συναισθημάτων",
  "Επικοινωνία και διαπροσωπικές σχέσεις",
  "Γονεϊκότητα και υποστήριξη παιδιών",
  "Επαγγελματική ανάπτυξη και ηγεσία",
  "Ενσυνειδητότητα (mindfulness) στην καθημερινότητα",
  "Πρόληψη επαγγελματικής εξουθένωσης (burnout)",
];

function SeminariaPage() {
  return (
    <>
      {/* Hero με μωβ gradient */}
      <section
        className="relative w-full overflow-hidden py-20 text-white md:py-28"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #6B46C1 0%, #805AD5 50%, #9F7AEA 100%)",
        }}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.4), transparent 50%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.25), transparent 50%)",
          }}
        />
        <div className="relative mx-auto max-w-5xl px-4 text-center md:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] backdrop-blur">
            <GraduationCap className="h-3.5 w-3.5" />
            Εκπαίδευση
          </span>
          <h1 className="mt-6 font-serif text-4xl leading-tight tracking-tight md:text-6xl">
            Σεμινάρια
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/90 md:text-lg">
            Εκπαιδευτικά προγράμματα για προσωπική και επαγγελματική ανάπτυξη
          </p>
        </div>
      </section>

      {/* Δύο στήλες */}
      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1.5fr_1fr] md:px-8">
          {/* Αριστερά: κύριο περιεχόμενο */}
          <div>
            <h2 className="font-serif text-3xl tracking-tight text-ink md:text-4xl">
              Εκπαιδευτικά Σεμινάρια
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              Το κέντρο μας προσφέρει ένα ευρύ φάσμα εκπαιδευτικών σεμιναρίων
              που στοχεύουν στην προσωπική και επαγγελματική ανάπτυξη. Τα
              σεμινάρια απευθύνονται σε ιδιώτες, επαγγελματίες ψυχικής υγείας,
              εκπαιδευτικούς, γονείς και ομάδες εργαζομένων.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Όλα τα προγράμματα σχεδιάζονται με επιστημονική τεκμηρίωση,
              βιωματικές ασκήσεις και πρακτικά εργαλεία που μπορείτε να
              εφαρμόσετε άμεσα στη ζωή και την εργασία σας.
            </p>

            <div className="mt-8 rounded-2xl border border-border bg-card p-6 md:p-8">
              <h3 className="font-serif text-xl text-ink">Θεματικές</h3>
              <ul className="mt-4 space-y-3">
                {TOPICS.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-foreground md:text-base">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Δεξιά: πληροφορίες / CTA */}
          <aside className="md:sticky md:top-24 md:self-start">
            <div className="rounded-2xl border border-border bg-secondary/40 p-6 md:p-8">
              <h3 className="font-serif text-2xl text-ink">
                Πληροφορίες Σεμιναρίων
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Επικοινωνήστε μαζί μας για περισσότερες πληροφορίες σχετικά με
                τα διαθέσιμα σεμινάρια, ημερομηνίες, κόστος και τρόπους
                συμμετοχής.
              </p>

              <div className="mt-6 space-y-3">
                <a
                  href={`tel:${SITE.phonesTel[0]}`}
                  className="flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors hover:border-primary/40"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  {SITE.phones[0]}
                </a>
                <a
                  href={`mailto:${SITE.emails[0]}`}
                  className="flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors hover:border-primary/40"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  {SITE.emails[0]}
                </a>
              </div>

              <Link
                to="/contact"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
              >
                Φόρμα επικοινωνίας
                <ArrowRight className="h-4 w-4" />
              </Link>

              <p className="mt-4 text-xs text-muted-foreground">
                {SITE.hours}
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
