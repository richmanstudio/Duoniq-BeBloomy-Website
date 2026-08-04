"use client";

import { Fragment, useEffect, useState } from "react";
import { LeafMark } from "./LeafMark";

const links = [
  ["Collections", "#collections"],
  ["Services", "#services"],
  ["Events", "#events"],
  ["Visit", "#visit"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <Fragment>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""} ${open ? "menu-open" : ""}`}>
        <a className="brand" href="#top" aria-label="BeBloomy home" onClick={() => setOpen(false)}>
          <LeafMark className="brand-mark" />
          <span>Be Bloomy</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>

        <a className="header-cta desktop-only" href="https://t.me/BeBloomyCY" target="_blank" rel="noreferrer">
          Order concierge <span aria-hidden="true">↗</span>
        </a>

        <button
          className={`menu-button ${open ? "is-open" : ""}`}
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </header>

      <div id="mobile-menu" className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <div className="mobile-menu-inner">
          {links.map(([label, href], index) => (
            <a key={href} href={href} onClick={() => setOpen(false)} style={{ transitionDelay: `${80 + index * 45}ms` }}>
              <span>0{index + 1}</span>
              {label}
            </a>
          ))}
          <a className="mobile-order" href="https://t.me/BeBloomyCY" target="_blank" rel="noreferrer">
            Start an order <span>↗</span>
          </a>
        </div>
      </div>
    </Fragment>
  );
}
