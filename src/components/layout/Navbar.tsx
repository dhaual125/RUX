"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "RUX" },
  { href: "https://www.navchetna.tech/about", label: "About", external: true, hideArrow: true },
  { href: "https://osmium.co.in", label: "Osmium AI", external: true },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";
  const white = isHome && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-[10000] w-full">
      <div
        className="mx-auto w-full transition-all duration-300 ease-in-out"
        style={{
          maxWidth: scrolled ? "1140px" : "100%",
          padding: scrolled ? "0.875rem 1.25rem 0" : "0",
        }}
      >
        <div
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{
            borderRadius: open ? (scrolled ? "24px" : "0px") : scrolled ? "9999px" : "0px",
            background: open
              ? "var(--nav-bg)"
              : scrolled
                ? "var(--nav-bg)"
                : white
                  ? "transparent"
                  : "var(--nav-bg)",
            borderWidth: scrolled ? "1px" : open ? "1px" : "0px",
            borderStyle: "solid",
            borderColor: scrolled ? "var(--nav-border)" : open ? "var(--nav-border)" : "transparent",
            backdropFilter: open ? "blur(32px) saturate(2)" : scrolled ? "blur(24px) saturate(1.8)" : white ? "none" : "blur(16px)",
            WebkitBackdropFilter: open ? "blur(32px) saturate(2)" : scrolled ? "blur(24px) saturate(1.8)" : white ? "none" : "blur(16px)",
            boxShadow: scrolled ? "0 8px 32px -16px rgba(0,0,0,0.18)" : "none",
          }}
        >
          {/* ── Desktop ── */}
          <nav className="hidden h-[64px] grid-cols-[1fr_auto_1fr] items-center px-7 lg:grid">
            {/* Logo */}
            <Link href="/" className="w-max transition-opacity hover:opacity-75">
              <div style={{ position: "relative", height: "36px", display: "flex", alignItems: "center" }}>
                {/* White version — visible on dark hero */}
                <img
                  src="https://host.nineone152.com/RUX.png"
                  alt="RUX"
                  style={{
                    height: "36px",
                    width: "auto",
                    display: "block",
                    mixBlendMode: "screen",
                    position: "absolute",
                    opacity: white ? 1 : 0,
                    transition: "opacity 0.3s",
                  }}
                />
                {/* Natural version — visible on scrolled navbar */}
                <img
                  src="https://host.nineone152.com/RUX.png"
                  alt=""
                  aria-hidden
                  style={{
                    height: "36px",
                    width: "auto",
                    display: "block",
                    opacity: white ? 0 : 1,
                    transition: "opacity 0.3s",
                  }}
                />
              </div>
            </Link>

            {/* Center links */}
            <div className="flex items-center justify-center gap-0.5">
              {navLinks.map((link) => {
                const active = !link.external && pathname === link.href;
                const inner = (
                  <span style={{ fontSize: "13px", fontWeight: active ? 500 : 400 }}>
                    {link.label}
                  </span>
                );

                const sharedStyle = {
                  background: active && scrolled ? "var(--border-subtle)" : "transparent",
                  color: white
                    ? active ? "#ffffff" : "rgba(255,255,255,0.72)"
                    : active ? "var(--heading-color)" : "var(--muted-text)",
                };

                if (link.external) {
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 rounded-full px-3.5 py-2 transition-all duration-200 hover:bg-black/[0.04]"
                      style={sharedStyle}
                    >
                      {inner}
                      {/* external arrow icon */}
                      {!link.hideArrow && (
                        <svg width="11" height="11" viewBox="0 0 12 12" fill="none" style={{ opacity: 0.5 }}>
                          <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </a>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-full px-3.5 py-2 transition-all duration-200 hover:bg-black/[0.04]"
                    style={sharedStyle}
                  >
                    {inner}
                  </Link>
                );
              })}
            </div>

            {/* Right CTAs */}
            <div className="flex items-center justify-end gap-2">
              <Link
                href="/contact-sales"
                className="inline-flex h-9 items-center justify-center rounded-full px-4 text-[13px] font-medium transition-all duration-200 active:scale-95"
                style={{
                  background: "transparent",
                  color: white ? "rgba(255,255,255,0.72)" : "var(--muted-text)",
                  border: white ? "1px solid rgba(255,255,255,0.20)" : "1px solid var(--border-default)",
                }}
              >
                Talk to Sales
              </Link>
              <Link
                href="/get-started"
                className="inline-flex h-9 items-center justify-center rounded-full px-4 text-[13px] font-medium transition-all duration-200 active:scale-95"
                style={{
                  background: white ? "#ffffff" : "var(--heading-color)",
                  color: white ? "#000000" : "var(--page-bg)",
                  border: white ? "1px solid #ffffff" : "1px solid var(--heading-color)",
                }}
              >
                Get Started
              </Link>
            </div>
          </nav>

          {/* ── Mobile ── */}
          <div className="lg:hidden">
            <div className="flex h-[58px] items-center justify-between px-5">
              <Link href="/" onClick={() => setOpen(false)} className="transition-opacity hover:opacity-75">
                <div style={{ position: "relative", height: "28px", display: "flex", alignItems: "center" }}>
                  <img
                    src="https://host.nineone152.com/RUX.png"
                    alt="RUX"
                    style={{
                      height: "28px",
                      width: "auto",
                      display: "block",
                      mixBlendMode: "screen",
                      position: "absolute",
                      opacity: white ? 1 : 0,
                      transition: "opacity 0.3s",
                    }}
                  />
                  <img
                    src="https://host.nineone152.com/RUX.png"
                    alt=""
                    aria-hidden
                    style={{
                      height: "28px",
                      width: "auto",
                      display: "block",
                      opacity: white ? 0 : 1,
                      transition: "opacity 0.3s",
                    }}
                  />
                </div>
              </Link>

              <button
                type="button"
                aria-label="Toggle navigation"
                aria-expanded={open}
                className="flex size-8 flex-col items-center justify-center gap-[5px] rounded-full"
                style={{ background: white ? "rgba(255,255,255,0.12)" : "var(--border-subtle)" }}
                onClick={() => setOpen((v) => !v)}
              >
                <span
                  className="h-[1.5px] w-4 transition-transform duration-300"
                  style={{
                    background: white ? "#ffffff" : "var(--heading-color)",
                    transform: open ? "translateY(3.25px) rotate(45deg)" : "none",
                  }}
                />
                <span
                  className="h-[1.5px] w-4 transition-transform duration-300"
                  style={{
                    background: white ? "#ffffff" : "var(--heading-color)",
                    transform: open ? "translateY(-3.25px) rotate(-45deg)" : "none",
                  }}
                />
              </button>
            </div>

            <div className={`grid transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
              <div className="overflow-hidden">
                <div className="flex flex-col gap-1 px-5 pb-8 pt-4">
                  {navLinks.map((link) =>
                    link.external ? (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-1.5 rounded-xl px-4 py-3 text-[14px] font-medium transition-colors hover:bg-black/[0.05]"
                        style={{ color: "var(--muted-text)" }}
                      >
                        {link.label}
                        {!link.hideArrow && (
                          <svg width="11" height="11" viewBox="0 0 12 12" fill="none" style={{ opacity: 0.4 }}>
                            <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </a>
                    ) : (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-xl px-4 py-3 text-[14px] font-medium transition-colors hover:bg-black/[0.05]"
                        style={{ color: "var(--muted-text)" }}
                      >
                        {link.label}
                      </Link>
                    )
                  )}
                  <Link
                    href="/contact-sales"
                    onClick={() => setOpen(false)}
                    className="mt-2 flex h-11 items-center justify-center rounded-full text-[14px] font-medium"
                    style={{ border: "1px solid var(--border-default)", color: "var(--muted-text)" }}
                  >
                    Talk to Sales
                  </Link>
                  <Link
                    href="/get-started"
                    onClick={() => setOpen(false)}
                    className="mt-2 flex h-11 items-center justify-center rounded-full text-[14px] font-medium"
                    style={{ background: "var(--heading-color)", color: "var(--page-bg)" }}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
