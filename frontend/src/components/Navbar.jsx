import { Link, useNavigate } from "react-router";
import { useState, useEffect, useRef } from "react";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import api from "../api/axios";

export default function Navbar() {
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef(null);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const loadCart = async () => {
      if (!userId) return setCartCount(0);
      const res = await api.get(`/cart/${userId}`);
      const total = res.data.items.reduce((sum, item) => sum + item.quantity, 0);
      setCartCount(total);
    };
    loadCart();
    window.addEventListener("cartUpdated", loadCart);
    return () => window.removeEventListener("cartUpdated", loadCart);
  }, [userId]);

  // Focus input when search bar opens
  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus();
  }, [searchOpen]);

  const logout = () => {
    localStorage.clear();
    setCartCount(0);
    navigate("/login");
  };

  const scrollTo = (to, hash) => {
    if (hash) {
      if (window.location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
        }, 300);
      } else {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      if (window.location.pathname !== "/") {
        navigate(to);
        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const q = searchQuery.trim();
    if (!q) return;
    // Navigate home with search param, then scroll to products
    if (window.location.pathname !== "/") {
      navigate(`/?search=${encodeURIComponent(q)}`);
      setTimeout(() => {
        document.getElementById("all-products")?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      navigate(`/?search=${encodeURIComponent(q)}`);
      setTimeout(() => {
        document.getElementById("all-products")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
    setSearchOpen(false);
    setSearchQuery("");
  };

  const navLinks = [
    { label: "Home",         to: "/", hash: null },
    { label: "Products",     to: "/", hash: "all-products" },
    { label: "Best Sellers", to: "/", hash: "best-sellers" },
    { label: "Contact",      to: "/", hash: "contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-primary text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold tracking-tight text-white shrink-0">
          Tech<span className="text-accent">Nova</span>
        </Link>

        {/* Center nav links — desktop only (hidden when search open) */}
        {!searchOpen && (
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.to, link.hash)}
                className="text-sm font-medium text-white/90 hover:text-white transition cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}

        {/* Expanding search bar — desktop */}
        {searchOpen && (
          <form
            onSubmit={handleSearch}
            className="hidden md:flex flex-1 mx-8 items-center bg-white/15 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1.5 gap-2"
          >
            <Search size={16} className="text-white/70 shrink-0" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="flex-1 bg-transparent text-white placeholder-white/60 text-sm outline-none"
            />
            <button
              type="button"
              onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
              className="text-white/70 hover:text-white transition"
            >
              <X size={16} />
            </button>
          </form>
        )}

        {/* Right icons */}
        <div className="flex items-center gap-4">
          {/* Search toggle */}
          <button
            aria-label="Search"
            onClick={() => setSearchOpen((v) => !v)}
            className="hidden md:flex text-white/90 hover:text-white transition cursor-pointer"
          >
            <Search size={20} />
          </button>

          {/* Cart */}
          <Link to="/cart" className="relative text-white/90 hover:text-white transition">
            <ShoppingCart size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          {/* User */}
          {!userId ? (
            <Link
              to="/login"
              className="hidden md:flex items-center gap-1 text-white/90 hover:text-white transition text-sm font-medium"
            >
              <User size={20} />
              <span>Login</span>
            </Link>
          ) : (
            <button
              onClick={logout}
              className="hidden md:flex items-center gap-1 text-white/90 hover:text-white transition text-sm font-medium cursor-pointer"
            >
              <User size={20} />
              <span>Logout</span>
            </button>
          )}

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden text-white/90 hover:text-white transition cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileOpen && (
        <div className="md:hidden bg-primary border-t border-white/10 px-4 pb-4">
          <div className="flex flex-col gap-3 pt-3">

            {/* Mobile search bar */}
            <form onSubmit={handleSearch} className="flex items-center bg-white/15 border border-white/30 rounded-full px-4 py-2 gap-2">
              <Search size={15} className="text-white/70 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="flex-1 bg-transparent text-white placeholder-white/60 text-sm outline-none"
              />
              {searchQuery && (
                <button type="button" onClick={() => setSearchQuery("")} className="text-white/70 hover:text-white">
                  <X size={14} />
                </button>
              )}
            </form>

            <hr className="border-white/10" />

            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => { setMobileOpen(false); scrollTo(link.to, link.hash); }}
                className="text-sm font-medium text-white/90 hover:text-white transition text-left cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <hr className="border-white/10" />
            {!userId ? (
              <Link
                to="/login"
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-white/90 hover:text-white transition cursor-pointer"
              >
                Login / Sign Up
              </Link>
            ) : (
              <button
                onClick={() => { setMobileOpen(false); logout(); }}
                className="text-left text-sm font-medium text-white/90 hover:text-white transition cursor-pointer"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
