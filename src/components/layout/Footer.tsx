"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const productLinks = [
  { href: "/", label: "RUX" },
  { href: "https://osmium.co.in", label: "Osmium AI", external: true },
  { href: "https://navchetna.tech", label: "Navchetna", external: true },
];

const resourceLinks: never[] = [];

const companyLinks = [
  { href: "mailto:sales@rux.dev", label: "Contact Sales", external: true },
  { href: "/privacy", label: "Privacy Policy" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: "var(--page-bg)" }}>
      {/* warm glow */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-[32rem] w-[140%] opacity-[0.85] mix-blend-multiply"
        style={{ background: "radial-gradient(ellipse at bottom, rgba(245,190,145,0.35) 0%, rgba(185,165,230,0.15) 35%, transparent 70%)" }}
      />

      <div className="relative z-10 mx-auto max-w-[80rem] px-5 sm:px-8">
        {/* Main grid */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 py-16 sm:grid-cols-4 md:py-20">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <span
              style={{
                fontFamily: "var(--font-waldenburg)",
                fontSize: "1.15rem",
                fontWeight: 500,
                letterSpacing: "-0.01em",
                color: "var(--heading-color)",
              }}
            >
              RUX
            </span>
            <p
              className="mt-4 max-w-[240px] text-[0.875rem] leading-relaxed"
              style={{ color: "var(--muted-text)" }}
            >
              Sovereign AI-native development.<br />
              Every model. Every agent. One engine.
            </p>
          </div>

          {/* Products */}
          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-wider" style={{ color: "var(--subtle-text)" }}>
              Products
            </p>
            <ul className="space-y-3.5">
              {productLinks.map((l) => (
                <li key={l.label}>
                  {l.external ? (
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[0.875rem] font-medium transition-colors hover:opacity-100"
                      style={{ color: "var(--muted-text)" }}
                    >
                      {l.label}
                    </a>
                  ) : (
                    <Link
                      href={l.href}
                      className="text-[0.875rem] font-medium transition-colors hover:opacity-100"
                      style={{ color: "var(--muted-text)" }}
                    >
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

{/* Company */}
          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-wider" style={{ color: "var(--subtle-text)" }}>
              Company
            </p>
            <ul className="space-y-3.5">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  {l.external ? (
                    <a
                      href={l.href}
                      className="text-[0.875rem] font-medium transition-colors hover:opacity-100"
                      style={{ color: "var(--muted-text)" }}
                    >
                      {l.label}
                    </a>
                  ) : (
                    <Link
                      href={l.href}
                      className="text-[0.875rem] font-medium transition-colors hover:opacity-100"
                      style={{ color: "var(--muted-text)" }}
                    >
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Centered System Status */}
        <div className="flex justify-center mb-6">
          <Link
            href="#"
            className="text-[10px] font-semibold uppercase tracking-[0.14em] transition-colors duration-200 hover:text-[var(--heading-color)]"
            style={{ color: "var(--muted-text)" }}
          >
            System Status
          </Link>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 text-[10px] tracking-wider"
          style={{ borderTop: "1px solid var(--border-subtle)" }}
        >
          {/* Left: copyright */}
          <span style={{ color: "var(--muted-text)" }}>
            © 2026 Navchetna Technologies. All rights reserved.
          </span>

          {/* Right: company + theme toggle */}
          <div className="flex flex-wrap items-center gap-6">
            <span
              className="font-semibold"
              style={{ color: "var(--muted-text)" }}
            >
              NINELLMS SOLUTIONS LLP
            </span>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
