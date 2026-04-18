import React from "react";
import "./Testimonials.css";

const reviews = [
  {
    name: "Ravi Sharma",
    text: "Excellent quality tools! Very durable and perfect for daily use.",
    rating: 5,
  },
  {
    name: "Amit Verma",
    text: "Fast delivery and great customer support. Highly recommended!",
    rating: 4,
  },
  {
    name: "Suresh Patel",
    text: "Best prices and genuine products. Will order again.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <div className="testimonials">
      <h2>What Our Customers Say</h2>

      <div className="testimonial-grid">
        {reviews.map((item, index) => (
          <div className="testimonial-card" key={index}>

            {/* Stars */}
            <div className="stars">
              {"⭐".repeat(item.rating)}
            </div>

            {/* Text */}
            <p className="review-text">"{item.text}"</p>

            {/* Name */}
            <h4>- {item.name}</h4>

          </div>
        ))}
      </div>
    </div>
  );
}