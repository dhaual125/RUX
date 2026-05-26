"use client";

import Link from "next/link";
import { useTheme } from "@/components/ui/ThemeProvider";

const productLinks = [
  { href: "https://navchetna.tech/products", label: "All Products", external: true },
  { href: "https://www.osmium.co.in/", label: "Osmium AI", external: true },
  { href: "https://natraj.navchetna.tech/", label: "Natraj", external: true },
  { href: "https://aegis.navchetna.tech/", label: "Aegis Auth", external: true },
  { href: "https://kriya.navchetna.tech/", label: "Kriya", external: true },
  { href: "https://lmlens.navchetna.tech/", label: "LM Lens", external: false },
];

const serviceLinks = [
  { href: "https://navchetna.tech/services", label: "Product Development", external: true },
  { href: "https://navchetna.tech/services", label: "AI & Automation", external: true },
  { href: "https://navchetna.tech/services", label: "Design & Branding", external: true },
  { href: "https://navchetna.tech/services", label: "Strategy & Management", external: true },
];

const companyLinks = [
  { href: "https://navchetna.tech/about", label: "About Us", external: true },
  { href: "https://navchetna.tech/career", label: "Careers", external: true },
  { href: "https://navchetna.tech/news", label: "News", external: true },
  { href: "https://navchetna.tech/contact", label: "Contact", external: true },
];

function FooterLink({ href, label, external }: { href: string; label: string; external: boolean }) {
  const style: React.CSSProperties = {
    fontSize: "13.5px",
    color: "var(--footer-link)",
    textDecoration: "none",
    fontWeight: 500,
    transition: "color 0.2s",
  };
  if (external) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" style={style} className="footer-link-hover">
        {label}
      </a>
    );
  }
  return (
    <Link href={href} style={style} className="footer-link-hover">
      {label}
    </Link>
  );
}

