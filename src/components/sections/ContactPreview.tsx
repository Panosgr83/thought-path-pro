import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SITE } from "@/lib/site";

export function ContactPreview() {
  const mapsQ = encodeURIComponent(
    `${SITE.address.street}, ${SITE.address.city} ${SITE.address.postal}`
  );
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:px-8">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            Επικοινωνία
          </span>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-ink md:text-4xl">
            Είμαστε εδώ για να σας υποστηρίξουμε
          </h2>
          <ul className="mt-8 space-y-5 text-sm">
            <li className="flex gap-3">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                <MapPin className="h-4 w-4" />
              </span>
              <div>
                <div className="font-semibold text-ink">Διεύθυνση</div>
                <div className="text-muted-foreground">
                  {SITE.address.street}, {SITE.address.city} {SITE.address.postal}
                </div>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Phone className="h-4 w-4" />
              </span>
              <div>
                <div className="font-semibold text-ink">Τηλέφωνα</div>
                {SITE.phones.map((p, i) => (
                  <div key={p}>
                    <a href={`tel:${SITE.phonesTel[i]}`} className="text-muted-foreground hover:text-primary">{p}</a>
                  </div>
                ))}
              </div>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Mail className="h-4 w-4" />
              </span>
              <div>
                <div className="font-semibold text-ink">Email</div>
                {SITE.emails.map((e) => (
                  <div key={e}>
                    <a href={`mailto:${e}`} className="text-muted-foreground hover:text-primary break-all">{e}</a>
                  </div>
                ))}
              </div>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Clock className="h-4 w-4" />
              </span>
              <div>
                <div className="font-semibold text-ink">Ωράριο</div>
                <div className="text-muted-foreground">{SITE.hours}</div>
              </div>
            </li>
          </ul>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border shadow-[0_8px_24px_rgba(14,27,26,0.06)]">
          <iframe
            title="Χάρτης τοποθεσίας"
            src={`https://www.google.com/maps?q=${mapsQ}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full min-h-[360px] w-full"
          />
        </div>
      </div>
    </section>
  );
}