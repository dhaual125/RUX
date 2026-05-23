"use client";

import Link from "next/link";

export function Hero() {
  return (
    <section className="relative w-full h-[100dvh] md:h-screen md:min-h-[640px] flex flex-col justify-center overflow-hidden">

      {/* ── Dark fallback bg ── */}
      <div
        className="absolute inset-0"
        style={{ background: "#0a0a0a", zIndex: 0 }}
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

      {/* ── Left-side darkening gradient so text is always readable ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.10) 100%)",
          zIndex: 2,
        }}
      />
      {/* ── Top + bottom fade ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.55) 100%)",
          zIndex: 2,
        }}
      />

      {/* ── Content — left aligned ── */}
      <div
        className="relative w-full px-6 sm:px-10 md:px-16 lg:px-24 flex flex-col items-start"
        style={{ zIndex: 3, maxWidth: "680px" }}
      >
        {/* Eyebrow chip */}
        <div
          className="mb-6 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5"
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.15)",
            backdropFilter: "blur(8px)",
          }}
        >
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: "#C68B59" }}
          />
          <span
            style={{
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.75)",
            }}
          >
            Agentic Development Environment
          </span>
        </div>

        {/* Heading */}
        <h1
          style={{
            fontSize: "clamp(2.6rem, 7vw, 5rem)",
            lineHeight: "1.04",
            letterSpacing: "-0.04em",
            fontFamily: "var(--font-waldenburg)",
            fontWeight: 500,
            color: "#ffffff",
            textShadow: "0 2px 40px rgba(0,0,0,0.5)",
            textAlign: "left",
          }}
        >
          Every model.
          <br />
          Every agent.
          <br />
          <span
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: "italic",
              fontWeight: 400,
              color: "rgba(255,255,255,0.80)",
            }}
          >
            One engine.
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="mt-6 text-pretty"
          style={{
            fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)",
            lineHeight: "1.72",
            color: "rgba(255,255,255,0.58)",
            fontWeight: 400,
            maxWidth: "420px",
            textAlign: "left",
          }}
        >
          RUX is a sovereign, AI-native dev environment — local-first,{" "}
          <span style={{ color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>
            model-agnostic,
          </span>{" "}
          and built on a single Rust core.
        </p>

        {/* CTAs */}
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <Link
            href="#get-started"
            className="group inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all duration-300 active:scale-95"
            style={{
              height: "48px",
              padding: "0 24px",
              fontSize: "13.5px",
              fontWeight: 600,
              background: "#ffffff",
              color: "#000000",
              letterSpacing: "-0.01em",
              borderRadius: "8px",
            }}
          >
            Get Started
            <svg width="13" height="13" viewBox="0 0 12 12" fill="none">
              <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <a
            href="mailto:sales@rux.dev"
            className="inline-flex items-center justify-center whitespace-nowrap transition-all duration-300 active:scale-95 hover:bg-white/10"
            style={{
              height: "48px",
              padding: "0 24px",
              fontSize: "13.5px",
              fontWeight: 500,
              background: "transparent",
              color: "rgba(255,255,255,0.88)",
              border: "1px solid rgba(255,255,255,0.25)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              letterSpacing: "-0.01em",
              borderRadius: "8px",
            }}
          >
            Talk to Sales
          </a>
        </div>
      </div>

      {/* ── Bottom trusted-by bar ── */}
      <div
        className="absolute bottom-0 left-0 right-0 px-6 sm:px-10 md:px-16 lg:px-24 py-5 flex items-center gap-8 flex-wrap"
        style={{ zIndex: 3, borderTop: "1px solid rgba(255,255,255,0.07)" }}
      >
        <span
          style={{
            fontSize: "10px",
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.30)",
            whiteSpace: "nowrap",
          }}
        >
          Powered by
        </span>
        {["Rust", "Ollama", "OpenAI", "Anthropic", "Gemini", "Groq"].map((name) => (
          <span
            key={name}
            style={{
              fontSize: "12.5px",
              fontWeight: 500,
              color: "rgba(255,255,255,0.38)",
              letterSpacing: "-0.01em",
            }}
          >
            {name}
          </span>
        ))}
      </div>

    </section>
  );
}
