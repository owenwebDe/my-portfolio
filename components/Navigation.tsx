import React, { useState, useEffect } from "react";
import Image from "next/image";
import { greetings, socialLinks } from "../portfolio";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    background: scrolled ? "#0A0E1A" : "rgba(10,14,26,0.92)",
    borderBottom: scrolled ? "1px solid #1E293B" : "1px solid transparent",
    backdropFilter: "blur(10px)",
    transition: "all 0.3s ease",
  };

  const links = [
    socialLinks.github && { icon: "fa-github", label: "GitHub", href: socialLinks.github },
    socialLinks.email && { icon: "fa-envelope", label: "Email", href: socialLinks.email },
    socialLinks.linkedin && { icon: "fa-linkedin", label: "LinkedIn", href: socialLinks.linkedin },
    socialLinks.instagram && { icon: "fa-instagram", label: "Instagram", href: socialLinks.instagram },
    socialLinks.twitter && { icon: "fa-twitter", label: "Twitter", href: socialLinks.twitter },
  ].filter(Boolean) as { icon: string; label: string; href: string }[];

  return (
    <nav style={navStyle}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>

        {/* Brand */}
        <a href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <Image
            src="/img/icons/common/photo_2026-03-26_15-19-18.jpg"
            alt="Iconedge Technologies"
            width={38}
            height={38}
            style={{ borderRadius: "50%", objectFit: "cover" }}
          />
          <span style={{ color: "#F1F5F9", fontWeight: 700, fontSize: "clamp(0.85rem, 2vw, 1rem)", whiteSpace: "nowrap" }}>
            {greetings.name}
          </span>
        </a>

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }} className="nav-desktop-links">
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              title={link.label}
              style={{ color: "#94A3B8", fontSize: "1.2rem", padding: "8px", borderRadius: "8px", transition: "color 0.2s, background 0.2s", textDecoration: "none" }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#6366F1"; (e.currentTarget as HTMLAnchorElement).style.background = "#1E293B"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#94A3B8"; (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}
            >
              <i className={`fa ${link.icon}`} />
            </a>
          ))}
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="nav-hamburger"
          style={{ background: "none", border: "none", cursor: "pointer", padding: "8px", display: "none", flexDirection: "column", gap: "5px" }}
          aria-label="Toggle menu"
        >
          <span style={{ display: "block", width: "24px", height: "2px", background: menuOpen ? "#6366F1" : "#F1F5F9", transition: "all 0.3s", transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none" }} />
          <span style={{ display: "block", width: "24px", height: "2px", background: menuOpen ? "#6366F1" : "#F1F5F9", transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: "block", width: "24px", height: "2px", background: menuOpen ? "#6366F1" : "#F1F5F9", transition: "all 0.3s", transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none" }} />
        </button>
      </div>

      {/* Mobile menu */}
      <div style={{
        background: "#111827",
        borderTop: "1px solid #1E293B",
        overflow: "hidden",
        maxHeight: menuOpen ? "300px" : "0",
        transition: "max-height 0.35s ease",
      }}
        className="nav-mobile-menu"
      >
        <div style={{ padding: "16px 24px", display: "flex", flexDirection: "column", gap: "4px" }}>
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              style={{ display: "flex", alignItems: "center", gap: "12px", color: "#94A3B8", padding: "12px 16px", borderRadius: "8px", textDecoration: "none", fontSize: "0.95rem", transition: "all 0.2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#F1F5F9"; (e.currentTarget as HTMLAnchorElement).style.background = "#1E293B"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#94A3B8"; (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}
            >
              <i className={`fa ${link.icon}`} style={{ width: "20px", textAlign: "center", color: "#6366F1" }} />
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop-links { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
        @media (min-width: 769px) {
          .nav-mobile-menu { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navigation;
