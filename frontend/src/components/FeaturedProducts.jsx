import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Star, ShoppingCart } from "lucide-react";
import api from "../api/axios";

const BADGES = [
  { label: "Best Seller", className: "bg-amber-50 text-amber-600 border border-amber-200" },
  { label: "New",         className: "bg-green-50 text-green-600 border border-green-200" },
  { label: "Hot Deal",    className: "bg-red-50 text-red-600 border border-red-200" },
  { label: "Editor's Pick", className: "bg-purple-50 text-purple-600 border border-purple-200" },
  { label: "Premium",    className: "bg-sky-50 text-sky-600 border border-sky-200" },
];

function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden animate-pulse">
      <div className="bg-gray-200 h-52 w-full" />
      <div className="p-4 space-y-3">
        <div className="bg-gray-200 h-3 rounded w-1/4" />
        <div className="bg-gray-200 h-4 rounded w-3/4" />
        <div className="bg-gray-200 h-3 rounded w-full" />
        <div className="bg-gray-200 h-3 rounded w-full" />
        <div className="bg-gray-200 h-5 rounded w-1/3" />
        <div className="bg-gray-200 h-9 rounded w-full" />
      </div>
    </div>
  );
}

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/products")
      .then((res) => setProducts(res.data.slice(0, 5)))
      .catch(() => setProducts([]))
      .finally(() => setLoading(false));
  }, []);

  const addToCart = async (productId) => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      alert("Please log in to add items to your cart.");
      return;
    }
    const res = await api.post("/cart/add", { userId, productId });
    const total = res.data.cart.items.reduce(
      (sum, item) => sum + item.productId.price * item.quantity,
      0,
    );
    localStorage.setItem("cartCount", total);
    window.dispatchEvent(new Event("cartUpdated"));
  };

  return (
    <section id="best-sellers" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">
              Hand-picked for you
            </p>
            <h2 className="text-3xl font-extrabold text-gray-800">Featured Products</h2>
          </div>
        </div>

        {/* Loading skeletons */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {[0,1,2,3,4].map((i) => <SkeletonCard key={i} />)}
          </div>
        )}

        {/* Empty state */}
        {!loading && products.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-sm mb-3">No products added yet.</p>
            <Link
              to="/admin/products/add"
              className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-dark-blue transition"
            >
              + Add your first product
            </Link>
          </div>
        )}

        {/* Product grid */}
        {!loading && products.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {products.map((product, idx) => {
              const badge = BADGES[idx % BADGES.length];
              return (
                <div
                  key={product._id}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col group overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative bg-gray-50 h-52 flex items-center justify-center p-4 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-40 w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex flex-col flex-1 p-4 gap-2">
                    <span className="text-[10px] text-primary font-semibold uppercase tracking-wider">
                      {product.category}
                    </span>

                    <Link to={`/product/${product._id}`}>
                      <h3 className="font-bold text-gray-800 text-sm leading-snug line-clamp-2 hover:text-primary transition">
                        {product.title}
                      </h3>
                    </Link>

                    <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 flex-1">
                      {product.description}
                    </p>

                    {/* Rating — static display */}
                    <div className="flex items-center gap-1">
                      {[1,2,3,4,5].map((s) => (
                        <Star key={s} size={12} className="fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <p className="text-primary font-extrabold text-lg">
                      ₹{product.price.toLocaleString("en-IN")}
                    </p>

                    <button
                      onClick={() => addToCart(product._id)}
                      className="mt-1 w-full flex items-center justify-center gap-2 bg-primary text-white text-sm font-semibold py-2.5 rounded-xl hover:bg-dark-blue active:scale-95 transition-all"
                    >
                      <ShoppingCart size={15} />
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
