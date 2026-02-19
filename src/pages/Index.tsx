import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Phone,
  Search,
  Banknote,
  Shield,
  Heart,
  Scale,
  Briefcase,
  Award,
  Users,
  ChevronLeft,
  ChevronRight,
  Landmark,
  PiggyBank,
  FileText,
  TrendingUp,
  Wallet,
} from "lucide-react";
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
    desc: "Life insurance, funeral cover & group scheme benefit recovery.",
  },
  {
    icon: Scale,
    title: "Injury on Duty",
    desc: "Compensation for workplace injuries and occupational diseases.",
  },
];

const steps = [
  { icon: Phone, title: "Contact Us", desc: "Reach out via phone, WhatsApp or online form." },
  { icon: Search, title: "We Investigate", desc: "We trace and verify your unclaimed benefits." },
  { icon: Banknote, title: "You Get Paid", desc: "Once approved, benefits are paid directly to you." },
];

const moneySources = [
  {
    icon: Landmark,
    title: "Retirement & Pension Funds",
    text: "Many people resigned, were retrenched, dismissed, retired or passed away without claiming their pension or provident fund benefits.",
  },
  {
    icon: PiggyBank,
    title: "Dormant Bank Accounts",
    text: "Savings or current accounts sometimes become inactive when people change addresses, forget about them, or pass away.",
  },
  {
    icon: FileText,
    title: "Unclaimed Insurance",
    text: "Life cover, funeral policies and group benefits often remain unclaimed when families don't know a policy existed.",
  },
  {
    icon: TrendingUp,
    title: "Investments & Shares",
    text: "Dividends, retirement annuities and collective investments can become unclaimed when contact details are outdated.",
  },
  {
    icon: Wallet,
    title: "Other Forgotten Assets",
    text: "Guardian Fund money, injury-on-duty compensation, uncashed cheques and employment leave credits may also be owed.",
  },
];

