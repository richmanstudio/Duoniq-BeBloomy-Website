"use client";

import { useEffect, useState } from "react";

const links = [
  ["Services", "#services"],
  ["Directions", "#directions"],
  ["Events", "#events"],
  ["Visit", "#visit"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
        <a className="site-brand" href="#top" aria-label="BeBloomy home" onClick={() => setOpen(false)}>
          <span className="site-brand-flower" aria-hidden="true">✳</span>
          <span>Be Bloomy</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>

        <a className="header-order" href="#concierge">Start an order <span aria-hidden="true">↗</span></a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </header>

      <div id="mobile-navigation" className={`mobile-navigation ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <nav aria-label="Mobile navigation">
          {links.map(([label, href], index) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span>{label}
            </a>
          ))}
        </nav>
        <a className="mobile-order" href="#concierge" onClick={() => setOpen(false)}>Start an order <span>↗</span></a>
        <div className="mobile-contact">
          <a href="tel:+35799228323">+357 99 228323</a>
          <span>Open daily 10:00–20:00</span>
        </div>
      </div>
    </>
  );
}
