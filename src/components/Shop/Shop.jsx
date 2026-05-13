import React from "react";
import { useNavigate } from "react-router-dom";
import "./Shop.css";
import img1 from "../../assets/Product/img1.jpg";
import img2 from "../../assets/Product/img2.jpg";
import img3 from "../../assets/Product/img3.jpg";
import img4 from "../../assets/Product/img25.jpg";
import img5 from "../../assets/Product/img5.jpg";
import img6 from "../../assets/Product/img6.jpg";


// ✅ keep only this
const categories = [
  { name: "Machine Component", img: img1 },
  { name: "Belt", img: img2 },
  { name: "Bearing", img: img3 },
  { name: "Gear", img: img4 },
  { name: "Sive", img: img5 },
  { name: "Hand Tools", img: img6 },
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