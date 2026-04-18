import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import ShopCategory from "./components/Shop/Shop";
// import Home from "./Page/Home/Home";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Catalog from "./Page/Catalog/Catalog";
import Footer from "./components/Footer/Footer";

// ✅ Clean imports
import Products from "./Page/product/product";
import Product from "./Page/Product/product";
import Cart from "./Page/Cart/cart";
import KnowUs from "./Page/KnowUs/KnowUs";

// 🏠 Home
const Home = () => (
  <>
    <Hero />
    <ShopCategory />
    <Testimonials />
    <Contact /> {/* Contact section on home page */}
  </>
);

// 🛒 Load cart
const getCart = () => {
  try {
    return JSON.parse(localStorage.getItem("cart")) || [];
  } catch {
    return [];
  }
};

export default function App() {
  const [cart, setCart] = useState(getCart);

  // 💾 Save cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // 🛒 Add to cart
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

        {/* ✅ KNOW US (FIXED) */}
        <Route path="/about" element={<KnowUs />} />

        {/* Contact */}
        <Route
          path="/contact"
          element={<Contact/>}
        />

        {/* Products */}
        <Route
          path="/products"
          element={<Products cart={cart} addToCart={addToCart} />}
        />
         {/* contact us */}

         {/* <Route path="/contact" element={<Contact />} /> */}

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
        <Route
          path="/catalog"
          element={<Catalog />}
        />

       

        {/* 404 */}
        <Route
          path="*"
          element={<h2 style={{ padding: "100px" }}>404 - Page Not Found</h2>}
        />


      </Routes>
 <Footer/>
    </BrowserRouter>
  );
}