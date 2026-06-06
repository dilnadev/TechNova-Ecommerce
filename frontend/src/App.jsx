import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProductDetails from "./pages/ProductDetails";
import AddProduct from "./admin/AddProduct";
import EditProduct from "./admin/EditProduct";
import ProductList from "./admin/ProductList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AdminGuard from "./components/AdminGuard";
import TermsAndConditions from "./pages/TermsAndConditions";
import ReturnCancellation from "./pages/ReturnCancellation";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Cart from "./pages/Cart";
import CheckoutAddress from "./pages/CheckoutAddress";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";


function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/product/:id", element: <ProductDetails /> },
      { path : "/cart", element: <Cart />},

      {
        element: <AdminGuard />,
        children: [
          { path: "/admin/products", element: <ProductList /> },
          { path: "/admin/products/add", element: <AddProduct /> },
          { path: "/admin/products/edit/:id", element: <EditProduct /> },
        ],
      },
      { path: "/checkout-address", element: <CheckoutAddress /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/order-success/:id", element:<OrderSuccess /> },
      { path: "/terms", element: <TermsAndConditions /> },
      { path: "/return-policy", element: <ReturnCancellation /> },
      { path: "/privacy-policy", element: <PrivacyPolicy /> },
     
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}