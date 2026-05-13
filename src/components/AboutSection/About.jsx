import React from 'react';
import './About.css';
import King from "../../assets/king.png";

const AboutSection = () => {
  return (
    <section className="about-container">
      <div className="about-wrapper">
        
        {/* 1. Image Side with Legacy Badge */}
        <div className="about-image-stack">
          <div className="image-main-wrapper">
            <img 
              src={King} 
              alt="Mr. Sanjay Mahajan CMD" 
              className="main-profile-img" 
            />
            {/* Experience Floating Badge */}
            <div className="experience-badge">
              <span className="years">25+</span>
              <span className="badge-text">Years of Legacy</span>
            </div>
          </div>
        </div>

        {/* 2. Content Side */}
        <div className="about-text-content">
          <span className="section-label">Since 2000</span>
          <h2 className="about-headline">
            Legacy of Trust & <br />
            <span>Visionary Leadership</span>
          </h2>
          
          <div className="about-description">
            <p className="mb-4">
              The entrepreneurial journey of <strong>Mr. xxxx</strong> began in 2000 with the establishment of <strong>Om Motors</strong> at Nevasa Phata. he laid a foundation built on integrity and relentless hard work.
            </p>
            <p className="mb-6">
              Transitioning into the agricultural sector as <strong>Om Motors</strong>, and eventually unifying as <strong>Sterling Automotives</strong>, he has emphasized high-quality products and deep farmer-centric relationships across Maharashtra.
            </p>
          </div>

          {/* Authorised Brands Grid */}
          <h4 className="text-sm uppercase tracking-widest font-bold mb-4 text-gray-400">
            Authorised Partners
          </h4>
          <div className="brand-grid">
            <div className="brand-tag">🚜 Vishal 435</div>
            <div className="brand-tag">🌾 Vishal Harvesters</div>
            <div className="brand-tag">🛠️ Vishal 435 Brisk </div>
            <div className="brand-tag">🏗️ Vishal 435 Brisk+Hydrolic</div>
            <div className="brand-tag">⚙️ Auto Parts</div>
          </div>
        </div>
      </div>

     
      
    </section>
  );
};

export default AboutSection;