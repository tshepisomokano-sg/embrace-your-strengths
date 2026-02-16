import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    idNumber: "",
    phone: "",
    email: "",
    claimType: "",
    formerEmployer: "",
    description: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: "Inquiry Submitted!",
      description: "We'll review your claim and get back to you within 48 hours.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="bg-primary py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Start Your Claim</h1>
          <p className="text-primary-foreground/80 font-sans text-lg max-w-2xl">
            Fill in the form below and our team will investigate your claim — at no upfront cost.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <Card>
                  <CardContent className="p-10 text-center">
                    <CheckCircle className="h-16 w-16 text-secondary mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-foreground mb-2">Thank You!</h2>
                    <p className="text-muted-foreground font-sans mb-6">
                      Your claim inquiry has been submitted successfully. Our team will review your details and contact you within 48 hours.
                    </p>
                    <Button onClick={() => setSubmitted(false)} className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-sans">
                      Submit Another Inquiry
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-bold text-foreground mb-6">Claims Inquiry Form</h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="fullName" className="font-sans">Full Name *</Label>
                          <Input id="fullName" required value={formData.fullName} onChange={(e) => handleChange("fullName", e.target.value)} placeholder="Your full name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="idNumber" className="font-sans">ID Number *</Label>
                          <Input id="idNumber" required value={formData.idNumber} onChange={(e) => handleChange("idNumber", e.target.value)} placeholder="SA ID number" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="font-sans">Phone Number *</Label>
                          <Input id="phone" type="tel" required value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)} placeholder="+27..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="font-sans">Email</Label>
                          <Input id="email" type="email" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} placeholder="your@email.com" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label className="font-sans">Type of Claim *</Label>
                          <Select required value={formData.claimType} onValueChange={(v) => handleChange("claimType", v)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select claim type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="pension">Pension & Provident Funds</SelectItem>
                              <SelectItem value="guardian">Guardian Fund</SelectItem>
                              <SelectItem value="insurance">Insurance Claims</SelectItem>
                              <SelectItem value="iod">Injury on Duty (IOD)</SelectItem>
                              <SelectItem value="other">Other Claims</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="employer" className="font-sans">Former Employer</Label>
                          <Input id="employer" value={formData.formerEmployer} onChange={(e) => handleChange("formerEmployer", e.target.value)} placeholder="Company name" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="description" className="font-sans">Brief Description</Label>
                        <Textarea id="description" value={formData.description} onChange={(e) => handleChange("description", e.target.value)} placeholder="Tell us about your claim..." rows={4} />
                      </div>
                      <Button type="submit" size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-sans">
                        <Send className="mr-2 h-4 w-4" />
                        Submit Inquiry
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Contact Details</h3>
                  <ul className="space-y-4 font-sans text-sm">
                    <li className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Phone</p>
                        <p className="text-muted-foreground">+27 67 117 7118</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <p className="text-muted-foreground">info@sgbenefits.co.za</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Address</p>
                        <p className="text-muted-foreground">Gauteng, South Africa</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Operating Hours</p>
                        <p className="text-muted-foreground">Mon–Fri: 08:00–17:00</p>
                        <p className="text-muted-foreground">Sat–Sun: Closed</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">No Upfront Costs</h3>
                  <p className="text-primary-foreground/80 font-sans text-sm leading-relaxed">
                    We only charge a fee when your claim is successful. 15% service fee + 2.5% cost-to-client fee on recovered amounts.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
