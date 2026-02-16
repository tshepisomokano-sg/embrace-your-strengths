import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Shield, Users, TrendingUp, Phone, Search, Banknote, Scale, Heart, Briefcase, HelpCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const stats = [
  { value: "R90B+", label: "Unclaimed in South Africa", icon: TrendingUp },
  { value: "22+", label: "Years of Experience", icon: Shield },
  { value: "1000+", label: "Clients Assisted", icon: Users },
];

const services = [
  { icon: Banknote, title: "Pension & Provident Funds", desc: "Recovery from GEPF and private sector funds for former employees." },
  { icon: Scale, title: "Guardian Fund", desc: "Claims from the Master of High Court for minors and beneficiaries." },
  { icon: Heart, title: "Insurance Claims", desc: "Long-term insurance and related benefit recoveries." },
  { icon: Briefcase, title: "Injury on Duty (IOD)", desc: "Workplace injury compensation claims processing." },
  { icon: HelpCircle, title: "Other Claims", desc: "Medical aid savings and other unclaimed benefits." },
];

const steps = [
  { step: "01", title: "Contact Us", desc: "Reach out via our form or phone with your details." },
  { step: "02", title: "We Investigate", desc: "We trace and verify your unclaimed benefits at no upfront cost." },
  { step: "03", title: "You Get Paid", desc: "Once approved, your funds are released directly to you." },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              There's Over <span className="text-secondary">R90 Billion</span> in Unclaimed Money.
              <br />Some of It Could Be Yours.
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 font-sans mb-8 max-w-2xl leading-relaxed">
              SG Benefits Consulting helps you recover unclaimed pension funds, provident funds, insurance payouts, and more — at no upfront cost.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-sans text-base">
                <Link to="/contact">
                  Start Your Claim <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-sans text-base">
                <Link to="/services">
                  Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-secondary py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-4 justify-center">
                <stat.icon className="h-10 w-10 text-secondary-foreground/80" />
                <div>
                  <p className="text-3xl font-bold text-secondary-foreground">{stat.value}</p>
                  <p className="text-sm text-secondary-foreground/80 font-sans">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What We Help You Claim</h2>
            <p className="text-muted-foreground font-sans max-w-2xl mx-auto">
              We specialise in tracing and recovering unclaimed benefits across multiple categories.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <Card key={svc.title} className="group hover:shadow-lg transition-shadow border-border hover:border-secondary">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                    <svc.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{svc.title}</h3>
                  <p className="text-muted-foreground font-sans text-sm">{svc.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" className="font-sans">
              <Link to="/services">View All Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-muted-foreground font-sans">Three simple steps to recover your unclaimed money.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground font-sans text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / CTA */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Founded by a Pension Fund Expert
          </h2>
          <p className="text-primary-foreground/80 font-sans max-w-2xl mx-auto mb-8 leading-relaxed">
            Steve Ngobenza brings over 22 years of experience in pension fund administration, GEPF, and financial advisory services. SG Benefits Consulting has been helping South Africans recover what's rightfully theirs since 2015.
          </p>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-sans">
            <Link to="/contact">
              <Phone className="mr-2 h-5 w-5" />
              Get in Touch Today
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
