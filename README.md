<div align="center">

# ⚡ TechNova
### *Premium Electronics E-Commerce Platform*

> A full-stack e-commerce web application built for electronics gadgets — featuring secure authentication, real-time cart management, Razorpay payment integration, and a fully functional admin panel.

<br/>

[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-24.x-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-5.x-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.x-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

<br/>



</div>

---

## 📋 Table of Contents

- [About the Project](#-about-the-project)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [System Architecture](#-system-architecture)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [API Endpoints](#-api-endpoints)
- [Folder Structure](#-folder-structure)
- [Key Learnings](#-key-learnings)
- [Future Improvements](#-future-improvements)
- [Contributing](#-contributing)
- [Author](#-author)

---

## 🚀 About the Project

**TechNova** is a modern, full-stack e-commerce platform built for electronics gadgets. It solves the challenge of building a production-ready online store with end-to-end features — from product browsing and cart management to secure payments and admin control.

The platform follows a clean REST API architecture, with a React frontend communicating with a Node.js + Express backend, backed by MongoDB for persistent data storage. Role-based access control separates admin functionality from regular user flows, and Razorpay integration enables seamless online payments.



---

## ✨ Features

### 👤 User Features
- 🔐 **Secure Authentication** — JWT-based signup/login with bcrypt password hashing
- 🔍 **Product Search & Filter** — Real-time search by keyword and category
- 🛒 **Cart Management** — Add, remove, and update item quantities
- 📦 **Order Placement** — COD and Razorpay online payment options
- 📋 **Delivery Address** — Save and select multiple delivery addresses
- 📄 **Policy Pages** — Terms & Conditions, Privacy Policy, Return & Cancellation

### 🛠️ Admin Features
- 🔑 **Role-Based Access** — Admin-only routes protected by role guard
- ➕ **Product Management** — Add, edit, and delete products (CRUD)
- 🗂️ **Category Management** — Organize products by category
- 📊 **Product Listing** — View all products with price, stock, and actions

### ⚙️ Technical Features
- 🏗️ **REST API** — Clean, resource-based API design
- 💳 **Razorpay Integration** — Secure payment with signature verification
- 📱 **Fully Responsive** — Mobile-first design using Tailwind CSS v4
- 🎨 **Custom Theme** — White & Blue brand palette with Inter font
- 🔄 **Real-time Cart Sync** — Cross-component cart updates via custom events
- 🌐 **URL-synced Filters** — Category and search params reflected in URL
- 🔒 **Protected Routes** — Admin pages redirect unauthenticated users

---

## 🧰 Tech Stack

| Technology | Purpose | Version |
|---|---|---|
| **React.js** | Frontend UI library | 19.x |
| **React Router** | Client-side routing | 7.x |
| **Axios** | HTTP client for API calls | 1.x |
| **Tailwind CSS** | Utility-first CSS framework | 4.x |
| **Lucide React** | SVG icon library | Latest |
| **Vite** | Frontend build tool | 8.x |
| **Node.js** | JavaScript runtime | 24.x |
| **Express.js** | Backend web framework | 5.x |
| **MongoDB** | NoSQL database | 7.x |
| **Mongoose** | MongoDB ODM | 9.x |
| **JSON Web Token** | Authentication tokens | 9.x |
| **bcrypt** | Password hashing | 6.x |
| **Razorpay** | Payment gateway | Latest |
| **dotenv** | Environment variable management | 17.x |
| **VS Code** | Code editor | — |
| **Postman** | API testing | — |
| **Git & GitHub** | Version control | — |

---

## 🏛️ System Architecture

TechNova follows a **REST API / MVC architecture** with a clear separation of concerns between the client, server, and database layers.

```
┌─────────────────────────────────────────────────────────────┐
│                        CLIENT LAYER                         │
│                                                             │
│   React.js  ──  React Router  ──  Axios  ──  Tailwind CSS  │
│        │                              │                     │
│        └──────────── HTTP/HTTPS ──────┘                     │
└──────────────────────────┬──────────────────────────────────┘
                           │  REST API (JSON)
┌──────────────────────────▼──────────────────────────────────┐
│                       SERVER LAYER                          │
│                                                             │
│   Express.js Router                                         │
│        ├── /api/auth       (authController)                 │
│        ├── /api/products   (productController)              │
│        ├── /api/cart       (cartController)                 │
│        ├── /api/order      (orderController)                │
│        ├── /api/address    (addressController)              │
│        └── /api/payment    (paymentController + Razorpay)   │
│                                                             │
│   Middleware: JWT Auth  ──  CORS  ──  express.json()        │
└──────────────────────────┬──────────────────────────────────┘
                           │  Mongoose ODM
┌──────────────────────────▼──────────────────────────────────┐
│                      DATABASE LAYER                         │
│                                                             │
│   MongoDB                                                   │
│        ├── users      (name, email, password, role)         │
│        ├── products   (title, price, category, image, stock)│
│        ├── carts      (userId, items[])                     │
│        ├── orders     (userId, items[], address, payment)   │
│        └── addresses  (userId, fullName, phone, city...)    │
└─────────────────────────────────────────────────────────────┘
```

---

## 🏁 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- [MongoDB](https://mongodb.com/) (local) or [MongoDB Atlas](https://cloud.mongodb.com/) (cloud)
- npm v9 or higher
- A [Razorpay](https://razorpay.com/) account (for payment features)

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/dilnadev/TechNova-Ecommerce.git
cd TechNova-Ecommerce
```

**2. Install backend dependencies**
```bash
cd backend
npm install
```

**3. Install frontend dependencies**
```bash
cd ../frontend
npm install
```

**4. Configure environment variables**

Create `backend/.env`:
```env
MONGO_URL=mongodb://localhost:27017/ecom-project
JWT_SECRET=your_jwt_secret_key_here
RAZORPAY_KEY_ID=rzp_test_your_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret
```

Create `frontend/.env`:
```env
VITE_RAZORPAY_KEY_ID=rzp_test_your_key_id
```

**5. Start the backend server**
```bash
cd backend
node server.js
# Server runs on http://localhost:5001
```

**6. Start the frontend dev server**
```bash
cd frontend
npm run dev
# App runs on http://localhost:5173
```

---

## 🔑 Environment Variables

### Backend (`backend/.env`)

| Variable | Description | Example |
|---|---|---|
| `MONGO_URL` | MongoDB connection string | `mongodb://localhost:27017/ecom-project` |
| `JWT_SECRET` | Secret key for signing JWT tokens | `your_strong_secret_key` |
| `RAZORPAY_KEY_ID` | Razorpay API Key ID | `rzp_test_xxxxxxxxxx` |
| `RAZORPAY_KEY_SECRET` | Razorpay API Secret Key | `xxxxxxxxxxxxxxxxxx` |

### Frontend (`frontend/.env`)

| Variable | Description | Example |
|---|---|---|
| `VITE_RAZORPAY_KEY_ID` | Razorpay public Key ID (for checkout popup) | `rzp_test_xxxxxxxxxx` |

> ⚠️ **Never commit `.env` files to version control.** Both files are listed in `.gitignore`.

---

## 📡 API Endpoints

### Auth
| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/auth/signup` | Register a new user |
| `POST` | `/api/auth/login` | Login and receive JWT token |

### Products
| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/products` | Get all products (supports `?search=` & `?category=`) |
| `POST` | `/api/products/add` | Add a new product (admin) |
| `PUT` | `/api/products/update/:id` | Update a product (admin) |
| `DELETE` | `/api/products/delete/:id` | Delete a product (admin) |

### Cart
| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/cart/:userId` | Get user's cart |
| `POST` | `/api/cart/add` | Add item to cart |
| `POST` | `/api/cart/update` | Update item quantity |
| `POST` | `/api/cart/remove` | Remove item from cart |

### Orders
| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/order/place` | Place a COD order |

### Address
| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/address/:userId` | Get saved addresses |
| `POST` | `/api/address/add` | Save a new address |

### Payment (Razorpay)
| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/payment/create-order` | Create Razorpay order |
| `POST` | `/api/payment/verify` | Verify payment signature & save order |

---

## 📁 Folder Structure

```
TechNova-Ecommerce/
│
├── backend/                        # Node.js + Express server
│   ├── config/
│   │   └── db.js                   # MongoDB connection
│   ├── controllers/
│   │   ├── authController.js       # Signup, Login
│   │   ├── productController.js    # Product CRUD
│   │   ├── cartController.js       # Cart operations
│   │   ├── orderController.js      # Order placement
│   │   ├── addressController.js    # Address management
│   │   └── paymentController.js    # Razorpay integration
│   ├── models/
│   │   ├── User.js
│   │   ├── Product.js
│   │   ├── Cart.js
│   │   ├── Order.js
│   │   └── Address.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── productRoutes.js
│   │   ├── cart.js
│   │   ├── order.js
│   │   ├── address.js
│   │   └── paymentRoutes.js
│   ├── .env                        # ← not committed (gitignored)
│   ├── server.js                   # Entry point
│   └── package.json
│
├── frontend/                       # React + Vite app
│   ├── public/
│   ├── src/
│   │   ├── admin/
│   │   │   ├── AddProduct.jsx
│   │   │   ├── EditProduct.jsx
│   │   │   └── ProductList.jsx
│   │   ├── api/
│   │   │   └── axios.js            # Axios instance with baseURL
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── FeatureStrip.jsx
│   │   │   ├── CategorySection.jsx
│   │   │   ├── FeaturedProducts.jsx
│   │   │   ├── BrandsSection.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── AdminGuard.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   ├── Cart.jsx
│   │   │   ├── Checkout.jsx
│   │   │   ├── CheckoutAddress.jsx
│   │   │   ├── OrderSuccess.jsx
│   │   │   ├── ProductDetails.jsx
│   │   │   ├── TermsAndConditions.jsx
│   │   │   ├── PrivacyPolicy.jsx
│   │   │   └── ReturnCancellation.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── .env                        # ← not committed (gitignored)
│   ├── index.html
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## 🧠 Key Learnings

- **JWT Authentication Flow** — Implemented stateless authentication using JWT tokens stored in `localStorage`, including role-based route protection that distinguishes admin from regular users without server-side sessions.

- **REST API Design** — Designed and structured a clean RESTful API with logical resource grouping, proper HTTP methods, and meaningful status codes — reinforcing how a real production backend is organized.

- **MongoDB Schema Design** — Modelled relational-style data (users → carts → orders → products) using Mongoose references and `populate()`, learning how to handle nested documents and schema validation effectively.

- **React State & Event Architecture** — Managed cross-component state (e.g. cart count in Navbar) without Redux by using `localStorage` and custom browser events (`window.dispatchEvent`), understanding the trade-offs versus a state management library.

- **Payment Gateway Integration** — Integrated Razorpay's two-step payment flow (create order → verify signature using HMAC SHA256), learning how to securely handle payment verification on the backend to prevent client-side tampering.

- **ES Module Gotcha** — Debugged a real-world issue where `import` hoisting caused environment variables to be `undefined` at module load time, requiring lazy initialization of the Razorpay instance inside functions rather than at the module level.

---

## 🔮 Future Improvements

- 🧾 **Admin Dashboard Analytics** — Sales charts, revenue tracking, and order statistics using a charting library
- ❤️ **Wishlist Feature** — Allow users to save products for later with persistent storage
- ⭐ **Product Reviews & Ratings** — User-submitted reviews with star ratings and moderation
- 📱 **PWA Support** — Make TechNova installable as a Progressive Web App with offline capabilities
- 🔔 **Email Notifications** — Order confirmation and shipping update emails via Nodemailer
- 🔎 **Advanced Search** — Fuzzy search, price range filter, and sorting (price, newest, rating)

---

## 🤝 Contributing

Contributions are welcome! Here's how to get involved:

```bash
# 1. Fork the repository
# 2. Create your feature branch
git checkout -b feature/AmazingFeature

# 3. Commit your changes
git commit -m "Add AmazingFeature"

# 4. Push to the branch
git push origin feature/AmazingFeature

# 5. Open a Pull Request
```

Please make sure your code follows the existing style and all features are tested before submitting a PR.

---

## 👨‍💻 Author

<div align="center">

**Developed by [Your Name]**

[![GitHub](https://img.shields.io/badge/GitHub-dilnadev-181717?style=for-the-badge&logo=github)](https://github.com/dilnadev)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/your-linkedin)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-1565C0?style=for-the-badge&logo=google-chrome&logoColor=white)](https://your-portfolio.com)

</div>

---

<div align="center">

⭐ **If you found this project helpful, please give it a star!** ⭐

*Built with ❤️ using React, Node.js, and MongoDB*

</div>
