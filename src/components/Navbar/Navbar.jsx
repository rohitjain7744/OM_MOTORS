import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const NAV_LINKS = [
  { label: "Home",       to: "/",         icon: "⌂" },
  { label: "Know Us",    to: "/about",    icon: "◎" },
  { label: "Products",   to: "/products", icon: "▦" },
  { label: "Catalog",    to: "/catalog",  icon: "☰" },
  { label: "Contact Us", to: "/contact",  icon: "✉" },
];

export default function Navbar({ cart = [] }) {
  const [open,      setOpen]      = useState(false);
  const [scrolled,  setScrolled]  = useState(false);
  const [pillStyle, setPillStyle] = useState(null); // null = hidden until measured
  const navLinksRef = useRef(null);
  const location    = useLocation();

  const totalInCart = cart.reduce((s, p) => s + (p.qty || 1), 0);

  /* Close drawer on route change */
  useEffect(() => { setOpen(false); }, [location.pathname]);

  /* Scroll shadow */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  /* Measure active link and move pill — runs after paint */
  useEffect(() => {
    if (!navLinksRef.current) return;

    // Use requestAnimationFrame so DOM is fully painted before measuring
    const raf = requestAnimationFrame(() => {
      const listEl = navLinksRef.current;
      if (!listEl) return;

      const anchors = listEl.querySelectorAll("li a");
      anchors.forEach((el, i) => {
        const to = NAV_LINKS[i]?.to;
        if (!to) return;
        const isActive =
          to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);
        if (isActive) {
          // offsetLeft is relative to the offsetParent (the <ul>)
          setPillStyle({
            left:  el.offsetLeft,
            width: el.offsetWidth,
          });
        }
      });
    });

    return () => cancelAnimationFrame(raf);
  }, [location.pathname]);

  const isActive = (to) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  return (
    <>
      {/* ── Fixed bar ── */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>

        {/* Brand */}
        <Link to="/" className="nav-brand">
          <div className="brand-logo">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10
                       15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              <path d="M2 12h20"/>
            </svg>
          </div>
          <span className="nav-brand-name">
            Om <span className="brand-accent">Motors</span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="nav-links" ref={navLinksRef}>
          {/* Pill only renders when pillStyle has been measured */}
          {pillStyle && (
            <span
              className="nav-pill"
              style={{ left: pillStyle.left, width: pillStyle.width }}
              aria-hidden="true"
            />
          )}
          {NAV_LINKS.map(({ label, to }) => (
            <li key={to}>
              <Link to={to} className={isActive(to) ? "nav-active" : ""}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side — cart + hamburger */}
        <div className="nav-right">
          <Link to="/cart" className="nav-cart-btn">
            <span className="cart-icon-wrap">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.2"
                strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9"  cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72
                         a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              {totalInCart > 0 && (
                <span className="nav-cart-count" key={totalInCart}>
                  {totalInCart}
                </span>
              )}
            </span>
            <span>Cart</span>
          </Link>

          <button
            className={`nav-hamburger ${open ? "open" : ""}`}
            onClick={() => setOpen(v => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* ── Mobile drawer ── */}
      <aside className={`nav-drawer ${open ? "open" : ""}`} aria-hidden={!open}>

        <div className="drawer-head">
          <Link to="/" className="nav-brand" onClick={() => setOpen(false)}>
            <div className="brand-logo">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10
                         15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                <path d="M2 12h20"/>
              </svg>
            </div>
            <span className="nav-brand-name">
              Om <span className="brand-accent">Motors</span>
            </span>
          </Link>

          <button
            className="drawer-close"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6"  x2="6"  y2="18"/>
              <line x1="6"  y1="6"  x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <div className="drawer-divider" />

        {/* All nav links listed directly — no shared component */}
        <ul className="drawer-links">
          {NAV_LINKS.map(({ label, to, icon }) => (
            <li key={to}>
              <Link
                to={to}
                className={isActive(to) ? "nav-active" : ""}
                onClick={() => setOpen(false)}
              >
                <span className="drawer-icon">{icon}</span>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="drawer-footer">
          <Link
            to="/cart"
            className="nav-cart-btn drawer-cart"
            onClick={() => setOpen(false)}
          >
            <span className="cart-icon-wrap">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.2"
                strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9"  cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72
                         a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              {totalInCart > 0 && (
                <span className="nav-cart-count">{totalInCart}</span>
              )}
            </span>
            <span>Cart</span>
          </Link>
          <p className="drawer-copy">© {new Date().getFullYear()} Om Motors</p>
        </div>
      </aside>

      {/* Dim overlay */}
      <div
        className={`nav-overlay ${open ? "visible" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
    </>
  );
}