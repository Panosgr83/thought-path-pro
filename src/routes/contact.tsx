import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, Loader2 } from "lucide-react";
import { SITE, SERVICES } from "@/lib/site";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const TITLE = `Επικοινωνία — Ψυχολόγος Γαλάτσι | ${SITE.name}`;
const DESCRIPTION =
  "Κλείστε ραντεβού γνωριμίας με ψυχολόγο στο Γαλάτσι. Τηλέφωνο, email, φόρμα επικοινωνίας και χάρτης για το Κέντρο Ψυχικής Υγείας Διά… Λόγου Νόησις.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: `${SITE.url}/contact` },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/contact` }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const mapsQ = encodeURIComponent(
    `${SITE.address.street}, ${SITE.address.city} ${SITE.address.postal}`
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      topic: String(fd.get("topic") ?? "").trim() || null,
      preferred_time: String(fd.get("time") ?? "").trim() || null,
      message: String(fd.get("message") ?? "").trim() || null,
    };
    const { error } = await supabase.from("inquiries").insert(payload);
    setLoading(false);
    if (error) {
      console.error("Inquiry insert failed", error);
      toast.error("Κάτι πήγε στραβά. Δοκιμάστε ξανά ή καλέστε μας.");
      return;
    }
    setSubmitted(true);
    form.reset();
  }


  return (
    <>
      <section className="bg-secondary/40 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            Επικοινωνία
          </span>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-ink md:text-5xl">
            Κλείστε γνωριμία
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Η πρώτη συνάντηση είναι συνάντηση γνωριμίας — χωρίς δέσμευση.
            Απαντούμε εντός 24 ωρών εργάσιμων. Όλα τα στοιχεία τηρούνται
            αυστηρά εμπιστευτικά.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-[1fr_1.2fr] md:px-8">
          <div className="space-y-8">
            <ul className="space-y-5 text-sm">
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary"><MapPin className="h-4 w-4" /></span>
                <div>
                  <div className="font-semibold text-ink">Διεύθυνση</div>
                  <div className="text-muted-foreground">{SITE.address.street}, {SITE.address.city} {SITE.address.postal}</div>
                  <a href={`https://www.google.com/maps?q=${mapsQ}`} target="_blank" rel="noreferrer" className="text-xs text-primary hover:underline">Οδηγίες →</a>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary"><Phone className="h-4 w-4" /></span>
                <div>
                  <div className="font-semibold text-ink">Τηλέφωνα</div>
                  {SITE.phones.map((p, i) => (
                    <div key={p}><a href={`tel:${SITE.phonesTel[i]}`} className="text-muted-foreground hover:text-primary">{p}</a></div>
                  ))}
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary"><Mail className="h-4 w-4" /></span>
                <div>
                  <div className="font-semibold text-ink">Email</div>
                  {SITE.emails.map((e) => (
                    <div key={e}><a href={`mailto:${e}`} className="text-muted-foreground hover:text-primary break-all">{e}</a></div>
                  ))}
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary"><Clock className="h-4 w-4" /></span>
                <div>
                  <div className="font-semibold text-ink">Ωράριο</div>
                  <div className="text-muted-foreground">{SITE.hours}</div>
                </div>
              </li>
            </ul>

            <div className="overflow-hidden rounded-2xl border border-border shadow-[0_8px_24px_rgba(14,27,26,0.06)]">
              <iframe
                title="Χάρτης τοποθεσίας"
                src={`https://www.google.com/maps?q=${mapsQ}&output=embed`}
                loading="lazy"
                className="h-[280px] w-full"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
            <h2 className="font-serif text-2xl text-ink">Ζητήστε ραντεβού</h2>
            <p className="mt-2 text-sm text-muted-foreground">Συμπληρώστε τη φόρμα και θα επικοινωνήσουμε μαζί σας.</p>

            {submitted ? (
              <div className="mt-6 rounded-md bg-primary/10 p-4 text-sm text-primary">
                Ευχαριστούμε! Θα επικοινωνήσουμε μαζί σας εντός 24 ωρών εργάσιμων.
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-6 grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Όνομα *" name="name" required />
                  <Field label="Τηλέφωνο *" name="phone" type="tel" required />
                </div>
                <Field label="Email *" name="email" type="email" required />
                <div>
                  <label className="text-sm font-medium text-ink">Θέμα ενδιαφέροντος</label>
                  <select name="topic" className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
                    <option value="">Επιλέξτε θέμα</option>
                    {SERVICES.map((s) => <option key={s.slug} value={s.slug}>{s.title}</option>)}
                    <option value="other">Άλλο</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-ink">Προτιμώμενη ώρα επικοινωνίας</label>
                  <select name="time" className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
                    <option>Οποτεδήποτε</option>
                    <option>Πρωί (09:00–13:00)</option>
                    <option>Μεσημέρι (13:00–17:00)</option>
                    <option>Απόγευμα (17:00–21:00)</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-ink">Μήνυμα</label>
                  <textarea name="message" rows={4} className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
                </div>
                <label className="flex items-start gap-2.5 text-xs text-muted-foreground">
                  <input type="checkbox" required className="mt-0.5 h-4 w-4 rounded border-input" />
                  <span>Αποδέχομαι την επεξεργασία των στοιχείων μου σύμφωνα με την <a href="/privacy" className="text-primary hover:underline">Πολιτική Απορρήτου</a>.</span>
                </label>
                <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                  <Send className="h-4 w-4" />
                  Ζητήστε ραντεβού
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-medium text-ink">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
      />
    </div>
  );
}