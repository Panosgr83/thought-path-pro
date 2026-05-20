import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { TrustPillars } from "@/components/sections/TrustPillars";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ContactPreview } from "@/components/sections/ContactPreview";
import { SITE, FAQ, SERVICES } from "@/lib/site";
import { useReveal } from "@/hooks/use-reveal";

const TITLE = `Ψυχολόγος Γαλάτσι — ${SITE.name} | Κέντρο Ψυχικής Υγείας`;
const DESCRIPTION =
  "Ψυχολόγος στο Γαλάτσι. Συμβουλευτική, ψυχοθεραπεία, ζευγάρι, παιδική & εφηβική ψυχολογία, ΔΕΠΥ, επαγγελματικός προσανατολισμός. Ραντεβού γνωριμίας στο Διά… Λόγου Νόησις.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: SITE.url },
    ],
    links: [{ rel: "canonical", href: SITE.url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["LocalBusiness", "ProfessionalService"],
          name: SITE.name,
          description: DESCRIPTION,
          url: SITE.url,
          telephone: SITE.phonesTel,
          email: SITE.emails[0],
          address: {
            "@type": "PostalAddress",
            streetAddress: SITE.address.street,
            addressLocality: SITE.address.city,
            postalCode: SITE.address.postal,
            addressCountry: SITE.address.country,
          },
          knowsAbout: SERVICES.map((s) => s.title),
          serviceType: ["Counseling", "Psychotherapy", "Life Coaching"],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "6",
            bestRating: "5",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "09:00",
              closes: "21:00",
            },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <>
      <Hero />
      <TrustPillars />
      <ServicesPreview />
      <AboutPreview />
      <Testimonials />
      <FAQSection />
      <FinalCTA />
      <ContactPreview />
    </>
  );
}
