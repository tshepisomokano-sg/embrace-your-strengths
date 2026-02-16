import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Company */}
          <div>
            <img src="/logo.png" alt="SG Benefits Consulting" className="mb-4 h-14 w-auto" />
            <p className="text-sm text-primary-foreground/70">
              Helping South Africans recover unclaimed pension, provident fund, insurance, and guardian fund benefits since 2015.
            </p>
            <p className="mt-4 text-xs text-primary-foreground/50">
              Reg: 2015/139818/07
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Services" },
                { to: "/faq", label: "FAQ" },
                { to: "/contact", label: "Start a Claim" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-primary-foreground/70 transition-colors hover:text-secondary">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-secondary" />
                <a href="tel:+27123456789" className="hover:text-secondary">+27 12 345 6789</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-secondary" />
                <a href="mailto:info@sgbenefits.co.za" className="hover:text-secondary">info@sgbenefits.co.za</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-secondary" />
                <span>Pretoria, Gauteng, South Africa</span>
              </li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a href="#" className="rounded-full bg-primary-foreground/10 p-2 transition-colors hover:bg-secondary" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="rounded-full bg-primary-foreground/10 p-2 transition-colors hover:bg-secondary" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="rounded-full bg-primary-foreground/10 p-2 transition-colors hover:bg-secondary" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} SG Benefits Consulting (Pty) Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;