const featuredTestimonials = [
  {
    name: "Dr Mathews Phosa",
    location: "Nelspruit, Mpumalanga",
    result: "Special pension reinstated",
    text: "Former ANC Treasurer General and Mpumalanga Premier. Due to extensive work commitments, Dr Phosa's monthly special pension was suspended. We successfully facilitated the reinstatement of his monthly special pension payments through National Treasury.",
    highlight: "High-profile special pension case resolved"
  },
  {
    name: "Mrs Baloyi",
    location: "Pretoria, Gauteng",
    result: "22 years of unclaimed benefits",
    text: "Following the passing of her husband in 1992, Mrs Baloyi was unaware of unclaimed pension benefits. We successfully recovered arrear pension funds and surplus spanning 1992 to 2014. She now receives a regular monthly pension from Mipfa.",
    highlight: "22 years of arrears successfully recovered"
  },
  {
    name: "Mr Thoke",
    location: "Pretoria, Gauteng",
    result: "18 years of denied benefits recovered",
    text: "A correctional officer medically retired due to ill health. After the Compensation Fund initially denied his claim in 1997, Mr Thoke struggled for over a decade. We filed a successful appeal, resulting in full payment of monthly arrears from 1997 to 2015.",
    highlight: "Successful appeal after 10+ years of denial"
  },
  {
    name: "Ms Bikela",
    location: "Claremont, KwaZulu Natal",
    result: "12+ years of unclaimed benefits",
    text: "Ms Bikela's late husband's pension benefits remained unclaimed for over 12 years. We recovered all arrear spouse pension payments, including a lump sum with interest. She now receives ongoing monthly pension payments.",
    highlight: "Full arrears plus ongoing monthly pension secured"
  },
  {
    name: "Ms Masina",
    location: "Winterveldt, Gauteng",
    result: "Life partner and children's benefits secured",
    text: "As the life partner of the late Mr Makhubela (GEPF member), Ms Masina and children from previous relationships were entitled to benefits. We successfully facilitated the distribution of pension fund lump sum and arrear monthly pension to all qualifying beneficiaries.",
    highlight: "Complex family benefit distribution resolved"
  },
  {
    name: "Ms Maluleke",
    location: "Vukani, Limpopo",
    result: "Death-in-service benefits for multiple children",
    text: "Following the death of their father while employed as a transport company driver in Venda, the family engaged our services. We successfully recovered and distributed pension fund proceeds from Old Mutual to all qualifying children.",
    highlight: "Multiple beneficiaries successfully processed"
  },
  {
    name: "Ms Setlhogola",
    location: "Mathibestad, North West",
    result: "Family dispute resolved, benefits secured",
    text: "As life partner to a late South African National Defence Force member, Ms Setlhogola faced family disputes regarding benefit entitlement. We mediated the dispute and secured her monthly pension with full arrears from GEPF.",
    highlight: "Dispute resolution and benefit recovery"
  },
  {
    name: "Mr Vukela",
    location: "Stinkwater, Gauteng",
    result: "Comprehensive multi-fund recovery",
    text: "Following death in service with Gauteng Provincial Government, we successfully recovered multiple benefits: GEPF pension fund, funeral benefits, orphans pension, Old Mutual retirement annuity, Metropolitan Life flexi endowment policy, Momentum insurance death claim, and employment leave credits.",
    highlight: "Seven separate benefit claims successfully processed"
  },
  {
    name: "Ms Mahunga",
    location: "Letlhabile, North West",
    result: "Multiple contract periods consolidated",
    text: "A former teacher who worked across multiple schools on contract basis. Despite geographical distance and administrative challenges, we successfully consolidated all contract periods and recovered full pension benefits from GEPF.",
    highlight: "Complex employment history successfully traced"
  },
  {
    name: "Mr Sepataka",
    location: "Maubane, North West",
    result: "Provident fund recovery",
    text: "Following resignation from his position as a petrol attendant at Shell Garage, we expeditiously recovered his provident fund benefits from Mifa.",
    highlight: "Efficient standard claim processing"
  },
  {
    name: "Ms Masitla",
    location: "Atteridgeville, Gauteng",
    result: "Employer dispute resolved, death benefits paid",
    text: "When her husband died in service at a motor company, the employer initially refused death benefits, claiming abscondment. We successfully negotiated with the employer and secured correct death benefits from Mifa and Liberty Life for the widow and children.",
    highlight: "Employer dispute overcome, full benefits secured"
  },
  {
    name: "Mr Mashapu",
    location: "Mamelodi, Gauteng",
    result: "Benefits re-apportionment for excluded child",
    text: "When his former son-in-law (SAPS member) passed, the child born out of wedlock was initially excluded from benefit distribution. We successfully reopened the case with GEPF, secured benefit redistribution, and facilitated guardian fund payments until the child reached majority.",
    highlight: "Justice for excluded child beneficiary"
  },
  {
    name: "Ms Selomi",
    location: "Suurman/Hammanskraal, Gauteng",
    result: "Multiple benefits despite family disputes",
    text: "Following her husband's death in service at SAPS College, family disputes complicated the claim. We resolved disputes and secured GEPF pension and funeral benefits, plus Old Mutual retirement annuity payments.",
    highlight: "Family mediation and multi-fund recovery"
  },
  {
    name: "Mr Ramara",
    location: "Soshanguve, Gauteng",
    result: "Injury compensation and wrongful dismissal benefits",
    text: "A machine operator who suffered finger amputation and subsequent dismissal. We successfully negotiated amputation compensation from the Compensation Fund and ex-gratia payments from Mipfa for wrongful termination.",
    highlight: "Dual claims: injury and wrongful dismissal"
  },
  {
    name: "Mr Mabasa",
    location: "Witbank, Mpumalanga",
    result: "Early retirement benefits from SAPS",
    text: "A SAPS inspector who took early retirement. Due to time constraints and complex administrative requirements, we expedited the processing and payment of all early retirement benefits from GEPF.",
    highlight: "Complex early retirement case resolved"
  },
  {
    name: "Mr Phalatse",
    location: "Tembisa, Gauteng",
    result: "Non-cooperative employer overcome",
    text: "Following resignation from Shell Garage, the employer refused to facilitate benefit payment. Through persistent negotiation with the employer and WSM Employee Benefits Administrators, we successfully secured his provident fund benefits.",
    highlight: "Employer cooperation secured through negotiation"
  },
  {
    name: "Mr Motlhoki",
    location: "Johannesburg, Gauteng",
    result: "Survivor and guardian fund benefits",
    text: "Following his wife's death while serving in SANDF, we secured survivor spouse pension and facilitated guardian fund payments for their minor daughter. Annual payments continued until she reached 18 years, with remaining balance paid directly to her.",
    highlight: "Long-term guardian fund administration"
  },
  {
    name: "Ms Phetlha",
    location: "Temba/Hammanskraal, Gauteng",
    result: "Death and funeral benefits from multiple sources",
    text: "Her late husband worked for Psira. Despite work commitments limiting her availability, we successfully recovered death benefits and funeral benefits from both Sanlam and GEPF.",
    highlight: "Multi-insurer death benefit recovery"
  }
];

