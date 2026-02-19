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
  Wallet
} from "lucide-react";
import Layout from "@/components/Layout";

/* =========================
   CLAIM TYPES
========================= */

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

/* =========================
   PROCESS STEPS
========================= */

const steps = [
  { icon: Phone, title: "Contact Us", desc: "Reach out via phone, WhatsApp or online form." },
  { icon: Search, title: "We Investigate", desc: "We trace and verify your unclaimed benefits." },
  { icon: Banknote, title: "You Get Paid", desc: "Once approved, benefits are paid directly to you." },
];

/* =========================
   MONEY SOURCES SLIDER
========================= */

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
    text: "Life cover, funeral policies and group benefits often remain unclaimed when families don’t know a policy existed.",
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

/* =========================
   COMPONENT
========================= */

const Index = () => {
  const [sourceIndex, setSourceIndex] = useState(0);
  const sourceLen = moneySources.length;

  useEffect(() => {
    const sourceTimer = setInterval(() => {
      setSourceIndex((i) => (i + 1) % sourceLen);
    }, 5000);
    return () => clearInterval(sourceTimer);
  }, [sourceLen]);

  return (
    <Layout>

      {/* =========================
          HERO
      ========================= */}

      <section className="relative overflow-hidden bg-primary px-4 py-20 text-primary-foreground md:py-32">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            Your Money Is Waiting.<br />Let Us Help You Claim It.
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/90 leading-relaxed">
            Were you born in the 80s, 90s or 2000s and lost one or both of your parents or guardians who was working at the time?  
            Or did you personally leave a job years ago — through resignation, retrenchment, dismissal, retirement or ill health?
            <br /><br />
            There could be pension or provident fund money waiting for you.
            <br /><br />
            More than <b>R90 billion</b> in retirement savings remains unclaimed in South Africa — simply because people don’t know it’s there.
          </p>

          <Link to="/contact">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-base px-8 shadow-lg">
              Start Your Consultation
            </Button>
          </Link>
        </div>
      </section>

      {/* =========================
          MONEY SOURCES SLIDER
      ========================= */}

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
              {moneySources[sourceIndex].icon &&
                (() => {
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

          {/* Dots */}
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

    </Layout>
  );
};

export default Index;
