import { useNavigate } from "react-router";

const categories = [
  {
    label: "Phones",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vYmlsZSUyMHBob25lfGVufDB8fDB8fHww",
  },
  {
    label: "Laptops",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8M2QlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D",
  },
  {
    label: "TVs",
    image: "https://img.freepik.com/premium-photo/wide-screen-led-smart-tv-clipping-path-white-background_1139585-20519.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    label: "Tablets",
    image: "https://images.unsplash.com/photo-1604399852419-f67ee7d5f2ef?w=600&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHRhYmxldHxlbnwwfHwwfHx8MA%3D%3D",
  },
];

export default function CategorySection() {
  const navigate = useNavigate();

  return (
    <section className="bg-gray-50 py-14">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-2xl font-extrabold text-gray-800 uppercase tracking-wide">
            Categories
          </h2>
          <div className="flex-1 border-t border-dashed border-gray-300" />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map(({ label, image }) => (
            <button
              key={label}
              onClick={() => navigate(`/?category=${label}`, { replace: false })}
              className="group flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-3 hover:bg-primary hover:border-primary hover:shadow-lg transition-all duration-300 text-left focus:outline-none"
            >
              {/* Image */}
              <div className="w-20 h-20 shrink-0 flex items-center justify-center overflow-hidden rounded-lg bg-gray-50">
                <img
                  src={image}
                  alt={label}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="font-bold text-gray-800 text-sm group-hover:text-white transition-colors duration-300">
                  {label}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
