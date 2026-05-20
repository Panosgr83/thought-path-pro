import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: `Πολιτική Απορρήτου — ${SITE.name}` },
      { name: "description", content: "Πολιτική απορρήτου και προστασίας προσωπικών δεδομένων." },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: PrivacyPage,
});

// TODO(legal): template GDPR copy — χρειάζεται νομικός έλεγχος πριν production.
function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 md:px-8 md:py-24">
      <h1 className="font-serif text-4xl text-ink">Πολιτική Απορρήτου</h1>
      <p className="mt-2 text-sm text-muted-foreground">Τελευταία ενημέρωση: {new Date().toLocaleDateString("el-GR")}</p>

      <div className="prose prose-sm mt-10 max-w-none space-y-6 text-base leading-relaxed text-foreground/85">
        <p className="rounded-md border border-warm/30 bg-warm/5 p-4 text-sm text-foreground">
          <strong>Σημείωση:</strong> Το παρόν αποτελεί πρότυπο και χρειάζεται έλεγχο από νομικό σύμβουλο πριν δημοσιευθεί σε παραγωγική έκδοση.
        </p>

        <h2 className="font-serif text-2xl text-ink">1. Ποιοι είμαστε</h2>
        <p>Το {SITE.name} είναι Κέντρο Ψυχικής Υγείας με έδρα τη διεύθυνση {SITE.address.street}, {SITE.address.city} {SITE.address.postal}.</p>

        <h2 className="font-serif text-2xl text-ink">2. Ποια δεδομένα συλλέγουμε</h2>
        <p>Μέσω της φόρμας επικοινωνίας: όνομα, τηλέφωνο, email, θέμα ενδιαφέροντος, μήνυμα. Δεν συλλέγουμε ευαίσθητα δεδομένα υγείας μέσω του ιστοτόπου.</p>

        <h2 className="font-serif text-2xl text-ink">3. Σκοπός επεξεργασίας</h2>
        <p>Αποκλειστικά για την επικοινωνία μαζί σας και τον προγραμματισμό ραντεβού. Δεν διαβιβάζουμε τα στοιχεία σας σε τρίτους.</p>

        <h2 className="font-serif text-2xl text-ink">4. Χρόνος διατήρησης</h2>
        <p>Τα στοιχεία της φόρμας διατηρούνται για 24 μήνες, εκτός αν προκύψει θεραπευτική σχέση.</p>

        <h2 className="font-serif text-2xl text-ink">5. Τα δικαιώματά σας</h2>
        <p>Έχετε δικαίωμα πρόσβασης, διόρθωσης, διαγραφής και φορητότητας των δεδομένων σας. Επικοινωνήστε στο {SITE.emails[0]}.</p>

        <h2 className="font-serif text-2xl text-ink">6. Cookies & Analytics</h2>
        <p>Χρησιμοποιούμε cookie-less analytics (Plausible) χωρίς προσωπικά αναγνωριστικά.</p>
      </div>
    </article>
  );
}