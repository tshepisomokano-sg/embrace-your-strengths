import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Shield, Heart, Scale, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Pension & Provident Fund Recovery",
    desc: "We trace and recover unclaimed pension and provident fund benefits from government (GEPF) and private sector funds.",
    points: [
      "Government Employees Pension Fund (GEPF)",
      "Private pension and provident funds",
      "Dismissal, resignation, or abscondment benefits",
      "Death in service or on retirement",
      "Early retirement and ill-health benefits",
      "Normal retirement from 60 years of age",
    ],
  },
  {
    icon: Shield,
    title: "Guardian Fund & Estate Administration",
    desc: "Claims from the Guardian's Fund for minor beneficiaries and administration of deceased estates.",
    points: [
      "Claims for minor children's inheritance",
      "Funds held by the Master of the High Court",
      "Administration of deceased estate",
      "Documentation and legal process assistance",
      "Follow-up until funds are released",
    ],
  },
  {
    icon: Heart,
    title: "Insurance & Long-Term Benefits",
    desc: "Recovery of unpaid or unclaimed insurance benefits including life insurance, funeral cover, and retirement annuities.",
    points: [
      "Life insurance policy payouts",
      "Funeral cover benefits",
      "Retirement annuities",
      "Long-term insurance claims",
      "Medical Aid Savings recovery",
    ],
  },
  {
    icon: Scale,
    title: "Injury on Duty & Compensation",
    desc: "We help workers claim compensation for workplace injuries and occupational diseases through the Compensation Fund.",
    points: [
      "Workplace injury compensation",
      "Occupational disease claims",
      "Compensation Fund submissions",
      "Injury on duty benefits",
    ],
  },
];

const beneficiaries = [
  "Biological children (including outside marriage)",
  "Adopted children",
  "Surviving spouses or life partners",
  "Biological parents or siblings of the deceased",
  "Nominated beneficiaries/dependants",
  "Estate of the deceased",
];

