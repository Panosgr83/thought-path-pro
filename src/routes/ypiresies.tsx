import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";
import { FinalCTA } from "@/components/sections/FinalCTA";

const TITLE = `Υπηρεσίες Ψυχολόγου στο Γαλάτσι — ${SITE.name}`;
const DESCRIPTION =
  "12 υπηρεσίες ψυχικής υγείας στο Γαλάτσι: συμβουλευτική, ψυχοθεραπεία, ζευγάρι, παιδική & εφηβική ψυχολογία, ΔΕΠΥ, coaching, γονεϊκή καθοδήγηση και άλλα.";

export const Route = createFileRoute("/ypiresies")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: `${SITE.url}/ypiresies` },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/ypiresies` }],
  }),
  component: YpiresiesPage,
});

type Tone =
  | "teal"
  | "rose"
  | "amber"
  | "sky"
  | "green"
  | "slate"
  | "emerald"
  | "orange"
  | "red"
  | "cyan"
  | "yellow";

const TONE_BG: Record<Tone, string> = {
  teal: "bg-teal-100 text-teal-700",
  rose: "bg-rose-100 text-rose-700",
  amber: "bg-amber-100 text-amber-700",
  sky: "bg-sky-100 text-sky-700",
  green: "bg-green-100 text-green-700",
  slate: "bg-slate-200 text-slate-700",
  emerald: "bg-emerald-100 text-emerald-700",
  orange: "bg-orange-100 text-orange-700",
  red: "bg-red-100 text-red-700",
  cyan: "bg-cyan-100 text-cyan-700",
  yellow: "bg-yellow-100 text-yellow-800",
};

const SERVICES: {
  emoji: string;
  title: string;
  subtitle: string;
  short: string;
  tone: Tone;
}[] = [
  { emoji: "🧠", title: "Συμβουλευτική & Ψυχοθεραπεία", subtitle: "Ατομική υποστήριξη", short: "Ατομική υποστήριξη για προσωπική ανάπτυξη.", tone: "teal" },
  { emoji: "💑", title: "Συμβουλευτική Ζεύγους", subtitle: "Σχέσεις", short: "Για σχέσεις που αξίζει να επενδύσετε.", tone: "rose" },
  { emoji: "🎯", title: "Life Coaching", subtitle: "Προσωπικοί στόχοι", short: "Χαράξτε το μονοπάτι για τη ζωή που θέλετε.", tone: "amber" },
  { emoji: "🔄", title: "NLP Coaching", subtitle: "Νευρογλωσσικός προγραμματισμός", short: "Αναπρογραμματίστε τον τρόπο σκέψης σας.", tone: "sky" },
  { emoji: "👨‍👩‍👧", title: "Γονεϊκή Καθοδήγηση", subtitle: "Για γονείς", short: "Υποστήριξη για μια πιο αποτελεσματική γονεϊκότητα.", tone: "green" },
  { emoji: "💼", title: "Επαγγελματική Συμβουλευτική", subtitle: "Καριέρα & προσανατολισμός", short: "Βρείτε την επαγγελματική πορεία που σας ταιριάζει.", tone: "slate" },
  { emoji: "🌱", title: "Παιδική & Εφηβική Ψυχολογία", subtitle: "Παιδιά & έφηβοι", short: "Υποστήριξη για κάθε στάδιο ανάπτυξης.", tone: "emerald" },
  { emoji: "⚡", title: "Δ.Ε.Π.Υ.", subtitle: "Παιδιά & ενήλικες", short: "Διαταραχή Ελλειμματικής Προσοχής / Υπερκινητικότητα.", tone: "orange" },
  { emoji: "🛡️", title: "Μορφές Βίας", subtitle: "Πρόληψη & υποστήριξη", short: "Ψηφιακή βία, bullying και οικογενειακή βία.", tone: "red" },
  { emoji: "🤝", title: "Ομαδική Θεραπεία", subtitle: "Θεραπευτικές ομάδες", short: "Η δύναμη της ομάδας στη θεραπευτική διαδικασία.", tone: "cyan" },
  { emoji: "🌿", title: "Σεξουαλικότητα", subtitle: "Σεξουαλική υγεία", short: "Ολιστική υποστήριξη για ζητήματα σεξουαλικής υγείας.", tone: "teal" },
  { emoji: "🌅", title: "Ηλικιωμένοι & Άνοια", subtitle: "Τρίτη ηλικία", short: "Υποστήριξη για τρίτη ηλικία και φροντιστές.", tone: "yellow" },
];

function YpiresiesPage() {
  return (
    <>
      <section className="bg-secondary/40 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            Υπηρεσίες
          </span>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-ink md:text-6xl">
            Ολοκληρωμένη ψυχολογική φροντίδα
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            12 εξειδικευμένες υπηρεσίες για παιδιά, εφήβους, ενήλικες, ζευγάρια
            και οικογένειες — προσαρμοσμένες στις δικές σας ανάγκες.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <article
                key={s.title}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-xl text-2xl ${TONE_BG[s.tone]}`}
                  aria-hidden
                >
                  {s.emoji}
                </div>
                <div className="flex-1">
                  <h2 className="font-serif text-xl leading-snug text-ink">{s.title}</h2>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                    {s.subtitle}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {s.short}
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  Μάθετε περισσότερα <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
          <h2 className="font-serif text-3xl text-ink md:text-4xl">
            Δεν ξέρετε από πού να ξεκινήσετε;
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Επικοινωνήστε μαζί μας και θα σας βοηθήσουμε να βρείτε την υπηρεσία
            που ταιριάζει στις δικές σας ανάγκες.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90"
          >
            Επικοινωνήστε Μαζί Μας
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
