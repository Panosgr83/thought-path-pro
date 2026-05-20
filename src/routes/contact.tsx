import { createFileRoute } from "@tanstack/react-router";
import { createServerFn, useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, Loader2 } from "lucide-react";
import { SITE, SERVICES } from "@/lib/site";
import { toast } from "sonner";
import { z } from "zod";

const TITLE = `Επικοινωνία — Ψυχολόγος Γαλάτσι | ${SITE.name}`;
const DESCRIPTION =
  "Κλείστε ραντεβού γνωριμίας με ψυχολόγο στο Γαλάτσι. Τηλέφωνο, email, φόρμα επικοινωνίας και χάρτης για το Κέντρο Ψυχικής Υγείας Διά… Λόγου Νόησις.";

const DEFAULT_NOTIFICATION_EMAILS = SITE.emails.join(",");

const contactInquirySchema = z.object({
  name: z.string().trim().min(1).max(120),
  phone: z.string().trim().min(4).max(40),
  email: z.string().trim().email().max(200),
  topic: z.string().trim().max(80).nullable(),
  preferred_time: z.string().trim().max(80).nullable(),
  message: z.string().trim().max(4000).nullable(),
});

type ContactInquiry = z.infer<typeof contactInquirySchema>;

const submitContactInquiry = createServerFn({ method: "POST" })
  .inputValidator(contactInquirySchema)
  .handler(async ({ data }) => {
    await insertInquiry(data);
    const notification = await sendContactNotification(data);

    return {
      success: true,
      notificationSent: notification.sent,
    };
  });

