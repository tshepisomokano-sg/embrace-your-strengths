import Layout from "@/components/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    q: "How can I get more information on services SG Benefits Consulting is offering?",
    a: "You can contact us in whatever way convenient and we shall gladly make an appointment with you for further discussions.",
  },
  {
    q: "What if I am committed with work or other things?",
    a: "We can make an arrangement to meet you halfway or come next to your town or city, residence or work preferably at the nearest shopping mall/complex or public transport station.",
  },
  {
    q: "How much do I have to pay for your services?",
    a: "We do not charge any cent to our clients before the work is done and complete. Our services differ and so are the prices. No upfront fees - we only charge upon successful recovery.",
  },
  {
    q: "Do I need to pay anything upfront?",
    a: "No. Our services are entirely contingency-based. You only pay when we successfully recover your benefits.",
  },
  {
    q: "Can I borrow money from SG Benefits Consulting to buy food, electricity and other basic needs whilst waiting for my benefits?",
    a: "We are not authorised to lend money to customers or any person, but we can make arrangements with authorised institutions with reasonable interest rates, to borrow you money to survive in the meantime.",
  },
  {
    q: "Can you advise on the investment option available after I receive my benefits?",
    a: "We are not licensed to provide financial advice or sell any financial products. Our core function is strictly benefits recovery facilitation management. However, we can refer you to authorised institutions.",
  },
  {
    q: "What is the difference between a Pension Fund, Provident Fund and Retirement Annuity?",
    a: "Pension Fund: A defined benefits arrangement where the employee and employer contribute to the fund. The employer takes the risk in case the fund is underfunded. Example: Government Employees Pension Fund (GEPF).\n\nProvident Fund: A defined contribution arrangement where the employer and employee contribute. All benefits are paid as a once-off lump sum, no monthly pension is payable. Common in the private sector.\n\nRetirement Annuity: An arrangement where an employee or person contributes alone to an insurance company that has a retirement annuity plan. Benefits are paid in strict accordance with the fund rules, providing a monthly pension from age 55.",
  },
  {
    q: "How and when can one withdraw money from these funds?",
    a: "Pension, Provident and Retirement Annuity Funds are not bank accounts, so you cannot withdraw money at any time. However, a member can withdraw benefits upon termination of services or from age 55 on retirement. You can also transfer Pension benefits to a Pension preservation fund or Provident fund to a Provident preservation fund.",
  },
  {
    q: "Who qualifies for benefits in case of a deceased member in service?",
    a: "Beneficiaries vary by fund rules, but typically include: the contributing member who exited service, surviving spouse, biological/adopted/step children (if dependent on the deceased), and nominated beneficiaries. The board of trustees distributes benefits according to the last wish of the deceased and circumstances.",
  },
  {
    q: "How much is my pension/provident fund balance worth?",
    a: "You can check your balance from the finance or HR department of your employer. If you know your account number, you can check it online at the fund website. Most retirement funds send benefits statements to contributing members.",
  },
  {
    q: "How can I claim my benefits if I left my former employer long time ago?",
    a: "If you're no longer employed, visit your former employer and submit a written request for withdrawal. If they can't help, visit your nearest fund administrator with proof of employment and contributions. If unsuccessful, contact us - we'll ensure you get what you deserve.",
  },
  {
    q: "How do I submit claim forms and required documents?",
    a: "Our employees will ensure that correct claim forms are completed and assist to prepare affidavits, bank statements, certified copies and any other documents. We'll collect them from your home doorstep, workplace or meet at a safe place convenient for you.",
  },
  {
    q: "My mother/father in law is fighting me over my late husband/wife's estate and pension benefits. How do I resolve this?",
    a: "Inform them to contact the nearest magistrate estate office or the deceased member's former employer for clarity on who qualifies. Remember that your in-laws might also qualify as beneficiaries. If unsuccessful, contact us to assist in resolving the dispute through our mediation services.",
  },
  {
    q: "Do children born outside marriage qualify for benefits?",
    a: "YES they do. It matters not the circumstances of their nature of birth. Children born before or outside marriage (Customary, Religious or Civil) qualify even if not nominated.",
  },
  {
    q: "Can all benefits including my children's portion be paid to my bank account only?",
    a: "Yes, it's possible, BUT the board of trustees takes the final decision based on their discretionary powers invested in them by the fund rules. They decide how and where benefits should be paid.",
  },
  {
    q: "Can you help with Government Employees Pension Fund (GEPF) claims?",
    a: "Yes, we have extensive experience with GEPF claims. Important note: GEPF is the only fund in South Africa that does not fall under the Financial Services Board and is not governed by the Pension Fund Act, 1956. Therefore complaints about GEPF pension matters cannot be referred to the Pension Fund Adjudicator.",
  },
  {
    q: "What if the original member has passed away?",
    a: "Beneficiaries and next of kin can still claim. We assist families in recovering benefits on behalf of deceased members, including guardian fund claims for minor children.",
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
      <div className="container mx-auto max-w-4xl">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="rounded-lg border bg-card px-6 shadow-sm">
              <AccordionTrigger className="text-left text-base font-semibold hover:no-underline py-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4 whitespace-pre-line">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

    <section className="bg-muted px-4 py-16 text-center">
      <div className="container mx-auto max-w-2xl">
        <h2 className="mb-4 text-2xl font-semibold">Still Have Questions?</h2>
        <p className="mb-6 text-muted-foreground">
          We're here to help. Reach out and we'll get back to you promptly.
        </p>
        <Link to="/contact">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Contact Us
          </Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default FAQ;