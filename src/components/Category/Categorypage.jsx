import React, { useState } from 'react';
import './Page.css';
// Imports wahi rahenge jo aapne diye hain
import cutter from "../../assets/vishalcutter.png";
import vishal312 from "../../assets/vishal312.png";
import vishal435 from "../../assets/vishal435.png";
import king from "../../assets/king.png";

const CategoryPage = () => {
  // 1. Static Data with Category Tags
  const allProducts = [
    { id: 1, title: "Vishal 435", category: "Harvester", desc: "Standard Multi-crop Excellence.", img: king },
    { id: 2, title: "Vishal 435 Maize Hydrollic", category: "Maize Special", desc: "Hydraulic power for maize harvesting.", img: vishal435 },
    { id: 3, title: "Vishal 312 Atom Hydrollic", category: "Harvester", desc: "Compact power for tough fields.", img: vishal312 },
    { id: 4, title: "Vishal Maize Cutter", category: "Cutter", desc: "Efficient soil and crop preparation.", img: cutter }
  ];

  // 2. State for Filter
  const [filter, setFilter] = useState("All");

  // 3. Filter Logic
  const filteredItems = filter === "All" 
    ? allProducts 
    : allProducts.filter(item => item.category === filter);

  return (
    <section className="category-detail-section">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Premium Filter Header */}
        <div className="filter-container">
          <div className="header-text">
            <span className="eyebrow">Our Fleet</span>
            <h2 className="header-title">Machine <span className="text-lime">Categories</span></h2>
          </div>
          
          {/* Filter Chips */}
          <div className="filter-chips">
            {["All", "Harvester", "Maize Special", "Cutter"].map((cat) => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`chip ${filter === cat ? "active" : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Product Grid */}
        <div className="arrival-grid small-space">
          {filteredItems.map((item) => (
            <div key={item.id} className="arrival-card-premium fade-in">
              <div className="arrival-img-container">
                <img src={item.img} alt={item.title} className="arrival-img" />
              </div>
              <div className="arrival-body">
                <span className="cat-tag">{item.category}</span>
                <h3 className="arrival-title">{item.title}</h3>
                <p className="arrival-desc">{item.desc}</p>
                <button className="shop-now-btn-premium">View Details</button>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default CategoryPage;