import React from "react";
import { useNavigate } from "react-router-dom";
import "./shop.css";
import img1 from "../../assets/hero1.jpg";

// ✅ keep only this
const categories = [
  { name: "Hand Tools", img: img1 },
  { name: "Industrial Plumbing", img: "/assets/plumbing.jpg" },
  { name: "Power Tools", img: "/assets/power-tools.jpg" },
  { name: "Colour Spray", img: "/assets/spray.jpg" },
];

export default function ShopCategory() {
  const navigate = useNavigate();

  return (
    <div className="shop-category">
      <h2>Shop Now</h2>

      <div className="category-grid">
        {categories.map((item, index) => (
          <div
            className="category-card"
            key={index}
            onClick={() =>
              navigate(
                `/products/${item.name
                  .toLowerCase()
                  .replace(/ /g, "-")}`
              )
            }
          >
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
            <div className="arrow">➜</div>
          </div>
        ))}
      </div>
    </div>
  );
}