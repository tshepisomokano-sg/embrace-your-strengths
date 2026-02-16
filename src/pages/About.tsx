import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Target, Eye, Handshake, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="bg-primary py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">About Us</h1>
          <p className="text-primary-foreground/80 font-sans text-lg max-w-2xl">
            Giving Back the Service of Pension Fund — helping South Africans recover what's rightfully theirs since 2015.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
            <div className="prose font-sans text-muted-foreground space-y-4 leading-relaxed">
              <p>
                SG Benefits Consulting (Pty) Ltd was founded in 2015 by <strong className="text-foreground">Steve Ngobenza</strong>, a seasoned professional with over 22 years of experience in the pension fund administration industry. Having worked extensively with the Government Employees Pension Fund (GEPF) and various private sector funds, Steve identified a critical gap — billions of rands in unclaimed benefits that rightful owners didn't even know existed.
              </p>
              <p>
                Registered as a company (2015/273230/07), SG Benefits Consulting was born with a single mission: to bridge the gap between unclaimed funds and their rightful owners. Today, there is over <strong className="text-foreground">R90 billion</strong> in unclaimed monies in South Africa, and we're committed to helping individuals and families recover these funds.
              </p>
              <p>
                Our expertise spans pension fund claims, provident fund recovery, Guardian Fund claims from the Master of High Court, insurance claim recoveries, and workplace injury (IOD) compensation. We work with fund administrators, insurance companies, the GEPF, and other institutions to trace and recover your money.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-8">
              <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4">
                <Target className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                To assist individuals and families in recovering unclaimed benefits efficiently, transparently, and at no upfront cost — giving back the service of pension fund.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4">
                <Eye className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                To be the most trusted benefits consulting firm in South Africa, ensuring no rightful benefit goes unclaimed.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4">
                <Handshake className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Our Values</h3>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                Integrity, transparency, dedication, and excellence. We treat every client's claim as if it were our own.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Our Key Partnerships</h2>
          <p className="text-muted-foreground font-sans text-center mb-8">
            We work with leading institutions to trace and recover your unclaimed benefits.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Fund Administrators",
              "Insurance Companies",
              "GEPF",
              "Guardian Fund",
              "Master of High Court",
              "Compensation Fund (IOD)",
            ].map((partner) => (
              <div key={partner} className="bg-muted rounded-lg p-4 text-center font-sans text-sm text-foreground font-medium">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Ready to Claim What's Yours?</h2>
          <p className="text-primary-foreground/80 font-sans mb-8">Let our expert team help you recover your unclaimed benefits.</p>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-sans">
            <Link to="/contact">Start Your Claim <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
