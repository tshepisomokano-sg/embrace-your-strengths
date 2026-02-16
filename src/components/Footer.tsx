import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="SG Benefits" className="h-10 w-auto" />
              <span className="font-bold text-lg font-sans">SG Benefits Consulting</span>
            </div>
            <p className="text-primary-foreground/70 text-sm font-sans leading-relaxed">
              Helping individuals recover unclaimed pension funds, provident funds, insurance claims, and other savings since 2015.
            </p>
            <p className="text-primary-foreground/50 text-xs font-sans mt-4">
              Reg: 2015/273230/07
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-secondary mb-4 font-sans text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 font-sans text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Our Services" },
                { to: "/faq", label: "FAQ" },
                { to: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-primary-foreground/70 hover:text-secondary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-secondary mb-4 font-sans text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-2 font-sans text-sm text-primary-foreground/70">
              <li>Pension & Provident Funds</li>
              <li>Guardian Fund Claims</li>
              <li>Insurance Claims</li>
              <li>Injury on Duty (IOD)</li>
              <li>Medical Aid Savings</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-secondary mb-4 font-sans text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3 font-sans text-sm">
              <li className="flex items-start gap-2 text-primary-foreground/70">
                <Phone className="h-4 w-4 mt-0.5 text-secondary shrink-0" />
                <span>+27 67 117 7118</span>
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/70">
                <Mail className="h-4 w-4 mt-0.5 text-secondary shrink-0" />
                <span>info@sgbenefits.co.za</span>
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/70">
                <MapPin className="h-4 w-4 mt-0.5 text-secondary shrink-0" />
                <span>Gauteng, South Africa</span>
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/70">
                <Clock className="h-4 w-4 mt-0.5 text-secondary shrink-0" />
                <span>Mon–Fri: 08:00–17:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center">
          <p className="text-primary-foreground/50 text-xs font-sans">
            © {new Date().getFullYear()} SG Benefits Consulting (Pty) Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
