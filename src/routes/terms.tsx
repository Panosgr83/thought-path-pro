import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: `Όροι Χρήσης — ${SITE.name}` },
      { name: "description", content: "Όροι χρήσης του ιστοτόπου." },
    ],
  }),
  component: TermsPage,
});

// TODO(legal): template — χρειάζεται νομικός έλεγχος.
function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 md:px-8 md:py-24">
      <h1 className="font-serif text-4xl text-ink">Όροι Χρήσης</h1>
      <p className="mt-2 text-sm text-muted-foreground">Τελευταία ενημέρωση: {new Date().toLocaleDateString("el-GR")}</p>
      <div className="mt-10 space-y-6 text-base leading-relaxed text-foreground/85">
        <p className="rounded-md border border-warm/30 bg-warm/5 p-4 text-sm">
          <strong>Σημείωση:</strong> Πρότυπο. Χρειάζεται νομικός έλεγχος πριν production.
        </p>
        <h2 className="font-serif text-2xl text-ink">Ενημερωτικός χαρακτήρας</h2>
        <p>Οι πληροφορίες του ιστοτόπου έχουν ενημερωτικό χαρακτήρα και δεν αντικαθιστούν την επαγγελματική κλινική εκτίμηση ή την ιατρική πράξη.</p>
        <h2 className="font-serif text-2xl text-ink">Επείγοντα περιστατικά</h2>
        <p>Σε περίπτωση επείγοντος ψυχιατρικού περιστατικού καλέστε άμεσα <strong>166</strong>, τη Γραμμή SOS <strong>1018</strong>, ή μεταβείτε στο πλησιέστερο εφημερεύον νοσοκομείο.</p>
        <h2 className="font-serif text-2xl text-ink">Πνευματικά δικαιώματα</h2>
        <p>Όλο το περιεχόμενο του ιστοτόπου αποτελεί πνευματική ιδιοκτησία του {SITE.name}.</p>
      </div>
    </article>
  );
}