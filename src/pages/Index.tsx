import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Search, Banknote, Shield, Heart, Scale, Briefcase, Award, Users } from "lucide-react";
import Layout from "@/components/Layout";

const claimTypes = [
  {
    icon: Briefcase,
    title: "Pension & Provident Funds",
    desc: "Recover unclaimed benefits from GEPF and private pension/provident funds.",
  },
  {
    icon: Shield,
    title: "Guardian Fund",
    desc: "Claims through the Master of the High Court for minor beneficiaries.",
  },
  {
    icon: Heart,
    title: "Insurance Claims",
    desc: "Life insurance, funeral cover, and group scheme benefit recovery.",
  },
  {
    icon: Scale,
    title: "Injury on Duty",
    desc: "Compensation for workplace injuries and occupational diseases.",
  },
];

const steps = [
  { icon: Phone, title: "Contact Us", desc: "Reach out via phone, WhatsApp, or our online form." },
  { icon: Search, title: "We Investigate", desc: "We trace and verify your unclaimed benefits at no upfront cost." },
  { icon: Banknote, title: "You Get Paid", desc: "Once approved, your benefits are paid directly to you." },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary px-4 py-20 text-primary-foreground md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(140_28%_58%/0.15),transparent_70%)]" />
        <div className="container relative mx-auto max-w-4xl text-center">
          <p className="mb-4 inline-block rounded-full bg-secondary/20 px-4 py-1 text-sm font-medium text-secondary">
            Over R90 Billion in Unclaimed Benefits
          </p>
          <h1 className="mb-6 text-4xl leading-tight md:text-6xl">
            Your Money Is Waiting.<br />Let Us Help You Claim It.
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/80">
            SG Benefits Consulting specialises in recovering unclaimed pension, provident fund, insurance, and guardian fund benefits for South Africans.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-base px-8">
                Start Your Claim
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base">
                Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b bg-muted px-4 py-12">
        <div className="container mx-auto grid max-w-4xl gap-8 text-center md:grid-cols-3">
          {[
            { value: "22+", label: "Years Experience" },
            { value: "R90B+", label: "Unclaimed in SA" },
            { value: "4", label: "Claim Categories" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-bold text-primary md:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-3xl md:text-4xl">How It Works</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.title} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/20">
                  <step.icon className="h-7 w-7 text-primary" />
                </div>
                <p className="mb-1 text-xs font-bold uppercase tracking-wider text-secondary">Step {i + 1}</p>
                <h3 className="mb-2 text-xl">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Claim Types */}
      <section className="bg-muted px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-4 text-center text-3xl md:text-4xl">What We Recover</h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-muted-foreground">
            We handle a wide range of unclaimed financial benefits across South Africa.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {claimTypes.map((ct) => (
              <Card key={ct.title} className="border-none bg-card shadow-md transition-shadow hover:shadow-lg">
                <CardContent className="flex gap-4 p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <ct.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-semibold">{ct.title}</h3>
                    <p className="text-sm text-muted-foreground">{ct.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-12 text-3xl md:text-4xl">Why Trust Us</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: Award, title: "Registered & Compliant", desc: "Registered company (2015/139818/07) operating within FSCA guidelines." },
              { icon: Users, title: "Affiliated Partners", desc: "Proud member of Black Umbrellas and UNCTAD Empretec programme." },
              { icon: Banknote, title: "No Upfront Fees", desc: "We only charge upon successful recovery — no risk to you." },
            ].map((t) => (
              <div key={t.title}>
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary/20">
                  <t.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{t.title}</h3>
                <p className="text-sm text-muted-foreground">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary px-4 py-16 text-primary-foreground md:py-20">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl md:text-4xl">Ready to Claim What's Yours?</h2>
          <p className="mb-8 text-primary-foreground/80">
            It costs nothing to find out if you have unclaimed benefits. Get in touch today.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 text-base">
              Start Your Claim Now
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
