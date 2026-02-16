import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const faqs = [
  {
    q: "What are unclaimed benefits?",
    a: "Unclaimed benefits are funds owed to individuals from pension funds, provident funds, insurance policies, the Guardian Fund, or workplace injury compensation that have not been collected. In South Africa, over R90 billion in such funds remains unclaimed.",
  },
  {
    q: "How do I know if I have unclaimed money?",
    a: "If you previously worked for an employer and left without claiming your pension or provident fund, or if a family member passed away and benefits were never collected, there may be unclaimed funds in your name. Contact us and we'll investigate on your behalf.",
  },
  {
    q: "What documents do I need to start a claim?",
    a: "Typically you'll need a certified copy of your ID, proof of previous employment (payslip, appointment letter, or reference letter), and any documentation related to the fund or policy. We'll guide you on the specific requirements for your claim type.",
  },
  {
    q: "How long does the claims process take?",
    a: "Timelines vary depending on the type of claim and the institution involved. Pension fund claims can take 3–6 months, while some insurance claims may be resolved sooner. We keep you informed at every stage of the process.",
  },
  {
    q: "What does it cost to use your services?",
    a: "There is no upfront cost. We charge a 15% service fee on the recovered amount, plus a 2.5% cost-to-client fee for administrative expenses. You only pay when your claim is successful.",
  },
  {
    q: "Can you help with GEPF (Government Employees Pension Fund) claims?",
    a: "Yes. Our founder Steve Ngobenza has over 22 years of experience in pension fund administration, including extensive work with GEPF. We specialise in recovering unclaimed GEPF benefits.",
  },
  {
    q: "What is the Guardian Fund?",
    a: "The Guardian Fund is managed by the Master of High Court and holds funds on behalf of minors and other beneficiaries. If you or a family member may have funds held in the Guardian Fund, we can assist with the claims process.",
  },
  {
    q: "Do I need to visit your offices?",
    a: "Not necessarily. You can start your claim through our online inquiry form or by phone. We'll work with you remotely where possible, though some claims may require in-person document verification.",
  },
  {
    q: "Is my personal information safe?",
    a: "Absolutely. We treat all client information with strict confidentiality and comply with the Protection of Personal Information Act (POPIA). Your data is only used for the purpose of processing your claim.",
  },
  {
    q: "What types of claims can you help with?",
    a: "We assist with Pension & Provident Fund claims, Guardian Fund claims, Insurance claims, Injury on Duty (IOD) compensation, medical aid savings, and other unclaimed financial benefits.",
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="bg-primary py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Frequently Asked Questions</h1>
          <p className="text-primary-foreground/80 font-sans text-lg max-w-2xl">
            Find answers to common questions about unclaimed benefits and our claims process.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-sans font-semibold text-foreground hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-sans leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Still Have Questions?</h2>
          <p className="text-primary-foreground/80 font-sans mb-8">Our team is ready to help. Get in touch today.</p>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-sans">
            <Link to="/contact">Contact Us <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
