import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Shield, Heart, Scale, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Pension & Provident Fund Recovery",
    desc: "We trace and recover unclaimed pension and provident fund benefits from both government (GEPF) and private sector funds.",
    points: [
      "Government Employees Pension Fund (GEPF)",
      "Private pension and provident funds",
      "Retirement annuity payouts",
      "Unclaimed benefits from previous employers",
    ],
  },
  {
    icon: Shield,
    title: "Guardian Fund Claims",
    desc: "We assist with claims from the Guardian's Fund, managed by the Master of the High Court, for minor beneficiaries and their guardians.",
    points: [
      "Claims for minor children's inheritance",
      "Funds held by the Master of the High Court",
      "Documentation and legal process assistance",
      "Follow-up until funds are released",
    ],
  },
  {
    icon: Heart,
    title: "Insurance Claims",
    desc: "Recovery of unpaid or unclaimed insurance benefits including life insurance, funeral cover, and group scheme benefits.",
    points: [
      "Life insurance policy payouts",
      "Funeral cover benefits",
      "Group life scheme claims",
      "Unpaid or lapsed policy benefits",
    ],
  },
  {
    icon: Scale,
    title: "Injury on Duty (IOD)",
    desc: "We help workers claim compensation for workplace injuries and occupational diseases through the Compensation Fund.",
    points: [
      "Workplace injury compensation",
      "Occupational disease claims",
      "Compensation Fund submissions",
      "Medical expense recovery",
    ],
  },
];

const Services = () => (
  <Layout>
    <section className="bg-primary px-4 py-16 text-primary-foreground md:py-24">
      <div className="container mx-auto max-w-3xl text-center">
        <h1 className="mb-4 text-4xl md:text-5xl">Our Services</h1>
        <p className="text-lg text-primary-foreground/80">
          We specialise in recovering a wide range of unclaimed financial benefits across South Africa.
        </p>
      </div>
    </section>

    <section className="px-4 py-16 md:py-24">
      <div className="container mx-auto max-w-5xl space-y-8">
        {services.map((s) => (
          <Card key={s.title} className="border-none shadow-md">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl md:text-2xl">{s.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">{s.desc}</p>
              <ul className="grid gap-2 sm:grid-cols-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  </Layout>
);

export default Services;
