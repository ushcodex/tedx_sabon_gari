import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is TEDxSabonGari?",
    answer:
      "TEDxSabonGari is an independently organized TED event in Sabon Gari, Zaria. We bring together local voices and ideas worth spreading to inspire, educate, and foster community dialogue. Our 2026 theme is 'Bridging the Gap' - connecting ideas, people, and communities.",
  },
  {
    question: "When and where will TEDxSabonGari 2026 take place?",
    answer:
      "TEDxSabonGari 2026 will take place on February 14, 2026, in Sabon Gari, Zaria, Nigeria. The exact venue details will be communicated to ticket holders closer to the event date.",
  },
  {
    question: "How can I get tickets?",
    answer:
      "Tickets can be purchased directly on our website. We offer Regular, Premium, and VIP tiers to suit different preferences. We recommend booking early as tickets are limited and past events have sold out.",
  },
  {
    question: "Who are the speakers?",
    answer:
      "Our speakers include distinguished professionals, academics, and change-makers from various fields including Prof. Abdulhamid Abdullahi, Salim Yunusa, Dr. Ahmad Bello, Hon. Zubairu Mukhtar, and more. Check our Speakers section for the full lineup as we announce more.",
  },
  {
    question: "How can I get involved or sponsor?",
    answer:
      "We welcome sponsors, partners, and volunteers! As a sponsor, your brand gains visibility to thousands of engaged attendees. To get involved, please contact us through our website or social media channels. Volunteer applications are also open.",
  },
  {
    question: "What should I expect at the event?",
    answer:
      "Expect an inspiring day of thought-provoking talks, networking opportunities, interactive sessions, and meaningful connections. You'll hear diverse perspectives on bridging gaps in our communities, innovative ideas, and stories of transformation.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Let&apos;s <span className="text-primary">answer</span> some of your
            <br />
            burning questions.
          </h2>
          <p className="text-muted-foreground">Everything you need to know about TEDxSabonGari 2026</p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-6">
                <span className="flex items-center gap-4">
                  <span className="text-primary font-bold">{index + 1}.</span>
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 pl-8">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
