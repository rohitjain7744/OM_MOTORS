import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import ShopCategory from "./components/Shop/Shop";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

// Pages
import Catalog from "./Page/Catalog/Catalog";
import Products from "./Page/product/product";
import Product from "./Page/Product/product";
import Cart from "./Page/Cart/cart";
import KnowUs from "./Page/KnowUs/KnowUs";

// 🏠 Home Page
const Home = () => (
  <>
    <Hero />
    <ShopCategory />
    <Testimonials />
    <Contact />
  </>
);

// 🛒 Load cart safely
const getCart = () => {
  try {
    return JSON.parse(localStorage.getItem("cart")) || [];
  } catch {
    return [];
  }
};

export default function App() {
  const [cart, setCart] = useState(() => getCart());

  // 💾 Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // 🛒 Add to cart handler
  const addToCart = useCallback((updateFn) => {
    setCart((prev) => updateFn(prev));
  }, []);

  // 🔢 Cart count
  const cartCount = cart.reduce(
    (sum, item) => sum + (item.qty || 1),
    0
  );

  return (
    <BrowserRouter>

      {/* Navbar */}
      <Navbar cartCount={cartCount} />

      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* About */}
        <Route path="/about" element={<KnowUs />} />

        {/* Contact Page */}
        <Route path="/contact" element={<Contact />} />

        {/* Products */}
        <Route
          path="/products"
          element={<Products cart={cart} addToCart={addToCart} />}
        />

        <Route
          path="/products/:category"
          element={<Products cart={cart} addToCart={addToCart} />}
        />

        {/* Product Detail */}
        <Route
          path="/product/:id"
          element={<Product addToCart={addToCart} />}
        />

        {/* Cart */}
        <Route
          path="/cart"
          element={<Cart cart={cart} setCart={setCart} />}
        />

        {/* Catalog */}
        <Route path="/catalog" element={<Catalog />} />

        {/* 404 */}
        <Route
          path="*"
          element={
            <h2 style={{ padding: "100px" }}>
              404 - Page Not Found
            </h2>
          }
        />

      </Routes>

      {/* Footer */}
      <Footer />

    </BrowserRouter>
  );
}