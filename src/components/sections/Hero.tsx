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
        className="absolute inset-0 w-full h-full object-cover object-center animate-video-fade"
        style={{ zIndex: 1 }}
      >
        <source src="/assets/vid.mp4" type="video/mp4" />
      </video>

      {/* ── Left-side darkening gradient so text is always readable ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.55) 100%)",
          zIndex: 2,
        }}
      />
      {/* ── Top + bottom fade ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.65) 100%)",
          zIndex: 2,
        }}
      />

      {/* ── Content — centered ── */}
      <div
        className="relative w-full px-5 sm:px-10 md:px-16 lg:px-24 flex flex-col items-center text-center mx-auto"
        style={{ zIndex: 3, maxWidth: "840px" }}
      >
        {/* Heading */}
        <h1
          className="animate-title-fade"
          style={{
            fontSize: "clamp(2.5rem, 8vw, 5.5rem)",
            lineHeight: "1.08",
            letterSpacing: "-0.035em",
            fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
            fontWeight: 500,
            color: "#ffffff",
            textShadow: "0 2px 40px rgba(0,0,0,0.4)",
            textAlign: "center",
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
              background: "linear-gradient(90deg, #C68B59 0%, #e8b07a 50%, #f5d0a0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            One engine.
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="mt-4 sm:mt-6 text-pretty mx-auto animate-subtitle-fade"
          style={{
            fontSize: "clamp(0.875rem, 2.5vw, 1.05rem)",
            lineHeight: "1.72",
            color: "rgba(255,255,255,0.68)",
            fontWeight: 400,
            maxWidth: "520px",
            textAlign: "center",
          }}
        >
          RUX is a sovereign, AI-native dev environment — local-first,{" "}
          <span style={{ color: "rgba(255,255,255,0.9)", fontWeight: 500 }}>
            model-agnostic,
          </span>{" "}
          and built on a single Rust core.
        </p>

        {/* CTAs */}
        <div className="mt-7 sm:mt-9 flex flex-row flex-wrap items-center justify-center gap-3 animate-ctas-fade">
          <Link
            href="/get-started"
            className="group inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all duration-300 active:scale-95 hover:bg-white/95"
            style={{
              height: "44px",
              padding: "0 20px",
              fontSize: "13px",
              fontWeight: 600,
              background: "#ffffff",
              color: "#000000",
              letterSpacing: "-0.01em",
              borderRadius: "999px",
              boxShadow: "0 4px 14px rgba(255,255,255,0.15)",
            }}
          >
            Get Started
            <svg width="13" height="13" viewBox="0 0 12 12" fill="none">
              <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link
            href="/contact-sales"
            className="group inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all duration-300 active:scale-95 hover:bg-white/[0.08]"
            style={{
              height: "44px",
              padding: "0 20px",
              fontSize: "13px",
              fontWeight: 600,
              background: "rgba(255,255,255,0.06)",
              color: "#ffffff",
              border: "1px solid rgba(255,255,255,0.22)",
              letterSpacing: "-0.01em",
              borderRadius: "999px",
              backdropFilter: "blur(4px)",
            }}
          >
            Talk to Sales
          </Link>
        </div>
      </div>

      {/* ── Bottom trusted-by bar ── */}
      <div
        className="absolute bottom-0 left-0 right-0 px-4 sm:px-8 md:px-16 py-4 flex items-center justify-center gap-4 sm:gap-8 flex-wrap animate-footer-fade"
        style={{ zIndex: 3, borderTop: "1px solid rgba(255,255,255,0.07)" }}
      >
        <span
          style={{
            fontSize: "9px",
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.30)",
            whiteSpace: "nowrap",
          }}
        >
          Powered by
        </span>
        {["Osmium AI", "Ollama", "OpenAI", "Anthropic", "Gemini", "Groq", "OpenRouter", "& more"].map((name) => (
          <span
            key={name}
            style={{
              fontSize: "11px",
              fontWeight: 500,
              color: "rgba(255,255,255,0.38)",
              letterSpacing: "-0.01em",
            }}
          >
            {name}
          </span>
        ))}
      </div>

      <style>{`
        .animate-video-fade {
          opacity: 0;
          animation: fadeInVideo 1.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-title-fade {
          opacity: 0;
          animation: fadeUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards;
        }
        .animate-subtitle-fade {
          opacity: 0;
          animation: fadeUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.9s forwards;
        }
        .animate-ctas-fade {
          opacity: 0;
          animation: fadeUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) 1.2s forwards;
        }
        .animate-footer-fade {
          opacity: 0;
          animation: fadeInSimple 1.5s ease-out 1.6s forwards;
        }

        @keyframes fadeInVideo {
          from {
            opacity: 0;
            transform: scale(1.03);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInSimple {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
