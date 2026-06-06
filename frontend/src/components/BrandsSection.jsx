const brands = [
  { name: "Apple",   color: "from-gray-700 to-gray-900" },
  { name: "Samsung", color: "from-blue-600 to-blue-800" },
  { name: "Sony",    color: "from-slate-600 to-slate-800" },
  { name: "Dell",    color: "from-sky-600 to-sky-800" },
  { name: "LG",      color: "from-red-500 to-red-700" },
  { name: "OnePlus", color: "from-red-600 to-rose-800" },
  { name: "Bose",    color: "from-neutral-600 to-neutral-800" },
  { name: "Lenovo",  color: "from-orange-500 to-orange-700" },
];

export default function BrandsSection() {
  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-r from-[#0D47A1] via-[#1565C0] to-[#42A5F5]">
      {/* Decorative blurred circles */}
      <div className="absolute -top-10 -left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-10">
          <p className="text-accent text-xs font-bold uppercase tracking-widest mb-2">
            Authorized Retailers
          </p>
          <h2 className="text-3xl font-extrabold text-white mb-3">
            Top Brands We Carry
          </h2>
          <div className="flex justify-center gap-1">
            <span className="w-8 h-1 bg-accent rounded-full" />
            <span className="w-3 h-1 bg-white/40 rounded-full" />
            <span className="w-2 h-1 bg-white/20 rounded-full" />
          </div>
        </div>

        {/* Brand cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
          {brands.map(({ name, color }) => (
            <div
              key={name}
              className="group flex flex-col items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-5 cursor-pointer hover:bg-white hover:border-white hover:shadow-xl hover:shadow-black/20 hover:-translate-y-1 transition-all duration-200"
            >
              {/* Monogram circle */}
              <div
                className={`w-12 h-12 rounded-full bg-gradient-to-br ${color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-200`}
              >
                <span className="text-white text-sm font-extrabold tracking-tight">
                  {name.slice(0, 2).toUpperCase()}
                </span>
              </div>
              {/* Brand name */}
              <span className="text-xs font-semibold text-white group-hover:text-primary transition-colors duration-200 text-center">
                {name}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom tagline */}
        <p className="text-center text-white/40 text-xs mt-10 tracking-wide">
          100% genuine products · Official warranty included
        </p>
      </div>
    </section>
  );
}
