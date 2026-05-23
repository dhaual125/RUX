"use client";

import Link from "next/link";

export function Hero() {
  return (
    <section className="relative w-full h-[100dvh] md:h-screen md:min-h-[600px] flex flex-col justify-center overflow-hidden">

      {/* ── Dark fallback bg (shows while video loads) ── */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, #0d0d0d 0%, #1a1410 50%, #0d0d0d 100%)", zIndex: 0 }}
      />

      {/* ── Video background ── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ zIndex: 1 }}
      >
        <source src="/assets/vid.mp4" type="video/mp4" />
      </video>

      {/* ── Overlays for legibility — same as Navchetna ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.42) 0%, rgba(0,0,0,0.12) 38%, rgba(0,0,0,0.22) 65%, rgba(0,0,0,0.72) 100%)",
          zIndex: 2,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 110% 80% at 50% 50%, transparent 20%, rgba(0,0,0,0.48) 100%)",
          zIndex: 2,
        }}
      />

      {/* ── Content ── */}
      <div className="relative mx-auto w-full max-w-3xl px-5 sm:px-8 flex flex-col items-center text-center" style={{ zIndex: 3 }}>
        <h1
          style={{
            fontSize: "clamp(2rem, 10vw, 3.75rem)",
            lineHeight: "1.08",
            letterSpacing: "-0.05em",
            fontFamily: "var(--font-waldenburg)",
            fontWeight: 500,
            color: "#ffffff",
            textShadow: "0 2px 40px rgba(0,0,0,0.45)",
            textAlign: "center",
          }}
        >
          Every model. Every agent.
          <br />
          <span
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: "italic",
              fontWeight: 400,
              color: "rgba(255,255,255,0.85)",
            }}
          >
            One sovereign engine.
          </span>
        </h1>

        <p
          className="mt-8 max-w-md text-pretty"
          style={{
            fontSize: "clamp(0.9rem, 1.1vw, 1rem)",
            lineHeight: "1.70",
            color: "rgba(255,255,255,0.65)",
            fontWeight: 400,
          }}
        >
          RUX is an AI-native development environment built on a single Rust core —{" "}
          <span style={{ color: "rgba(255,255,255,0.88)", fontWeight: 500 }}>
            local-first, model-agnostic,
          </span>{" "}
          and fully sovereign.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link
            href="#get-started"
            className="group inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full transition-all duration-300 active:scale-95 hover:bg-white/90"
            style={{
              height: "46px",
              padding: "0 22px",
              fontSize: "13.5px",
              fontWeight: 600,
              background: "#ffffff",
              color: "#000000",
              letterSpacing: "-0.01em",
            }}
          >
            Get Started
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <a
            href="mailto:sales@rux.dev"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full transition-all duration-300 active:scale-95 hover:bg-white/15"
            style={{
              height: "46px",
              padding: "0 22px",
              fontSize: "13.5px",
              fontWeight: 500,
              background: "rgba(255,255,255,0.08)",
              color: "rgba(255,255,255,0.88)",
              border: "1px solid rgba(255,255,255,0.22)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              letterSpacing: "-0.01em",
            }}
          >
            Talk to Sales
          </a>
        </div>
      </div>

    </section>
  );
}
