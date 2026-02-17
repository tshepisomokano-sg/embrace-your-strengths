import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_zgxf1no',
        'template_701xo2w',
        {
          name: form.name,
          phone: form.phone,
          email: form.email,
          message: form.message,
        },
        'edt2D2dR-x8jTPCM4'
      );

      toast({
        title: "Inquiry Submitted ✓",
        description: "Thank you! We'll be in touch within 24 hours.",
      });
      setForm({ name: "", phone: "", email: "", message: "" });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Submission Failed",
        description: "Something went wrong. Please try WhatsApp or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="bg-primary px-4 py-16 text-primary-foreground md:py-24">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-4xl md:text-5xl">Start Your Claim</h1>
          <p className="text-lg text-primary-foreground/80">
            Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                placeholder="e.g. Thabo Mokoena"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                required
                placeholder="e.g. 072 123 4567"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="e.g. thabo@email.com"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <Label htmlFor="message">Tell us about your situation</Label>
              <Textarea
                id="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                placeholder="e.g. I worked for a company from 2005-2012 and never claimed my pension..."
                rows={5}
                disabled={isSubmitting}
              />
            </div>
            <Button 
              type="submit" 
              size="lg" 
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Submit Inquiry"}
            </Button>
          </form>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="mb-6 text-2xl">Other Ways to Reach Us</h2>
              <ul className="space-y-5">
                <li className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Call us</p>
                    <a href="tel:+27123456789" className="font-medium hover:text-primary">+27 12 345 6789</a>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/20">
                    <MessageCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">WhatsApp</p>
                    <a href="https://wa.me/27713579169" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-primary">
                      +27 71 357 9169
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:info@sgbenefits.co.za" className="font-medium hover:text-primary">info@sgbenefits.co.za</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Address</p>
                    <p className="font-medium">Pretoria, Gauteng, South Africa</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;