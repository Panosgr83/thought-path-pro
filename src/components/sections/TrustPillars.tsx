import { Shield, Heart, GraduationCap } from "lucide-react";

const PILLARS = [
  {
    icon: Shield,
    title: "Εμπιστευτικότητα",
    body: "Απόλυτο απόρρητο σε κάθε συνεδρία. Η σχέση μας βασίζεται στην εμπιστοσύνη.",
  },
  {
    icon: Heart,
    title: "Εξατομικευμένη Φροντίδα",
    body: "Κάθε άτομο είναι μοναδικό. Προσαρμόζουμε την προσέγγισή μας στις δικές σας ανάγκες.",
  },
  {
    icon: GraduationCap,
    title: "Εξειδικευμένοι Επαγγελματίες",
    body: "Πλούσια εκπαίδευση και πολυετής εμπειρία σε όλο το φάσμα της ψυχικής υγείας.",
  },
];

export function TrustPillars() {
  return (
    <section className="border-y border-border/60 bg-card">
      <div className="mx-auto grid max-w-6xl gap-px overflow-hidden bg-border md:grid-cols-3">
        {PILLARS.map((p) => (
          <div key={p.title} className="bg-card p-8 md:p-10">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <p.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 font-serif text-xl text-ink">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}