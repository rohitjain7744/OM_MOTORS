import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const LINKS = {
  Company: [
    { label: "Home",        to: "/" },
    { label: "Know Us",     to: "/about" },
    { label: "Our Products",to: "/products" },
    { label: "Catalog",     to: "/catalog" },
    { label: "Contact Us",  to: "/contact" },
  ],
  Support: [
    { label: "FAQ",             to: "/faq" },
    { label: "Shipping Policy", to: "/shipping" },
    { label: "Returns",         to: "/returns" },
    { label: "Track Order",     to: "/track" },
  ],
  Legal: [
    { label: "Privacy Policy",  to: "/privacy" },
    { label: "Terms of Use",    to: "/terms" },
    { label: "Cookie Policy",   to: "/cookies" },
  ],
};

const SOCIALS = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="footer">

      {/* ── Top glow bar ── */}
      <div className="footer-glow-bar" />

      <div className="footer-inner">

        {/* ── Brand column ── */}
        <div className="footer-brand-col">
          <Link to="/" className="footer-brand">
            <div className="footer-brand-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                <path d="M2 12h20"/>
              </svg>
            </div>
            <span className="footer-brand-name">
              Om <span className="footer-accent">Motors</span>
            </span>
          </Link>

          <p className="footer-tagline">
            Empowering agriculture with smart tools, modern technology, and a
            shared mission to grow a greener tomorrow.
          </p>

          {/* Socials */}
          <div className="footer-socials">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="social-btn"
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* ── Link columns ── */}
        {Object.entries(LINKS).map(([heading, items]) => (
          <div className="footer-col" key={heading}>
            <h4 className="footer-col-heading">{heading}</h4>
            <ul className="footer-col-list">
              {items.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="footer-link">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* ── Newsletter column ── */}
        <div className="footer-col footer-newsletter-col">
          <h4 className="footer-col-heading">Stay Updated</h4>
          <p className="footer-newsletter-sub">
            Get the latest products, offers and farming tips straight to your inbox.
          </p>

          {subscribed ? (
            <div className="sub-success">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              Thanks for subscribing!
            </div>
          ) : (
            <form className="sub-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                className="sub-input"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="sub-btn">
                Subscribe
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </button>
            </form>
          )}

          {/* Contact info */}
          <div className="footer-contact">
            <a href="tel:+911234567890" className="contact-row">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.4 2 2 0 0 1 3.58 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              +91 12345 67890
            </a>
            <a href="mailto:hello@ommotors.in" className="contact-row">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              ommotors1771@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="footer-bottom">
        <p className="footer-copy">
          © {new Date().getFullYear()} Om Motors. All rights reserved.
        </p>
        <div className="footer-bottom-links">
          <Link to="/privacy" className="footer-bottom-link">Privacy</Link>
          <span className="footer-dot" />
          <Link to="/terms"   className="footer-bottom-link">Terms</Link>
          <span className="footer-dot" />
          <Link to="/cookies" className="footer-bottom-link">Cookies</Link>
        </div>
      </div>
    </footer>
  );
}