const testimonials = [
  {
    name: "Dr Mathews Phosa",
    location: "Nelspruit, Mpumalanga",
    text: "Former ANC Treasurer General and Mpumalanga Premier. His monthly special pension was suspended due to time constraints and tight work schedule. He employed our services and his monthly special pension was re-instated."
  },
  {
    name: "Ms Masina",
    location: "Winterveldt, Gauteng",
    text: "Life partner to the late Mr Makhubela. As surviving life partner, she received her portion of pension fund lump sum and arrears monthly pension. Children from previous relationships also received their fair share."
  },
  {
    name: "Ms Maluleke",
    location: "Vukani, Limpopo",
    text: "Their late father passed on in service working for a transport company. They employed our services and pension fund proceeds were paid to all children."
  },
  {
    name: "Ms Setlhogola",
    location: "Mathibestad, North West",
    text: "Life partner to the late working for South African National Defence Force. Due to family dispute with in-laws, she employed our services and life partner monthly pension with arrears were paid to her accordingly."
  },
  {
    name: "Mr Vukela",
    location: "Stinkwater, Gauteng",
    text: "He died in service working for Gauteng Provincial Government. All benefits were received: Pension Fund, Funeral benefits, Orphans pension from GEPF, Retirement Annuity from Old Mutual, Flexi Endowment Policy from Metropolitan Life, Insurance death claim from Momentum and leave credits."
  },
  {
    name: "Ms Mahunga",
    location: "Letlhabile, North West",
    text: "She was a former teacher who worked between schools as a contract worker. Due to distance and other challenges, she employed our services. All her contract periods as a teacher were claimed and pension benefits from GEPF paid accordingly."
  },
  {
    name: "Mr Sepataka",
    location: "Maubane, North West",
    text: "He was a petrol attendant from Shell Garage. He resigned and employed our services. Provident Fund from Mifa was paid to him in good time."
  },
  {
    name: "Ms Masitla",
    location: "Atteridgeville, Gauteng",
    text: "Her late husband died in service working for a motor company. The employer refused to pay death benefits. She employed our services and we negotiated with the employer. The correct death benefits were paid to her and children."
  },
  {
    name: "Mr Mashapu",
    location: "Mamelodi, Gauteng",
    text: "His former son in law died working for SAPS. Death claim re-apportionment case was re-opened with GEPF. The child out of wedlock was excluded initially. We assisted and redistribution was made. Her portion was paid to guardian's fund annually until she turned 18."
  },
  {
    name: "Ms Selomi",
    location: "Suurman/Hammanskraal, Gauteng",
    text: "The late Mr Selomi died in service from SAPS College. Due to work commitment and family disputes, she employed our services. The dispute was resolved and Pension Benefits and Funeral Benefits from GEPF was paid together with retirement annuity from Old Mutual."
  },
  {
    name: "Mr Ramara",
    location: "Soshanguve, Gauteng",
    text: "He was a machine operator in a private company and was injured on duty with fingers amputated. His former employer dismissed him. We negotiated with the employer and he received amputation compensation from Compensation Fund and ex-gratia payments from Mipfa."
  },
  {
    name: "Mr Mabasa",
    location: "Witbank, Mpumalanga",
    text: "He was an inspector from SAPS and his employment was terminated due to early retirement. Due to time constraints, he employed our services. All benefits were paid from GEPF."
  },
  {
    name: "Mr Thoke",
    location: "Pretoria, Gauteng",
    text: "He was a correctional officer terminated due to ill health. The Compensation Fund disapproved his medical unfit benefit in 1997. He struggled for more than ten years until we came to his rescue. An appeal was filed, claim was re-assessed and he was paid all his monthly arrears from 1997 to 2015."
  },
  {
    name: "Mr Phalatse",
    location: "Tembisa, Gauteng",
    text: "He was a petrol attendant and resigned from Shell garage. His employer refused to cooperate for his benefits to be paid. He employed our services and negotiations were eventually successful. Benefits paid from WSM Employee Benefits Administrators."
  },
  {
    name: "Mr Motlhoki",
    location: "Johannesburg, Gauteng",
    text: "His deceased wife died working for SANDF. He employed our services and survival spouse and pension fund paid to him. Daughter's benefits were paid to guardian's fund annually until she turned 18, then outstanding benefits were paid to her bank account."
  },
  {
    name: "Ms Phetlha",
    location: "Temba/Hammanskraal, Gauteng",
    text: "Death benefits of her late husband who worked for Psira and Funeral benefits from GEPF. Due to time constraints and work commitment, she employed our services and all benefits were paid to her accordingly."
  },
  {
    name: "Ms Bikela",
    location: "Claremont, KwaZulu Natal",
    text: "Her late husband's benefits remained unclaimed for more than 12 years until she employed our services. She received all of her arrears monthly spouse pension, lump sum with interest. She is currently in receipt of monthly pension."
  },
  {
    name: "Mrs Baloyi",
    location: "Pretoria, Gauteng",
    text: "Her late husband's pension fund remained unclaimed since 1992. She employed our services and arrear pension fund and surplus from 1992 to 2014 were paid. She is currently in receipt of monthly pension from Mipfa."
  }
];

const Services = () => {
  const [index, setIndex] = useState(0);
  const len = testimonials.length;

  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % len), 8000);
    return () => clearInterval(id);
  }, [len]);

  const prev = () => setIndex(i => (i - 1 + len) % len);
  const next = () => setIndex(i => (i + 1) % len);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary px-4 py-16 text-primary-foreground md:py-24">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-4xl md:text-5xl">Our Services</h1>
          <p className="text-lg text-primary-foreground/80">
            Specialized recovery of savings and investments from government and private sector institutions.
          </p>
        </div>
      </section>

      {/* Main Services */}
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

      {/* Who Can Claim */}
      <section className="bg-muted px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-3xl font-semibold">Who Can Claim Death Benefits</h2>
          <p className="mb-8 text-center text-muted-foreground">
            The following beneficiaries are eligible to claim death benefits from former employees:
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {beneficiaries.map((beneficiary) => (
              <div key={beneficiary} className="flex items-start gap-3 rounded-lg bg-card p-4 shadow-sm">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                <span className="text-sm font-medium">{beneficiary}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Additional Services */}
      <section className="bg-muted px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-semibold">Additional Services</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-none shadow-sm">
              <CardContent className="pt-6">
                <h3 className="mb-2 font-semibold text-primary">Divorce Claims</h3>
                <p className="text-sm text-muted-foreground">
                  Assistance with pension interest claims in divorce settlements from public and private sector funds.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-sm">
              <CardContent className="pt-6">
                <h3 className="mb-2 font-semibold text-primary">Free Benefits Calculations</h3>
                <p className="text-sm text-muted-foreground">
                  Complimentary benefit estimates and calculations for clients to understand their potential claims.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="bg-primary px-4 py-16 text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="mb-8 text-lg text-primary-foreground/90">
            No upfront fees. We only charge upon successful recovery.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              Start Your Claim Today
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;