import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Search, Banknote, Shield, Heart, Scale, Briefcase, Award, Users, ChevronLeft, ChevronRight } from "lucide-react";
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

const featuredTestimonials = [
  {
    name: "Mrs Baloyi",
    location: "Pretoria, Gauteng",
    result: "Pension fund unclaimed since 1992",
    text: "Her late husband's pension fund remained unclaimed since 1992. She employed our services and arrear pension fund and surplus from 1992 to 2014 were paid. She is currently in receipt of monthly pension from Mipfa.",
    highlight: "22 years of arrears recovered"
  },
  {
    name: "Mr Thoke",
    location: "Pretoria, Gauteng",
    result: "18 years of benefits recovered",
    text: "He was a correctional officer terminated due to ill health. The Compensation Fund disapproved his medical unfit benefit in 1997. He struggled for more than ten years until we came to his rescue. An appeal was filed, claim was re-assessed and he was paid all his monthly arrears from 1997 to 2015.",
    highlight: "Successful appeal after 10+ years"
  },
  {
    name: "Ms Bikela",
    location: "Claremont, KwaZulu Natal",
    result: "12+ years unclaimed",
    text: "Her late husband's benefits remained unclaimed for more than 12 years until she employed our services. She received all of her arrears monthly spouse pension, lump sum with interest. She is currently in receipt of monthly pension.",
    highlight: "Now receiving monthly pension"
  }
];

const Index = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const testimonialLen = featuredTestimonials.length;

  useEffect(() => {
    const id = setInterval(() => setTestimonialIndex(i => (i + 1) % testimonialLen), 6000);
    return () => clearInterval(id);
  }, [testimonialLen]);

  const prevTestimonial = () => setTestimonialIndex(i => (i - 1 + testimonialLen) % testimonialLen);
  const nextTestimonial = () => setTestimonialIndex(i => (i + 1) % testimonialLen);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary px-4 py-20 text-primary-foreground md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(140_28%_58%/0.15),transparent_70%)]" />
        <div className="container relative mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            Your Money Is Waiting.<br />Let Us Help You Claim It.
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/90 leading-relaxed">
            Hundreds of thousands of people left government and private sector employment due to death, resignations, dismissals, retrenchments, retirement and ill health. Many now suffer financial stress and poverty, unaware that <strong>over R90 billion</strong> in their savings and investments remains unclaimed.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-base px-8 shadow-lg">
                Start Your Free Consultation
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-base px-8">
                 Learn More
            </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b bg-muted/50 px-4 py-12">
        <div className="container mx-auto grid max-w-5xl gap-8 text-center md:grid-cols-3">
          {[
            { value: "22+", label: "Years Experience", sublabel: "in pension fund administration" },
            { value: "R90B+", label: "Unclaimed Benefits", sublabel: "across South Africa" },
            { value: "100%", label: "Success-Based", sublabel: "no upfront costs" },
          ].map((s) => (
            <div key={s.label} className="rounded-lg bg-card p-6 shadow-sm">
              <p className="text-4xl font-bold text-primary md:text-5xl">{s.value}</p>
              <p className="mt-2 font-semibold text-foreground">{s.label}</p>
              <p className="mt-1 text-xs text-muted-foreground">{s.sublabel}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-4 text-center">
            <span className="inline-block rounded-full bg-secondary/10 px-4 py-1 text-sm font-medium text-secondary">
              Simple Process
            </span>
          </div>
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">How It Works</h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
            No complicated paperwork. We handle everything for you.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.title} className="relative text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-secondary/10 shadow-md">
                  <step.icon className="h-9 w-9 text-primary" />
                </div>
                <div className="mb-2 inline-block rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                  STEP {i + 1}
                </div>
                <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Recover */}
      <section className="bg-muted/50 px-4 py-20">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-4 text-center">
            <span className="inline-block rounded-full bg-secondary/10 px-4 py-1 text-sm font-medium text-secondary">
              Our Expertise
            </span>
          </div>
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">What We Recover</h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
            From government and private sector funds across South Africa
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {claimTypes.map((ct) => (
              <Card key={ct.title} className="group border-none bg-card shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
                <CardContent className="flex gap-4 p-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <ct.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">{ct.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{ct.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/services">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                View All Services →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Success Story */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-4 text-center">
            <span className="inline-block rounded-full bg-secondary/10 px-4 py-1 text-sm font-medium text-secondary">
              Real Results
            </span>
          </div>
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Client Success Stories</h2>

          <div className="relative">
            <Card className="border-none bg-gradient-to-br from-primary/5 to-secondary/5 shadow-xl">
              <CardContent className="p-8 md:p-12">
                <div className="mb-6 flex items-start justify-between">
                  <div>
                    <div className="mb-2 inline-block rounded-full bg-secondary/20 px-3 py-1 text-xs font-semibold text-secondary">
                      {featuredTestimonials[testimonialIndex].highlight}
                    </div>
                    <p className="text-lg font-semibold text-primary">
                      {featuredTestimonials[testimonialIndex].name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {featuredTestimonials[testimonialIndex].location}
                    </p>
                  </div>
                  <div className="hidden md:block">
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary">
                        {featuredTestimonials[testimonialIndex].result}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <svg className="absolute -top-4 -left-2 h-8 w-8 text-secondary/20" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z"/>
                  </svg>
                  <p className="pl-6 text-base leading-relaxed text-muted-foreground">
                    {featuredTestimonials[testimonialIndex].text}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                onClick={prevTestimonial}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-all hover:bg-primary hover:text-white"
                aria-label="Previous story"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              <div className="flex gap-2">
                {featuredTestimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setTestimonialIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === testimonialIndex ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
                    }`}
                    aria-label={`Go to story ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-all hover:bg-primary hover:text-white"
                aria-label="Next story"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="bg-primary px-4 py-20 text-primary-foreground">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-4 text-center">
            <span className="inline-block rounded-full bg-secondary/20 px-4 py-1 text-sm font-medium text-secondary">
              Why Choose Us
            </span>
          </div>
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Built on Trust & Results</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { 
                icon: Award, 
                title: "Registered & Compliant", 
                desc: "Registered company (2015/139818/07) operating within FSCA guidelines and industry best practices." 
              },
              { 
                icon: Users, 
                title: "Trusted Partners", 
                desc: "Proud member of Black Umbrellas and UNCTAD Empretec programme. Recognized by major fund administrators." 
              },
              { 
                icon: Shield, 
                title: "Zero Risk to You", 
                desc: "No upfront fees. Free consultation to assess your claim." 
              },
            ].map((t) => (
              <div key={t.title} className="rounded-xl bg-primary-foreground/10 p-6 text-center backdrop-blur">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/20">
                  <t.icon className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="mb-3 text-lg font-semibold">{t.title}</h3>
                <p className="text-sm leading-relaxed text-primary-foreground/80">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Claim What's Yours?</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Free consultation. No upfront fees. We handle everything.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 text-lg shadow-xl">
              Start Your Claim Now
            </Button>
          </Link>
          <p className="mt-6 text-sm text-muted-foreground">
            ✓ Response within 24 hours  ✓ Free benefits calculation  ✓ No obligation
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Index;