const Index = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [sourceIndex, setSourceIndex] = useState(0);
  const testimonialLen = featuredTestimonials.length;
  const sourceLen = moneySources.length;

  useEffect(() => {
    const id = setInterval(() => setTestimonialIndex(i => (i + 1) % testimonialLen), 6000);
    return () => clearInterval(id);
  }, [testimonialLen]);

  useEffect(() => {
    const sourceTimer = setInterval(() => setSourceIndex(i => (i + 1) % sourceLen), 5000);
    return () => clearInterval(sourceTimer);
  }, [sourceLen]);

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
            Were you born in the 80s, 90s or 2000s and lost one or both of your parents or guardians who was working at the time?  
            Or did you personally leave a job years ago — through resignation, retrenchment, dismissal, retirement or ill health?
            <br /><br />
            There could be pension or provident fund money waiting for you.
            <br /><br />
            More than <b>R90 billion</b> in retirement, investments and savings remains unclaimed in South Africa — simply because people don't know it's there.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-base px-8 shadow-lg">
                Start Your Consultation
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

      {/* Money Sources Slider */}
      <section className="px-4 py-20 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-4">
            <span className="inline-block rounded-full bg-secondary/10 px-4 py-1 text-sm font-medium text-secondary">
              Where Does The Money Come From?
            </span>
          </div>
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">
            Unclaimed Money Can Come From Many Places
          </h2>

          <div className="relative rounded-xl bg-card p-10 shadow-lg transition-all duration-500">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              {(() => {
                const Icon = moneySources[sourceIndex].icon;
                return <Icon className="h-8 w-8 text-primary" />;
              })()}
            </div>
            <h3 className="mb-4 text-xl font-semibold text-primary">
              {moneySources[sourceIndex].title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {moneySources[sourceIndex].text}
            </p>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {moneySources.map((_, i) => (
              <button
                key={i}
                onClick={() => setSourceIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === sourceIndex ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b bg-muted/50 px-4 py-12">
        <div className="container mx-auto grid max-w-5xl gap-8 text-center md:grid-cols-3">
          {[
            { value: "22+", label: "Years Experience", sublabel: "in pension fund administration" },
            { value: "R90B+", label: "Unclaimed Benefits", sublabel: "across South Africa" },
            { value: "100%", label: "Success-Based", sublabel: "we don't stop until you're paid" },
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
              Process
            </span>
          </div>
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">How It Works</h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
            Simple. Seamless. Secure.
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

      {/* Featured Success Stories */}
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
                title: "Hassle-Free Process",
                desc: "We manage the entire process on your behalf, from verification to submission, keeping everything simple and stress-free."
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
          <br />
          <Link to="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 text-lg shadow-xl">
              Start Your Claim Now
            </Button>
          </Link>
          <p className="mt-6 text-sm text-muted-foreground">
            ✓ Response within 24 hours
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
