import Razorpay from "razorpay";
import crypto from "crypto";
import Order from "../models/Order.js";
import Cart from "../models/Cart.js";

const getRazorpay = () => new Razorpay({
  key_id:     process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Step 1: Create a Razorpay order
export const createOrder = async (req, res) => {
  try {
    const { amount } = req.body; // amount in INR (e.g. 49999)

    const options = {
      amount:   Math.round(amount * 100), // Razorpay needs paise (1 INR = 100 paise)
      currency: "INR",
      receipt:  `receipt_${Date.now()}`,
    };

    const order = await getRazorpay().orders.create(options);
    res.json({ success: true, order });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to create order", error });
  }
};

// Step 2: Verify payment signature & save order
export const verifyPayment = async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      userId,
      address,
    } = req.body;

    // Verify signature using HMAC SHA256
    const body      = razorpay_order_id + "|" + razorpay_payment_id;
    const expected  = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest("hex");

    if (expected !== razorpay_signature) {
      return res.status(400).json({ success: false, message: "Payment verification failed" });
    }

    // Fetch cart to build order items
    const cart = await Cart.findOne({ userId }).populate("items.productId");
    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ success: false, message: "Cart is empty" });
    }

    const totalAmount = cart.items.reduce(
      (sum, item) => sum + item.productId.price * item.quantity,
      0
    );

    // Save order to DB
    const order = await Order.create({
      userId,
      items: cart.items.map((item) => ({
        productId: item.productId._id,
        quantity:  item.quantity,
        price:     item.productId.price,
      })),
      address,
      totalAmount,
      paymentMethod: "Razorpay",
      paymentId:     razorpay_payment_id,
      status:        "Paid",
    });

    // Clear cart after successful payment
    cart.items = [];
    await cart.save();

    res.json({ success: true, orderId: order._id });
  } catch (error) {
    res.status(500).json({ success: false, message: "Verification error", error });
  }
};
