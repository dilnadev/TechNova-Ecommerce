import { Link, useNavigate } from "react-router";
import { MapPin, Phone, Mail, ShoppingBag, ChevronRight } from "lucide-react";

const quickLinks = [
  { label: "Home",         hash: null },
  { label: "Products",     hash: "all-products" },
  { label: "Best Sellers", hash: "best-sellers" },
];

const supportLinks = [
  { label: "Returns & Cancellation", to: "/return-policy" },
  { label: "Terms & Conditions",     to: "/terms" },
  { label: "Privacy Policy",         to: "/privacy-policy" },
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
    <footer className="bg-dark-blue text-white" id="contact">

      {/* Top strip — brand + tagline */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-primary p-2 rounded-xl">
              <ShoppingBag size={22} className="text-white" />
            </div>
            <span className="text-3xl font-extrabold tracking-tight">
              Tech<span className="text-accent">Nova</span>
            </span>
          </div>
          {/* Tagline */}
          <p className="text-white/60 text-sm text-center md:text-right max-w-sm">
            Your one-stop shop for premium electronics — quality gadgets, unbeatable prices, fast delivery.
          </p>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-5 text-center md:text-left">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="bg-white/10 p-2 rounded-lg shrink-0">
                  <MapPin size={14} className="text-accent" />
                </div>
                <span className="text-white/75 text-sm leading-relaxed">
                  123 Street, Bangalore
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-white/10 p-2 rounded-lg shrink-0">
                  <Phone size={14} className="text-accent" />
                </div>
                <a href="tel:+913456789563" className="text-white/75 text-sm hover:text-white transition">
                  (+91) 3456789563
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-white/10 p-2 rounded-lg shrink-0">
                  <Mail size={14} className="text-accent" />
                </div>
                <a href="mailto:support@technova.com" className="text-white/75 text-sm hover:text-white transition break-all">
                  support@technova.com
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-5 text-center md:text-left">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map(({ label, hash }) => (
                <li key={label}>
                  <button
                    onClick={() => hash ? scrollTo(hash) : navigate("/")}
                    className="flex items-center gap-2 text-white/75 text-sm hover:text-white hover:gap-3 transition-all cursor-pointer group"
                  >
                    <ChevronRight size={14} className="text-accent" />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-5 text-center md:text-left">
              Support
            </h4>
            <ul className="space-y-3">
              {supportLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="flex items-center gap-2 text-white/75 text-sm hover:text-white hover:gap-3 transition-all"
                  >
                    <ChevronRight size={14} className="text-accent" />
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="mailto:support@technova.com"
                  className="flex items-center gap-2 text-white/75 text-sm hover:text-white hover:gap-3 transition-all"
                >
                  <ChevronRight size={14} className="text-accent" />
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="hidden md:block">
            <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-5 text-center md:text-left">
              Business Hours
            </h4>
            <ul className="space-y-2 text-sm text-white/75">
              <li className="flex justify-between gap-4">
                <span>Mon – Fri</span>
                <span className="text-white font-medium">9:00 AM – 6:00 PM</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Saturday</span>
                <span className="text-white font-medium">10:00 AM – 4:00 PM</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Sunday</span>
                <span className="text-red-400 font-medium">Closed</span>
              </li>
            </ul>

            <div className="mt-6 bg-white/10 rounded-xl p-4 border border-white/10">
              <p className="text-xs text-white/60 mb-1">Need help?</p>
              <p className="text-sm font-semibold text-white">We're here for you</p>
              <a
                href="mailto:support@technova.com"
                className="mt-2 inline-block bg-accent text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-primary transition"
              >
                Email Support
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} TechNova. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/terms" className="text-white/40 text-xs hover:text-white/70 transition">Terms</Link>
            <span className="text-white/20">•</span>
            <Link to="/privacy-policy" className="text-white/40 text-xs hover:text-white/70 transition">Privacy</Link>
            <span className="text-white/20">•</span>
            <Link to="/return-policy" className="text-white/40 text-xs hover:text-white/70 transition">Returns</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
