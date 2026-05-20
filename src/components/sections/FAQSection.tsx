import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ } from "@/lib/site";

export function FAQSection() {
  return (
    <section className="reveal bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-[1fr_1.5fr] md:px-8">
        <div>
          <span className="eyebrow">Συχνές ερωτήσεις</span>
          <h2 className="mt-3 font-serif text-3xl leading-[1.1] tracking-[-0.02em] text-ink md:text-[2.5rem]">
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
              <AccordionTrigger className="text-left font-serif text-[1.0625rem] leading-snug tracking-[-0.01em] text-ink hover:no-underline md:text-lg">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-[15px] leading-relaxed text-muted-foreground md:text-base">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}