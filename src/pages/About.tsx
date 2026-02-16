import Layout from "@/components/Layout";
import { Award, Target, Eye, Handshake } from "lucide-react";

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="bg-primary px-4 py-16 text-primary-foreground md:py-24">
      <div className="container mx-auto max-w-3xl text-center">
        <h1 className="mb-4 text-4xl md:text-5xl">About SG Benefits Consulting</h1>
        <p className="text-lg text-primary-foreground/80">
          Turning financial stress into financial freedom since 2015.
        </p>
      </div>
    </section>

    {/* Story */}
    <section className="px-4 py-16 md:py-24">
      <div className="container mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-3xl">Our Story</h2>
          <p className="mb-4 text-muted-foreground">
            SG Benefits Consulting (Pty) Ltd was founded in 2015 by Steve Ngobenza, a seasoned professional with over 22 years of experience in pension fund administration.
          </p>
          <p className="mb-4 text-muted-foreground">
            Having witnessed firsthand how billions of rands in pension, provident fund, and insurance benefits go unclaimed every year, Steve set out to bridge the gap between fund administrators and the rightful beneficiaries of these funds.
          </p>
          <p className="text-muted-foreground">
            Today, SG Benefits Consulting helps South Africans across the country — from urban centres to rural communities — recover the money that is rightfully theirs.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Award, label: "22+ Years Experience" },
              { icon: Target, label: "Results-Driven" },
              { icon: Handshake, label: "Trusted Partners" },
              { icon: Eye, label: "Full Transparency" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center rounded-xl bg-muted p-6 text-center">
                <item.icon className="mb-2 h-8 w-8 text-primary" />
                <p className="text-sm font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="bg-muted px-4 py-16 md:py-24">
      <div className="container mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
        <div className="rounded-xl bg-card p-8 shadow-sm">
          <h2 className="mb-4 text-2xl">Our Mission</h2>
          <p className="text-muted-foreground">
            To assist South Africans in recovering their unclaimed financial benefits efficiently, ethically, and with full transparency — ensuring that no one misses out on what they are rightfully owed.
          </p>
        </div>
        <div className="rounded-xl bg-card p-8 shadow-sm">
          <h2 className="mb-4 text-2xl">Our Vision</h2>
          <p className="text-muted-foreground">
            To be the most trusted and accessible benefits recovery consultancy in South Africa, empowering individuals and families to achieve financial security.
          </p>
        </div>
      </div>
    </section>

    {/* Partnerships */}
    <section className="px-4 py-16 md:py-24">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-3xl">Our Partnerships</h2>
        <p className="mb-8 text-muted-foreground">
          We work closely with key institutions to ensure efficient recovery of your benefits.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {["GEPF", "FSCA", "Fund Administrators", "Black Umbrellas", "UNCTAD Empretec"].map((p) => (
            <span key={p} className="rounded-full bg-primary/10 px-5 py-2 text-sm font-medium text-primary">
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