async function insertInquiry(inquiry: ContactInquiry) {
  const supabaseUrl = readEnv("SUPABASE_URL");
  const supabaseKey = readEnv("SUPABASE_PUBLISHABLE_KEY");

  if (!supabaseUrl || !supabaseKey) {
    throw new Error("Missing Supabase configuration");
  }

  const response = await fetch(`${supabaseUrl}/rest/v1/inquiries`, {
    method: "POST",
    headers: {
      apikey: supabaseKey,
      Authorization: `Bearer ${supabaseKey}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(inquiry),
  });

  if (!response.ok) {
    const details = await response.text().catch(() => "");
    console.error("Inquiry insert failed", {
      status: response.status,
      details,
    });
    throw new Error("Inquiry insert failed");
  }
}

async function sendContactNotification(inquiry: ContactInquiry) {
  const apiKey = readEnv("RESEND_API_KEY");
  const from = readEnv("CONTACT_EMAIL_FROM") || "Dia Logou Noisis <onboarding@resend.dev>";
  const to = parseEmailList(readEnv("CONTACT_EMAIL_TO") || DEFAULT_NOTIFICATION_EMAILS);

  if (!apiKey || to.length === 0) {
    console.warn("Contact email notification skipped: missing email configuration");
    return { sent: false };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "User-Agent": "thought-path-pro/1.0",
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: inquiry.email,
        subject: `Νέο αίτημα επικοινωνίας από ${inquiry.name}`,
        html: buildNotificationHtml(inquiry),
        text: buildNotificationText(inquiry),
      }),
    });

    if (!response.ok) {
      const details = await response.text().catch(() => "");
      console.error("Contact email notification failed", {
        status: response.status,
        details,
      });
      return { sent: false };
    }

    return { sent: true };
  } catch (err) {
    console.error("Contact email notification error", err);
    return { sent: false };
  }
}

function readEnv(name: string) {
  const value = process.env[name];
  return typeof value === "string" ? value.trim() : "";
}

function parseEmailList(value: string) {
  return value
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);
}

function buildNotificationText(inquiry: ContactInquiry) {
  const topicLabel = getTopicLabel(inquiry.topic);

  return [
    "Νέο αίτημα επικοινωνίας",
    "",
    `Όνομα: ${inquiry.name}`,
    `Τηλέφωνο: ${inquiry.phone}`,
    `Email: ${inquiry.email}`,
    `Θέμα: ${topicLabel}`,
    `Προτιμώμενη ώρα: ${inquiry.preferred_time || "-"}`,
    "",
    "Μήνυμα:",
    inquiry.message || "-",
  ].join("\n");
}

function buildNotificationHtml(inquiry: ContactInquiry) {
  const rows = [
    ["Όνομα", inquiry.name],
    ["Τηλέφωνο", inquiry.phone],
    ["Email", inquiry.email],
    ["Θέμα", getTopicLabel(inquiry.topic)],
    ["Προτιμώμενη ώρα", inquiry.preferred_time || "-"],
  ];

  const details = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;color:#4b5563;">${escapeHtml(label)}</td>
          <td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;color:#111827;">${escapeHtml(value)}</td>
        </tr>`,
    )
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;line-height:1.5;color:#111827;">
      <h1 style="font-size:20px;margin:0 0 16px;">Νέο αίτημα επικοινωνίας</h1>
      <table style="border-collapse:collapse;width:100%;max-width:640px;border:1px solid #e5e7eb;">
        <tbody>${details}</tbody>
      </table>
      <h2 style="font-size:16px;margin:24px 0 8px;">Μήνυμα</h2>
      <div style="max-width:640px;padding:12px;border:1px solid #e5e7eb;background:#f9fafb;white-space:pre-wrap;">${escapeHtml(
        inquiry.message || "-",
      )}</div>
    </div>`;
}

function getTopicLabel(topic: string | null) {
  if (!topic) return "-";
  if (topic === "other") return "Άλλο";
  return SERVICES.find((service) => service.slug === topic)?.title ?? topic;
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => {
    switch (char) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "'":
        return "&#39;";
      default:
        return char;
    }
  });
}

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
  const submitInquiry = useServerFn(submitContactInquiry);
  const mapsQ = encodeURIComponent(
    `${SITE.address.street}, ${SITE.address.city} ${SITE.address.postal}`,
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

    try {
      const result = await submitInquiry({ data: payload });
      setSubmitted(true);
      form.reset();
      if (!result.notificationSent && import.meta.env.DEV) {
        toast.warning("Το αίτημα καταχωρήθηκε, αλλά δεν έχει ρυθμιστεί αποστολή email.");
      }
    } catch (error) {
      console.error("Inquiry submit failed", error);
      toast.error("Κάτι πήγε στραβά. Δοκιμάστε ξανά ή καλέστε μας.");
      return;
    } finally {
      setLoading(false);
    }
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
            Η πρώτη συνάντηση είναι συνάντηση γνωριμίας — χωρίς δέσμευση. Απαντούμε εντός 24 ωρών
            εργάσιμων. Όλα τα στοιχεία τηρούνται αυστηρά εμπιστευτικά.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-[1fr_1.2fr] md:px-8">
          <div className="space-y-8">
            <ul className="space-y-5 text-sm">
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <div className="font-semibold text-ink">Διεύθυνση</div>
                  <div className="text-muted-foreground">
                    {SITE.address.street}, {SITE.address.city} {SITE.address.postal}
                  </div>
                  <a
                    href={`https://www.google.com/maps?q=${mapsQ}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-primary hover:underline"
                  >
                    Οδηγίες →
                  </a>
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
                      <a
                        href={`tel:${SITE.phonesTel[i]}`}
                        className="text-muted-foreground hover:text-primary"
                      >
                        {p}
                      </a>
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
                      <a
                        href={`mailto:${e}`}
                        className="text-muted-foreground hover:text-primary break-all"
                      >
                        {e}
                      </a>
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
            <p className="mt-2 text-sm text-muted-foreground">
              Συμπληρώστε τη φόρμα και θα επικοινωνήσουμε μαζί σας.
            </p>

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
                  <select
                    name="topic"
                    className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="">Επιλέξτε θέμα</option>
                    {SERVICES.map((s) => (
                      <option key={s.slug} value={s.slug}>
                        {s.title}
                      </option>
                    ))}
                    <option value="other">Άλλο</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-ink">
                    Προτιμώμενη ώρα επικοινωνίας
                  </label>
                  <select
                    name="time"
                    className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option>Οποτεδήποτε</option>
                    <option>Πρωί (09:00–13:00)</option>
                    <option>Μεσημέρι (13:00–17:00)</option>
                    <option>Απόγευμα (17:00–21:00)</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-ink">Μήνυμα</label>
                  <textarea
                    name="message"
                    rows={4}
                    className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <label className="flex items-start gap-2.5 text-xs text-muted-foreground">
                  <input type="checkbox" required className="mt-0.5 h-4 w-4 rounded border-input" />
                  <span>
                    Αποδέχομαι την επεξεργασία των στοιχείων μου σύμφωνα με την{" "}
                    <a href="/privacy" className="text-primary hover:underline">
                      Πολιτική Απορρήτου
                    </a>
                    .
                  </span>
                </label>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-60"
                >
                  {loading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                  {loading ? "Αποστολή…" : "Ζητήστε ραντεβού"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
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
