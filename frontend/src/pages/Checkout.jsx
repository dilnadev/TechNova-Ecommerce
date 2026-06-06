import { useState, useEffect } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router";

export default function Checkout() {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  const [addresses, setAddresses]       = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [cart, setCart]                 = useState(null);
  const [loading, setLoading]           = useState(false);

  useEffect(() => {
    if (!userId) return;
    api.get(`/cart/${userId}`).then((res) => setCart(res.data));
    api.get(`/address/${userId}`).then((res) => {
      setAddresses(res.data);
      setSelectedAddress(res.data[0]);
    });
  }, []);

  if (!cart) return <div className="p-6 text-center text-gray-500">Loading...</div>;

  const total = cart.items.reduce(
    (sum, item) => sum + item.productId.price * item.quantity,
    0
  );

  // COD order (existing flow)
  const placeCODOrder = async () => {
    if (!selectedAddress) { alert("Please select an address"); return; }
    setLoading(true);
    try {
      const res = await api.post("/order/place", { userId, address: selectedAddress });
      navigate(`/order-success/${res.data.orderId}`);
    } catch {
      alert("Failed to place order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Razorpay payment flow
  const payWithRazorpay = async () => {
    if (!selectedAddress) { alert("Please select an address"); return; }
    setLoading(true);

    try {
      // Step 1: Create Razorpay order on backend
      const { data } = await api.post("/payment/create-order", { amount: total });

      if (!data.success) { alert("Could not initiate payment. Try again."); return; }

      // Step 2: Open Razorpay popup
      const options = {
        key:         import.meta.env.VITE_RAZORPAY_KEY_ID || "rzp_test_YOUR_KEY_ID",
        amount:      data.order.amount,
        currency:    "INR",
        name:        "TechNova",
        description: "Electronics Purchase",
        order_id:    data.order.id,
        handler: async (response) => {
          // Step 3: Verify payment on backend
          try {
            const verify = await api.post("/payment/verify", {
              razorpay_order_id:   response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature:  response.razorpay_signature,
              userId,
              address: selectedAddress,
            });

            if (verify.data.success) {
              navigate(`/order-success/${verify.data.orderId}`);
            } else {
              alert("Payment verification failed. Contact support.");
            }
          } catch {
            alert("Verification error. Please contact support.");
          }
        },
        prefill: {
          name:    selectedAddress.fullName,
          contact: selectedAddress.phone,
        },
        theme: { color: "#1565C0" },
        modal: {
          ondismiss: () => { setLoading(false); },
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch {
      alert("Payment failed. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-2xl font-extrabold text-gray-800 mb-8">Checkout</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Left: Address + Items */}
          <div className="md:col-span-2 space-y-6">

            {/* Delivery Address */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="font-bold text-gray-800 mb-4">Delivery Address</h2>
              <div className="space-y-3">
                {addresses.map((addr) => (
                  <label
                    key={addr._id}
                    className={`flex items-start gap-3 border rounded-xl p-4 cursor-pointer transition ${
                      selectedAddress?._id === addr._id
                        ? "border-primary bg-light-fill"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="address"
                      checked={selectedAddress?._id === addr._id}
                      onChange={() => setSelectedAddress(addr)}
                      className="mt-1 accent-primary"
                    />
                    <div>
                      <p className="font-semibold text-gray-800">{addr.fullName}</p>
                      <p className="text-sm text-gray-500 mt-0.5">
                        {addr.addressLine}, {addr.city}, {addr.state} — {addr.pincode}
                      </p>
                      <p className="text-sm text-gray-500">📞 {addr.phone}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Order Items */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="font-bold text-gray-800 mb-4">Order Items</h2>
              <div className="space-y-3">
                {cart.items.map((item) => (
                  <div key={item.productId._id} className="flex items-center gap-4">
                    <img
                      src={item.productId.image}
                      alt={item.productId.title}
                      className="w-14 h-14 object-contain bg-gray-50 rounded-lg"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-800 line-clamp-1">
                        {item.productId.title}
                      </p>
                      <p className="text-xs text-gray-400">Qty: {item.quantity}</p>
                    </div>
                    <p className="text-sm font-bold text-primary">
                      ₹{(item.productId.price * item.quantity).toLocaleString("en-IN")}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Order Summary */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="font-bold text-gray-800 mb-4">Order Summary</h2>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{total.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
                <div className="border-t pt-2 flex justify-between font-extrabold text-gray-800 text-base">
                  <span>Total</span>
                  <span>₹{total.toLocaleString("en-IN")}</span>
                </div>
              </div>
            </div>

            {/* Pay with Razorpay */}
            <button
              onClick={payWithRazorpay}
              disabled={loading}
              className="w-full bg-primary text-white font-bold py-3 rounded-xl hover:bg-dark-blue transition disabled:opacity-60"
            >
              {loading ? "Processing..." : "Pay with Razorpay"}
            </button>

            {/* COD */}
            <button
              onClick={placeCODOrder}
              disabled={loading}
              className="w-full border-2 border-gray-300 text-gray-700 font-semibold py-3 rounded-xl hover:border-primary hover:text-primary transition disabled:opacity-60"
            >
              Cash on Delivery
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
