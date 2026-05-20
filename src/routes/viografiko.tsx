import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, GraduationCap, Briefcase, BookOpen, Check } from "lucide-react";
import { SITE } from "@/lib/site";
import portrait from "@/assets/hero-portrait.png";

const TITLE = `Βιογραφικό — Ευδοκία Τίντζη-Σαββιδάκη | Ψυχολόγος Γαλάτσι`;
const DESCRIPTION =
  "Βιογραφικό της Ευδοκίας Τίντζη-Σαββιδάκη — Κοινωνική Ψυχολόγος & Παιδοψυχολόγος στο Γαλάτσι. Εκπαίδευση, πιστοποιήσεις και επαγγελματική εμπειρία.";

export const Route = createFileRoute("/viografiko")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: `${SITE.url}/viografiko` },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/viografiko` }],
  }),
  component: ViografikoPage,
});

const CERTIFICATIONS = [
  "Πτυχίο Κοινωνικής Ψυχολογίας",
  "Δίπλωμα Συνθετικής Συμβουλευτικής",
  "Πιστοποίηση Συμβούλου Επαγγελματικής Καθοδήγησης",
  "Εξειδίκευση Παιδοψυχολογίας",
  "Μέλος ΕΕΣ (HAC 001491)",
  "Μέλος EAC (0202)",
];

const EDUCATION = [
  {
    period: "1993–2005",
    title: "Συστημικές Προσεγγίσεις",
    desc: "Εκπαίδευση σε συστημικές θεραπευτικές μεθόδους.",
  },
  {
    period: "2007–2010",
    title: "Ανθρωποκεντρική & Υπαρξιακή Συμβουλευτική",
    desc: "Person-centered και υπαρξιακές προσεγγίσεις.",
  },
  {
    period: "2013–2017",
    title: "Γνωσιακές Προσεγγίσεις",
    desc: "Γνωσιακή-Συμπεριφορική Θεραπεία (CBT) και σχετικές μέθοδοι.",
  },
];

const EXPERIENCE = [
  {
    period: "2013 – σήμερα",
    title: "Ίδρυση Διαδικτυακής Πύλης για την Ψηφιακή Βία",
    desc: "Δημιουργία και διεύθυνση πλατφόρμας ενημέρωσης και ευαισθητοποίησης για την ψηφιακή βία σε παιδιά και εφήβους.",
  },
  {
    period: "2009 – σήμερα",
    title: "Συνεργασία με Εκπαιδευτικά Κέντρα ΑΜΕΑ",
    desc: "Ψυχολογική υποστήριξη παιδιών με αυτισμό και άλλες αναπτυξιακές διαταραχές.",
  },
  {
    period: "Πολυετής εμπειρία",
    title: "Προγράμματα Διαχείρισης Άγχους",
    desc: "Σχεδιασμός και υλοποίηση προγραμμάτων ψυχικής υγείας σε δημοτικές υπηρεσίες.",
  },
  {
    period: "Πολυετής εμπειρία",
    title: "Πρωτοβουλίες Ψυχικής Υγείας",
    desc: "Ηγεσία δράσεων ψυχικής υγείας μέσω κοινοτικών οργανώσεων.",
  },
];

const SEMINARS = [
  "Γνωσιακή-Συμπεριφορική Θεραπεία (CBT)",
  "Τραύμα και Μετατραυματικό Στρες",
  "Συναισθηματική Ρύθμιση",
  "Συμβουλευτική Πένθους και Απώλειας",
  "Γονεϊκή Καθοδήγηση",
  "Παιγνιοθεραπεία με Παιδιά και Εφήβους",
];

function SectionHeader({
  icon: Icon,
  eyebrow,
  title,
}: {
  icon: typeof Award;
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
          {eyebrow}
        </p>
        <h2 className="font-serif text-2xl text-ink md:text-3xl">{title}</h2>
      </div>
    </div>
  );
}

function ViografikoPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              Βιογραφικό
            </span>
            <h1 className="mt-4 font-serif text-4xl leading-tight text-ink md:text-6xl">
              Ευδοκία Τίντζη-Σαββιδάκη
            </h1>
            <p className="mt-4 text-base font-medium text-muted-foreground md:text-lg">
              Κοινωνική Ψυχολόγος · Παιδοψυχολόγος
            </p>
          </div>
        </div>
      </section>


      {/* Full-width photo band */}
      <section className="bg-background">
        <div className="relative h-56 w-full overflow-hidden sm:h-72 md:h-96 lg:h-[28rem]">
          <img
            src={portrait}
            alt="Ευδοκία Τίντζη-Σαββιδάκη"
            className="h-full w-full object-cover object-[center_20%]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
        </div>
      </section>

      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <SectionHeader icon={Award} eyebrow="Τίτλοι" title="Πιστοποιήσεις" />
          <ul className="grid gap-3 sm:grid-cols-2">
            {CERTIFICATIONS.map((c) => (
              <li
                key={c}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-base text-foreground/85"
              >
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Check className="h-3 w-3" />
                </span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-secondary/40 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <SectionHeader icon={GraduationCap} eyebrow="Σπουδές" title="Εκπαίδευση" />
          <ol className="space-y-5">
            {EDUCATION.map((e) => (
              <li
                key={e.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                  {e.period}
                </p>
                <h3 className="mt-2 font-serif text-xl text-ink">{e.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {e.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <SectionHeader
            icon={Briefcase}
            eyebrow="Πορεία"
            title="Επαγγελματική Εμπειρία"
          />
          <ol className="space-y-5">
            {EXPERIENCE.map((x) => (
              <li
                key={x.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                  {x.period}
                </p>
                <h3 className="mt-2 font-serif text-xl text-ink">{x.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {x.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-secondary/40 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <SectionHeader
            icon={BookOpen}
            eyebrow="Συνεχιζόμενη εκπαίδευση"
            title="Εξειδικευμένα Σεμινάρια"
          />
          <ul className="flex flex-wrap gap-2">
            {SEMINARS.map((s) => (
              <li
                key={s}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground/85"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
          <h2 className="font-serif text-3xl text-ink md:text-4xl">Ας γνωριστούμε</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Η πρώτη συνάντηση είναι μια συνάντηση γνωριμίας — χωρίς δέσμευση.
            Επικοινωνήστε μαζί μας για να ξεκινήσουμε.
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
    </>
  );
}
