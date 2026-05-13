import React from 'react';
import './Catgory.css';
import cutter from "../../assets/vishalcutter.png";
import vishal312 from "../../assets/vishal312.png";
import vishal435 from "../../assets/vishal435.png";
import king from "../../assets/king.png";

const NewArrival = () => {
  // 🚜 Apna WhatsApp number yahan dalein (Country code ke saath)
  const whatsappNumber = "91XXXXXXXXXX"; 

  const handleWhatsAppInquiry = (productTitle) => {
    // Professional message format
    const message = `Namaste Om Motors, I am interested in knowing more about the *${productTitle}*. Please provide details and pricing.`;
    const encodedMessage = encodeURIComponent(message);
    
    // WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Naye tab mein open karne ke liye
    window.open(whatsappURL, '_blank');
  };

  const arrivals = [
    { title: "Vishal 435", desc: "The Vishal 435 is a flagship multi-crop combine harvester, meticulously engineered to deliver maximum efficiency and high-yield recovery in modern farming. Powered by a robust 101 HP engine operating at 2200 RPM, it features a 14-foot standard cutter bar that enables rapid harvesting across expansive fields.", img: king },
    { title: "Vishal 435 Maize Harvester Hydrollic", desc: "The Swaraj Tractor is a symbol of strength, reliability, and performance.", img: vishal435 },
    { title: "Vishal 312 Atom Hydrollic", desc: "The BULL Backhoe Loader is a powerful construction machine designed for demanding work.", img: vishal312 },
    { title: "Vishal Maize Cutter", desc: "High-performance agricultural implement designed for efficient soil preparation.", img: cutter }
  ];

  return (
    <section className="new-arrival-section">
      <div className="max-w-7xl mx-auto px-6">
        <div className="section-header">
          <div className="header-text">
            <span className="eyebrow">Inventory 2026</span>
            <h2 className="header-title">New <span className="text-lime">Arrivals</span></h2>
          </div>
         
        </div>

        <div className="arrival-grid">
          {arrivals.map((item, index) => (
            <div key={index} className="arrival-card-premium">
              <div className="arrival-img-container">
                <img src={item.img} alt={item.title} className="arrival-img" />
                <div className="img-overlay-glow"></div>
              </div>
              
              <div className="arrival-body">
                <h3 className="arrival-title">{item.title}</h3>
                <p className="arrival-desc">{item.desc}</p>
                
                {/* 🟢 Updated Button for WhatsApp Enquiry */}
                <button 
                  className="shop-now-btn-premium"
                  onClick={() => handleWhatsAppInquiry(item.title)}
                >
                  Enquiry on WhatsApp
                  <span className="btn-icon">→</span>
                </button>
              </div>

              <div className="grass-footer-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrival;