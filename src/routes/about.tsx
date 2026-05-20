import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { SITE } from "@/lib/site";
import { FinalCTA } from "@/components/sections/FinalCTA";
import aboutPortrait from "@/assets/about-portrait.png";

const TITLE = `Βιογραφικό — Ευδοκία Τίντζη-Σαββιδάκη | ${SITE.name}`;
const DESCRIPTION =
  "Κοινωνική Ψυχολόγος, Παιδοψυχολόγος, Σύμβουλος Συνθετικής Συμβουλευτικής. Μέλος Ελληνικής & Ευρωπαϊκής Εταιρείας Συμβουλευτικής.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Ευδοκία Τίντζη-Σαββιδάκη",
          jobTitle: "Κοινωνική Ψυχολόγος · Παιδοψυχολόγος",
          worksFor: { "@type": "Organization", name: SITE.name },
          memberOf: [
            { "@type": "Organization", name: "Ελληνική Εταιρεία Συμβουλευτικής" },
            { "@type": "Organization", name: "Ευρωπαϊκή Εταιρεία Συμβουλευτικής" },
          ],
        }),
      },
    ],
  }),
  component: AboutPage,
});

// TODO(content): full bio, education list, publications — εκκρεμεί από πελάτη.
const CREDENTIALS = [
  "Κοινωνική Ψυχολόγος",
  "Παιδοψυχολόγος",
  "Σύμβουλος Συνθετικής Συμβουλευτικής",
  "Εκπαίδευση σε NLP Coaching",
  "Εξειδίκευση σε ΔΕΠΥ παιδιών και ενηλίκων",
  "Πολυετής εμπειρία σε υπηρεσίες ψυχικής υγείας",
];

const MEMBERSHIPS = [
  "Ελληνική Εταιρεία Συμβουλευτικής (Ε.Ε.Σ.)",
  "Ευρωπαϊκή Εταιρεία Συμβουλευτικής (E.A.C.)",
];

function AboutPage() {
  return (
    <>
      <section className="bg-secondary/40 py-16 md:py-24">
        <div className="mx-auto grid max-w-5xl gap-12 px-4 md:grid-cols-[1fr_1.4fr] md:items-center md:px-8">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_20px_60px_-20px_rgba(239,106,59,0.25)]">
            <img
              src={aboutPortrait}
              alt="Ευδοκία Τίντζη-Σαββιδάκη — πορτραίτο"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              Ποια είμαστε
            </span>
            <h1 className="mt-3 font-serif text-4xl leading-tight text-ink md:text-5xl">
              Ευδοκία Τίντζη-Σαββιδάκη
            </h1>
            <p className="mt-3 text-sm font-medium text-muted-foreground">
              Κοινωνική Ψυχολόγος · Παιδοψυχολόγος · Σύμβουλος Συνθετικής Συμβουλευτικής
            </p>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/85">
              <p>
                Με πολυετή εκπαίδευση και εμπειρία στον χώρο της ψυχικής υγείας,
                προσφέρω ολοκληρωμένες υπηρεσίες προσαρμοσμένες στις ανάγκες
                κάθε ατόμου, ζευγαριού ή οικογένειας.
              </p>
              <p>
                Η προσέγγισή μου είναι συνθετική: συνδυάζει στοιχεία από
                διαφορετικές θεραπευτικές σχολές, με στόχο να βρω αυτό που
                πραγματικά λειτουργεί για κάθε άνθρωπο που έρχεται απέναντί μου.
                Πιστεύω ότι κάθε διαδρομή είναι μοναδική και αξίζει χρόνο,
                σεβασμό και επιστημονική σοβαρότητα.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto grid max-w-5xl gap-12 px-4 md:grid-cols-2 md:px-8">
          <div>
            <h2 className="font-serif text-2xl text-ink md:text-3xl">Εκπαίδευση & Εξειδίκευση</h2>
            <ul className="mt-6 space-y-3">
              {CREDENTIALS.map((c) => (
                <li key={c} className="flex gap-3 text-base text-foreground/85">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Check className="h-3 w-3" />
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-ink md:text-3xl">Επαγγελματική ιδιότητα</h2>
            <ul className="mt-6 space-y-3">
              {MEMBERSHIPS.map((m) => (
                <li key={m} className="flex gap-3 text-base text-foreground/85">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Check className="h-3 w-3" />
                  </span>
                  {m}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
              {/* TODO(content): επιβεβαίωση αριθμών μητρώου & ημερομηνιών εγγραφής πριν production. */}
              Για επιπλέον πληροφορίες σχετικά με την επαγγελματική μου πορεία,
              επισκεφθείτε το{" "}
              <a
                href={`https://${SITE.externalSite}`}
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:underline"
              >
                {SITE.externalSite}
              </a>
              .
            </p>
            <Link
              to="/services"
              className="mt-8 inline-flex rounded-md border border-primary/30 px-5 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Δείτε τις υπηρεσίες
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}