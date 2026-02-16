import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Banknote, Scale, Heart, Briefcase, HelpCircle, ArrowRight, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const services = [
  {
    icon: Banknote,
    title: "Pension & Provident Fund Claims",
    desc: "We help former employees recover unclaimed pension and provident fund benefits from both the Government Employees Pension Fund (GEPF) and private sector funds. Whether you changed jobs, were retrenched, or simply didn't know you had funds owing, we'll trace and recover them for you.",
    points: ["GEPF pension recovery", "Private sector provident funds", "Retirement fund withdrawals", "Unclaimed employer contributions"],
  },
  {
    icon: Scale,
    title: "Guardian Fund Claims",
    desc: "The Guardian Fund, managed by the Master of High Court, holds funds on behalf of minors and other beneficiaries. We assist in tracing and claiming these funds, ensuring that beneficiaries receive what is rightfully theirs.",
    points: ["Minor beneficiary claims", "Master of High Court processes", "Inheritance fund recovery", "Beneficiary verification"],
  },
  {
    icon: Heart,
    title: "Insurance Claims",
    desc: "Long-term insurance policies and related benefits often go unclaimed. We work with insurance companies to trace and recover insurance payouts, matured policies, and other related benefits.",
    points: ["Unclaimed life insurance payouts", "Matured policy recoveries", "Group insurance benefits", "Long-term insurance claims"],
  },
  {
    icon: Briefcase,
    title: "Injury on Duty (IOD)",
    desc: "If you were injured at work, you may be entitled to compensation. We assist with Compensation Fund claims for workplace injuries, ensuring you receive the benefits due to you under the Compensation for Occupational Injuries and Diseases Act.",
    points: ["Workplace injury claims", "COIDA compensation", "Medical expense recovery", "Disability benefit claims"],
  },
  {
    icon: HelpCircle,
    title: "Other Claims",
    desc: "Beyond the major categories, we also assist with recovering medical aid savings, other unclaimed financial benefits, and related entitlements that may have been left behind.",
    points: ["Medical aid savings", "Unclaimed financial benefits", "Forgotten savings accounts", "Other entitlements"],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="bg-primary py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Our Services</h1>
          <p className="text-primary-foreground/80 font-sans text-lg max-w-2xl">
            We specialise in tracing and recovering unclaimed benefits across multiple categories — at no upfront cost to you.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-12 max-w-5xl mx-auto">
            {services.map((svc, i) => (
              <Card key={svc.title} className="overflow-hidden border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"}`}>
                    <div className="md:w-1/3 bg-primary/5 flex items-center justify-center p-8">
                      <div className="w-20 h-20 rounded-2xl bg-secondary/15 flex items-center justify-center">
                        <svc.icon className="h-10 w-10 text-secondary" />
                      </div>
                    </div>
                    <div className="md:w-2/3 p-6 md:p-8">
                      <h3 className="text-2xl font-bold text-foreground mb-3">{svc.title}</h3>
                      <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-4">{svc.desc}</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {svc.points.map((p) => (
                          <li key={p} className="flex items-center gap-2 text-sm font-sans text-foreground">
                            <CheckCircle className="h-4 w-4 text-secondary shrink-0" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Transparent Fee Structure</h2>
          <p className="text-muted-foreground font-sans mb-8">No upfront costs. We only get paid when you get paid.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <p className="text-4xl font-bold text-secondary mb-2">15%</p>
                <p className="text-foreground font-sans font-medium">Service Fee</p>
                <p className="text-muted-foreground font-sans text-sm mt-1">Of the recovered amount</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <p className="text-4xl font-bold text-secondary mb-2">2.5%</p>
                <p className="text-foreground font-sans font-medium">Cost-to-Client Fee</p>
                <p className="text-muted-foreground font-sans text-sm mt-1">Administrative costs</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Ready to Start Your Claim?</h2>
          <p className="text-primary-foreground/80 font-sans mb-8">Contact us today and let us help you recover your unclaimed benefits.</p>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-sans">
            <Link to="/contact">Start Your Claim <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
