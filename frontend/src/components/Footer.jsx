import { Link, useNavigate } from "react-router";
import { MapPin, Phone, Mail } from "lucide-react";

const quickLinks = [
  { label: "Home",         to: "/",   hash: null },
  { label: "Products",     to: "/",   hash: "all-products" },
  { label: "Best Sellers", to: "/",   hash: "best-sellers" },
];

const supportLinks = [
  { label: "Returns & Cancellation", to: "/return-policy" },
  { label: "Terms & Conditions",     to: "/terms" },
  { label: "Privacy Policy",         to: "/privacy-policy" },
  { label: "Contact Us",             to: null },
];

export default function Footer() {
  const navigate = useNavigate();

  const scrollTo = (hash) => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-dark-blue text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand column */}
          <div>
            <p className="text-2xl font-extrabold tracking-tight mb-3">
              Tech<span className="text-accent">Nova</span>
            </p>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Your one-stop shop for premium electronics. Quality gadgets, unbeatable prices, and fast delivery — every time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/60 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map(({ label, hash }) => (
                <li key={label}>
                  <button
                    onClick={() => hash ? scrollTo(hash) : navigate("/")}
                    className="text-white/80 text-sm hover:text-white transition text-left"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/60 mb-4">
              Support
            </h4>
            <ul className="space-y-2">
              {supportLinks.map(({ label, to }) => (
                <li key={label}>
                  {to ? (
                    <Link to={to} className="text-white/80 text-sm hover:text-white transition">
                      {label}
                    </Link>
                  ) : (
                    <a href="mailto:support@technova.com" className="text-white/80 text-sm hover:text-white transition">
                      {label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div id="contact">
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/60 mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-accent mt-0.5 shrink-0" />
                <span className="text-white/80 text-sm leading-relaxed">
                  123 Street, Bangalore
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-accent shrink-0" />
                <a href="tel:+913456789563" className="text-white/80 text-sm hover:text-white transition">
                  (+91) 3456789563
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-accent shrink-0" />
                <a href="mailto:support@technova.com" className="text-white/80 text-sm hover:text-white transition">
                  support@technova.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-xs">
            &copy; {new Date().getFullYear()} TechNova. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
