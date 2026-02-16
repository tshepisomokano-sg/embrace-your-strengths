import Layout from "@/components/Layout";
import { Award, Target, Eye, Handshake, Users, Globe, MessageSquare, Shield } from "lucide-react";

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="bg-primary px-4 py-16 text-primary-foreground md:py-24">
      <div className="container mx-auto max-w-3xl text-center">
        <h1 className="mb-4 text-4xl md:text-5xl">About SG Benefits Consulting</h1>
        <p className="text-lg text-primary-foreground/80">
          Turning financial stress into financial freedom.
        </p>
      </div>
    </section>

    {/* What We Do */}
    <section className="px-4 py-16 md:py-24">
      <div className="container mx-auto max-w-5xl">
        <h2 className="mb-6 text-3xl font-semibold text-center md:text-4xl">What We Do</h2>
        <p className="mb-6 text-lg text-center text-muted-foreground max-w-3xl mx-auto">
          SG Benefits Consulting (PTY) LTD specialises in recovery of savings and investments (Pension Fund, Provident Fund, Long term insurance, Medical Aid and related) of former employees and their beneficiaries/dependants.
        </p>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto">
          We track and trace beneficiaries/dependants, diagnose the nature of investment or savings and identify the relevant fund and/or insurance to facilitate recovery on behalf of beneficiaries.
        </p>
      </div>
    </section>

    {/* Benefits of Choosing Us */}
    <section className="px-4 py-16 md:py-24">
      <div className="container mx-auto max-w-5xl">
        <h2 className="mb-12 text-3xl font-semibold text-center md:text-4xl">Why Choose SG Benefits</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl bg-muted p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-3 text-lg font-semibold">Unmatched Expertise</h3>
            <p className="text-sm text-muted-foreground">
              Our proficiency in retirement funds and related savings makes us unique in recovery services. Benefits are received in good time and accurately in strict accordance with fund rules.
            </p>
          </div>

          <div className="rounded-xl bg-muted p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-3 text-lg font-semibold">Beyond Benefits Recovery</h3>
            <p className="text-sm text-muted-foreground">
              We provide expertise in labour relations, mediation and negotiations. We assist to resolve disputes with former employers or family disputes.
            </p>
          </div>

          <div className="rounded-xl bg-muted p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-3 text-lg font-semibold">Personalized Service</h3>
            <p className="text-sm text-muted-foreground">
              Services tailored to each client's needs. We offer direct personal assistance and home visits depending on claims and geographical location.
            </p>
          </div>

          <div className="rounded-xl bg-muted p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Globe className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-3 text-lg font-semibold">Accessible Anywhere</h3>
            <p className="text-sm text-muted-foreground">
              We provide halfway visits to homes, shopping malls, bus/taxi stations, nearest towns and cities to meet clients conveniently.
            </p>
          </div>

          <div className="rounded-xl bg-muted p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <MessageSquare className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-3 text-lg font-semibold">Language of Choice</h3>
            <p className="text-sm text-muted-foreground">
              We serve clients in their language of choice. This invaluable customer service feature is provided without bias.
            </p>
          </div>

          <div className="rounded-xl bg-muted p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Handshake className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-3 text-lg font-semibold">Industry Recognition</h3>
            <p className="text-sm text-muted-foreground">
              Recognized by retirement fund administrators and insurance stakeholders for our professionalism, courtesy and unique specialty.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="bg-muted px-4 py-16 md:py-24">
      <div className="container mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
        <div className="rounded-xl bg-card p-8 shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold">Our Mission</h2>
          <p className="text-muted-foreground">
            To assist South Africans in recovering their unclaimed financial benefits efficiently, ethically, and with full transparency — ensuring that no one misses out on what they are rightfully owed.
          </p>
        </div>
        <div className="rounded-xl bg-card p-8 shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold">Our Vision</h2>
          <p className="text-muted-foreground">
            To be the most trusted and accessible benefits recovery consultancy in South Africa, empowering individuals and families to achieve financial security.
          </p>
        </div>
      </div>
    </section>

    {/* Track Record */}
    <section className="px-4 py-16 md:py-24">
      <div className="container mx-auto max-w-5xl">
        <h2 className="mb-6 text-3xl font-semibold text-center md:text-4xl">Our Track Record</h2>
        <p className="mb-12 text-center text-muted-foreground max-w-3xl mx-auto">
          We have successfully facilitated claims from major institutions and resolved complex disputes.
        </p>
        
        <div className="mb-12">
          <h3 className="mb-6 text-xl font-semibold text-center">Institutions We've Worked With</h3>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[
              "Government Employees Pension Fund",
              "Guardian's Fund",
              "Special Pension",
              "Municipality Gratuity Fund",
              "Liberty Life",
              "Old Mutual",
              "Sanlam",
              "Alexander Forbes",
              "Momentum",
              "Metropolitan",
              "Compensation Fund",
              "UIF",
              "Medical Aid Savings"
            ].map((institution) => (
              <div key={institution} className="rounded-lg bg-muted p-4 text-center text-sm font-medium">
                {institution}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-xl font-semibold text-center">Types of Claims We've Handled</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Death in service",
              "Death after termination",
              "Injuries on duty",
              "Retirement benefits",
              "Resignation benefits",
              "Dismissal benefits",
              "Abscondment benefits",
              "Orphans pensions",
              "Funeral benefits",
              "Insurance claims",
              "Leave credits",
              "Medical aid savings"
            ].map((claim) => (
              <span key={claim} className="rounded-full bg-secondary/10 px-4 py-2 text-sm font-medium text-primary">
                {claim}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-xl bg-primary/5 p-8 text-center">
          <h3 className="mb-4 text-xl font-semibold">Dispute Resolution</h3>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            We have successfully resolved disputes between in-laws, customary wives, and children in and out of wedlock. In resolving retirement fund related family disputes, we are guided by the Pension Fund Act 1956, Government Employees Pension Law 1996, and rules of various funds.
          </p>
        </div>
      </div>
    </section>

    {/* Partnerships */}
    <section className="bg-primary px-4 py-16 text-primary-foreground md:py-24">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="mb-4 text-3xl font-semibold">Our Partnerships</h2>
        <p className="mb-8 text-primary-foreground/80">
          We work closely with key institutions to ensure efficient recovery of your benefits.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {["GEPF", "FSCA", "Fund Administrators", "Black Umbrellas", "UNCTAD Empretec"].map((p) => (
            <span key={p} className="rounded-full bg-secondary/20 px-6 py-3 text-sm font-medium text-secondary">
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;