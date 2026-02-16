import Layout from "@/components/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    q: "How do I know if I have unclaimed benefits?",
    a: "If you or a family member ever contributed to a pension or provident fund, had life insurance, funeral cover, or was injured at work, there may be unclaimed money waiting. Contact us and we'll investigate free of charge.",
  },
  {
    q: "What documents do I need to start a claim?",
    a: "You'll typically need a certified copy of your ID, proof of employment or membership, and a bank statement. We'll guide you through the exact requirements based on your specific claim type.",
  },
  {
    q: "How long does the process take?",
    a: "Timelines vary depending on the type of claim and the fund involved. Simple claims can be resolved in a few weeks, while more complex cases may take several months. We keep you updated every step of the way.",
  },
  {
    q: "What are your fees?",
    a: "We charge a 15% service fee plus a 2.5% cost recovery fee — only on successfully recovered amounts. If we don't recover anything, you pay nothing.",
  },
  {
    q: "Do I need to pay anything upfront?",
    a: "No. Our services are entirely contingency-based. You only pay when we successfully recover your benefits.",
  },
  {
    q: "Can you help with government pension fund (GEPF) claims?",
    a: "Yes, we have extensive experience with GEPF claims and work closely with the Government Employees Pension Fund to recover unclaimed benefits.",
  },
  {
    q: "What if the original member has passed away?",
    a: "Beneficiaries and next of kin can still claim. We assist families in recovering benefits on behalf of deceased members, including guardian fund claims for minor children.",
  },
  {
    q: "Is my personal information safe with you?",
    a: "Absolutely. We handle all personal information in strict compliance with the Protection of Personal Information Act (POPIA) and maintain the highest standards of confidentiality.",
  },
];

const FAQ = () => (
  <Layout>
    <section className="bg-primary px-4 py-16 text-primary-foreground md:py-24">
      <div className="container mx-auto max-w-3xl text-center">
        <h1 className="mb-4 text-4xl md:text-5xl">Frequently Asked Questions</h1>
        <p className="text-lg text-primary-foreground/80">
          Everything you need to know about unclaimed benefits and our recovery process.
        </p>
      </div>
    </section>

    <section className="px-4 py-16 md:py-24">
      <div className="container mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="rounded-lg border bg-card px-4">
              <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

    <section className="bg-muted px-4 py-16 text-center">
      <h2 className="mb-4 text-2xl">Still Have Questions?</h2>
      <p className="mb-6 text-muted-foreground">We're here to help. Reach out and we'll get back to you promptly.</p>
      <Link to="/contact">
        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
          Contact Us
        </Button>
      </Link>
    </section>
  </Layout>
);

export default FAQ;
