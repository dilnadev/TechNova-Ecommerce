import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router";
import api from "../api/axios";
import HeroSection from "../components/HeroSection";
import FeatureStrip from "../components/FeatureStrip";
import CategorySection from "../components/CategorySection";
import FeaturedProducts from "../components/FeaturedProducts";
import BrandsSection from "../components/BrandsSection";

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [category, setCategory] = useState(searchParams.get("category") || "");

  const loadProducts = async () => {
    const res = await api.get(`/products?search=${search}&category=${category}`);
    setProducts(res.data);
  };

  // Sync search & category state when URL params change
  useEffect(() => {
    const urlCategory = searchParams.get("category") || "";
    const urlSearch = searchParams.get("search") || "";
    setCategory(urlCategory);
    setSearch(urlSearch);
    if (urlCategory || urlSearch) {
      setTimeout(() => {
        document.getElementById("all-products")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [searchParams]);

  useEffect(() => {
    loadProducts();
  }, [search, category]);

  const addToCart = async (productId) => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      alert("Please log in to add items to your cart.");
      return;
    }
    const res = await api.post(`/cart/add`, { userId, productId });
    const total = res.data.cart.items.reduce(
      (sum, item) => sum + item.productId.price * item.quantity,
      0,
    );
    localStorage.setItem("cartCount", total);
    window.dispatchEvent(new Event("cartUpdated"));
  };

  return (
    <div>
      <HeroSection />
      <FeatureStrip />
      <CategorySection />
      <FeaturedProducts />
      <BrandsSection />

      {/* Browse All Products */}
      <section id="all-products" className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-1">
              Our full collection
            </p>
            <h2 className="text-2xl font-bold text-gray-800">Browse All Products</h2>
          </div>

          {/* Search + Filter bar */}
          <div className="mb-6 flex flex-col md:flex-row gap-4 items-center bg-gray-50 p-4 rounded-xl border border-gray-200">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-1/2 border border-gray-300 px-4 py-2 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            />
            <select
              value={category}
              onChange={(e) => {
                const val = e.target.value;
                setCategory(val);
                setSearchParams(val ? { category: val } : {});
              }}
              className="w-full md:w-1/4 border border-gray-300 px-4 py-2 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-primary text-sm text-gray-700"
            >
              <option value="">All Categories</option>
              <option value="Phones">Phones</option>
              <option value="Laptops">Laptops</option>
              <option value="TVs">TVs</option>
              <option value="Tablets">Tablets</option>
            </select>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {products.map((product) => (
              <div
                key={product._id}
                className="bg-white border border-gray-100 rounded-xl p-3 shadow-sm hover:shadow-md transition group"
              >
                <Link to={`/product/${product._id}`}>
                  <div className="bg-gray-50 rounded-lg h-40 flex items-center justify-center overflow-hidden mb-2">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-36 w-full object-contain group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <h2 className="font-semibold text-sm text-gray-800 leading-snug line-clamp-2">
                    {product.title}
                  </h2>
                </Link>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-primary font-bold text-sm">
                    ₹{product.price.toLocaleString("en-IN")}
                  </p>
                  <button
                    onClick={() => addToCart(product._id)}
                    className="bg-primary text-white px-3 py-1 rounded-lg text-xs font-semibold hover:bg-dark-blue transition"
                  >
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>

          {products.length === 0 && (
            <p className="text-center text-gray-400 mt-12 text-sm">
              No products found. Try a different search or category.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