function FooterCol({ heading, links }: { heading: string; links: typeof productLinks }) {
  return (
    <div style={{ flex: "1 1 130px" }}>
      <p style={{
        fontSize: "10px", fontWeight: 600, textTransform: "uppercase",
        letterSpacing: "0.1em", color: "var(--footer-eyebrow)", marginBottom: "1.25rem",
      }}>
        {heading}
      </p>
      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.875rem" }}>
        {links.map((l) => (
          <li key={l.label}>
            <FooterLink {...l} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const { theme, setTheme } = useTheme();
  return (
    <footer className="relative overflow-hidden" style={{ background: "var(--page-bg)" }}>
      {/* warm glow */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-[32rem] w-[140%] opacity-40 mix-blend-multiply dark:opacity-[0.85]"
        style={{ background: "radial-gradient(ellipse at bottom, rgba(245,190,145,0.35) 0%, rgba(185,165,230,0.15) 35%, transparent 70%)" }}
      />

      <div className="relative z-10" style={{ margin: "0 auto", maxWidth: "80rem", padding: "0 1.25rem" }}>

        {/* ── Main row ── */}
        <div className="footer-main-row">

          {/* Brand */}
          <div className="footer-brand">
            <Link href="/" className="inline-block transition-opacity hover:opacity-75">
              <span style={{ fontSize: "1.1rem", fontWeight: 500, letterSpacing: "-0.02em", color: "var(--heading-color)" }}>
                Navchetna Technologies
              </span>
            </Link>
            <p style={{
              marginTop: "1rem", fontSize: "13px",
              color: "var(--muted-text)", lineHeight: 1.7, maxWidth: "220px",
            }}>
              Based in India, For India,<br />
              By Students of India
            </p>
          </div>

          {/* Columns */}
          <div className="footer-cols-row">
            <FooterCol heading="Products" links={productLinks} />
            <FooterCol heading="Services" links={serviceLinks} />
            <FooterCol heading="Company" links={companyLinks} />
          </div>
        </div>

        {/* ── Badge bar ── */}
        <div style={{
          borderTop: "1px solid var(--footer-divider)",
          padding: "1.5rem 0",
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
          flexWrap: "wrap",
        }}>
          <img src="/nvidia-inception.svg" alt="NVIDIA Inception" style={{ height: "48px", width: "auto" }} />
          <img src="/dpiit.png" alt="DPIIT Recognized" className="dpiit-logo" style={{ height: "48px", width: "auto" }} />
        </div>

        {/* ── Bottom bar ── */}
        <div
          className="footer-bottom-bar"
          style={{
            borderTop: "1px solid var(--footer-divider)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.5rem",
            padding: "2rem 0",
            fontSize: "12px",
            color: "var(--footer-legal)",
            fontWeight: 500,
          }}
        >
          <span style={{ alignSelf: "flex-start" }}>© 2026 Navchetna Technologies. All rights reserved.</span>
          <div className="footer-bottom-inner">
            <div className="footer-social-links">
              <a href="https://www.linkedin.com/company/Navchetna-Technology/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--footer-legal)", textDecoration: "none", transition: "color 0.2s" }} className="footer-link-hover">LinkedIn</a>
              <a href="https://www.instagram.com/navchetna.tech/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--footer-legal)", textDecoration: "none", transition: "color 0.2s" }} className="footer-link-hover">Instagram</a>
              <span className="footer-divider-dot" style={{ width: "1px", height: "12px", background: "var(--footer-divider)", display: "inline-block" }} />
              <a href="https://www.navchetna.tech/privacy" style={{ color: "var(--footer-legal)", textDecoration: "none", transition: "color 0.2s" }} className="footer-link-hover">Privacy Policy</a>
              <a href="https://www.navchetna.tech/terms" target="_blank" rel="noopener noreferrer" style={{ color: "var(--footer-legal)", textDecoration: "none", transition: "color 0.2s" }} className="footer-link-hover">Terms of Service</a>
            </div>
            <div className="theme-toggle-group">
              <button className={`theme-btn${theme === "system" ? " active" : ""}`} onClick={() => setTheme("system")}>System</button>
              <button className={`theme-btn${theme === "light" ? " active" : ""}`} onClick={() => setTheme("light")}>Light</button>
              <button className={`theme-btn${theme === "dark" ? " active" : ""}`} onClick={() => setTheme("dark")}>Dark</button>
            </div>
          </div>
        </div>
      </div>

      {/* LM Lens footer layout classes */}
      <style>{`
        .footer-main-row {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          padding: 3rem 0 4rem;
          flex-wrap: wrap;
        }
        .footer-cols-row {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          flex: 1;
          flex-wrap: wrap;
        }
        .footer-brand { flex: 0 0 auto; }
        .footer-bottom-bar {
          flex-direction: column !important;
          align-items: flex-start !important;
        }
        .footer-bottom-inner {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1.5rem;
          width: 100%;
        }
        .footer-social-links {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 1rem;
        }
        .footer-link-hover:hover { color: var(--black) !important; }
        .dpiit-logo { filter: none; }
        .dark .dpiit-logo { filter: invert(1) brightness(1.8); }
        .theme-toggle-group {
          display: inline-flex;
          align-items: center;
          gap: 2px;
          background: var(--card-bg);
          border: 1px solid var(--border-default);
          border-radius: 999px;
          padding: 3px;
          transition: background 0.3s ease, border-color 0.3s ease;
        }
        .theme-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          height: 28px;
          padding: 0 11px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          background: transparent;
          color: var(--page-text);
          opacity: 0.45;
          transition: background 0.2s ease, color 0.2s ease, opacity 0.2s ease, box-shadow 0.2s ease;
        }
        .theme-btn:hover { opacity: 0.75; }
        .theme-btn.active {
          background: var(--page-bg);
          opacity: 1;
          box-shadow: 0 1px 4px rgba(0,0,0,0.12), 0 0 0 1px var(--border-default);
        }
        .dark .theme-btn.active {
          box-shadow: 0 1px 4px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.08);
        }
        @media (min-width: 640px) {
          .footer-main-row { padding: 4rem 0 5rem; }
          .footer-cols-row { flex-direction: row; gap: 3rem; }
          .footer-bottom-bar { flex-direction: row !important; align-items: center !important; }
          .footer-bottom-inner { flex-direction: row; justify-content: space-between; align-items: center; }
          .footer-social-links { gap: 1.5rem; }
        }
        @media (min-width: 1024px) {
          .footer-main-row { flex-direction: row; gap: 4rem; }
          .footer-cols-row { gap: 4rem; }
          .footer-brand { flex: 0 0 220px; }
        }
        @media (max-width: 480px) {
          .footer-social-links { flex-direction: column; align-items: flex-start; gap: 0.75rem; }
          .footer-divider-dot { display: none !important; }
        }
      `}</style>
    </footer>
  );
}
