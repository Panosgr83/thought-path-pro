import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ } from "@/lib/site";

export function FAQSection() {
  return (
    <section className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-[1fr_1.5fr] md:px-8">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            Συχνές ερωτήσεις
          </span>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-ink md:text-4xl">
            Αυτά που μας ρωτούν πιο συχνά
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Δεν βρίσκετε αυτό που ψάχνετε; Καλέστε μας ή στείλτε μήνυμα — θα
            σας απαντήσουμε εντός 24 ωρών εργάσιμων.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {FAQ.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left font-serif text-base text-ink hover:no-underline md:text-lg">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground md:text-base">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}