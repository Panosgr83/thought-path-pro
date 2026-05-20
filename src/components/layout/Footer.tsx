import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Globe } from "lucide-react";
import { SITE, SERVICES } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-20">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="font-serif text-lg text-ink">{SITE.name}</div>
            <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              {SITE.tagline}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Ασφαλές, υποστηρικτικό περιβάλλον για ψυχολογική φροντίδα κάθε
              ηλικίας στο Γαλάτσι.
            </p>
          </div>

          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-ink">
              Πλοήγηση
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-foreground/80">
              <li><Link to="/" className="hover:text-primary">Αρχική</Link></li>
              <li><Link to="/services" className="hover:text-primary">Υπηρεσίες</Link></li>
              <li><Link to="/about" className="hover:text-primary">Βιογραφικό</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Επικοινωνία</Link></li>
              <li><Link to="/privacy" className="hover:text-primary">Πολιτική Απορρήτου</Link></li>
              <li><Link to="/terms" className="hover:text-primary">Όροι χρήσης</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-ink">
              Υπηρεσίες
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-foreground/80">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="hover:text-primary"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="text-primary hover:underline">
                  Όλες οι υπηρεσίες →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-ink">
              Επικοινωνία
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-foreground/80">
              <li className="flex gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{SITE.address.street}, {SITE.address.city} {SITE.address.postal}</span>
              </li>
              {SITE.phones.map((p, i) => (
                <li key={p} className="flex gap-2">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <a href={`tel:${SITE.phonesTel[i]}`} className="hover:text-primary">{p}</a>
                </li>
              ))}
              {SITE.emails.map((e) => (
                <li key={e} className="flex gap-2">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <a href={`mailto:${e}`} className="hover:text-primary break-all">{e}</a>
                </li>
              ))}
              <li className="flex gap-2">
                <Globe className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href={`https://${SITE.externalSite}`} target="_blank" rel="noreferrer" className="hover:text-primary">
                  {SITE.externalSite}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 space-y-3 border-t border-border pt-8 text-xs leading-relaxed text-muted-foreground">
          <p>
            <strong className="text-foreground/80">Σημαντικό:</strong> Οι πληροφορίες
            του ιστοτόπου έχουν ενημερωτικό χαρακτήρα και δεν αντικαθιστούν την
            επαγγελματική κλινική εκτίμηση. Σε περίπτωση επείγοντος καλέστε{" "}
            <strong className="text-foreground/90">166</strong> ή τη Γραμμή SOS{" "}
            <strong className="text-foreground/90">1018</strong>, ή πηγαίνετε στο
            πλησιέστερο εφημερεύον νοσοκομείο.
          </p>
          <p>© {new Date().getFullYear()} {SITE.name}. Με επιφύλαξη παντός δικαιώματος.</p>
        </div>
      </div>
    </footer>
  );
}