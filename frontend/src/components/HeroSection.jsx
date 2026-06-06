import { useNavigate } from "react-router";

const HERO_IMAGE = "https://images.unsplash.com/photo-1644171703660-81c9da68402b?w=800&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fDNkJTIwbGFwdG9wfGVufDB8fDB8fHww";

export default function HeroSection() {
  const navigate = useNavigate();

  const handleShopNow = () => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById("all-products")?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById("all-products")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden min-h-[480px] md:min-h-[560px] flex items-center" id="hero">

      {/* ── Mobile: full background image with blue overlay ── */}
      <div className="absolute inset-0 md:hidden">
        <img
          src={HERO_IMAGE}
          alt="Hero background"
          className="w-full h-full object-cover object-center"
        />
        {/* strong blue gradient overlay so text is readable */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(13,71,161,0.88) 0%, rgba(21,101,192,0.80) 60%, rgba(30,136,229,0.60) 100%)" }}
        />
      </div>

      {/* ── Desktop: gradient background ── */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1565C0 40%, #1E88E5 70%, #42A5F5 100%)" }}
      />

      {/* Decorative circles — desktop only */}
      <div className="hidden md:block absolute top-0 right-0 w-[500px] h-[500px] bg-white/20 rounded-full translate-x-1/3 -translate-y-1/4 border border-white/30" />
      <div className="hidden md:block absolute bottom-0 right-32 w-[320px] h-[320px] bg-white/10 rounded-full translate-y-1/3 border border-white/20" />
      <div className="hidden md:block absolute top-10 left-10 w-[100px] h-[100px] border-2 border-accent/60 rounded-full" />
      <div className="hidden md:block absolute bottom-10 left-1/3 w-[60px] h-[60px] bg-accent/30 rounded-full" />

      {/* Dot grids */}
      <div
        className="absolute bottom-8 left-8 w-52 h-52 opacity-40"
        style={{ backgroundImage: "radial-gradient(circle, white 1.5px, transparent 1.5px)", backgroundSize: "12px 12px" }}
      />
      <div
        className="absolute top-6 right-6 w-36 h-36 opacity-20"
        style={{ backgroundImage: "radial-gradient(circle, white 1.5px, transparent 1.5px)", backgroundSize: "12px 12px" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-16 md:py-0 w-full flex flex-col md:flex-row items-center gap-8">

        {/* Text */}
        <div className="w-full md:w-1/2 text-white text-center md:text-left">
          <p className="text-white text-sm font-bold uppercase tracking-widest mb-4 animate-drop-1">
            ✦ New Arrivals 2026
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-none uppercase tracking-tight mb-5 animate-drop-2">
            THE BEST<br />
            <span className="text-white/80">TECH</span> <span className="text-accent">DEALS</span>
          </h1>
          <p className="text-white/80 text-lg italic mb-10 max-w-sm mx-auto md:mx-0 animate-drop-3">
            Premium gadgets at unbeatable prices — delivered fast to your door.
          </p>
          <button
            onClick={handleShopNow}
            className="inline-block bg-white text-primary font-extrabold text-sm uppercase tracking-widest px-10 py-4 rounded-full hover:bg-gray-100 transition-all shadow-xl animate-drop-4 cursor-pointer"
          >
            Shop Now
          </button>
        </div>

        {/* Desktop only: floating laptop image */}
        <div className="w-1/2 hidden md:flex items-center justify-center self-stretch">
          <img
            src={HERO_IMAGE}
            alt="Tech illustration"
            className="w-full h-full object-contain"
            style={{ mixBlendMode: "multiply", filter: "brightness(1.15) contrast(1.1) saturate(1.1)" }}
          />
        </div>
      </div>
    </section>
  );
}
