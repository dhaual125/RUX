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
        className="relative w-full flex flex-col items-center text-center mx-auto animate-title-fade"
        style={{ zIndex: 3, position: "relative" }}
      >
        <div style={{ maxWidth: "54rem", padding: "0 1rem" }}>
          {/* Heading */}
          <h1
            style={{
              fontSize: "clamp(2.5rem, 5vw + 1rem, 60px)",
              fontWeight: 500,
              letterSpacing: "-0.03em",
              lineHeight: 1.08,
              marginBottom: "1.5rem",
              color: "#ffffff",
              fontFamily: "var(--font-heading)",
              textShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
              textAlign: "center",
            }}
          >
            Every model. Every agent.
            <br />
            <span
              className="serif-italic"
              style={{
                fontWeight: 400,
                letterSpacing: "-0.02em",
              }}
            >
              One engine.
            </span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              color: "rgba(255,255,255,0.65)",
              fontSize: "clamp(0.75rem, 2.2vw, 1.05rem)",
              fontWeight: 400,
              lineHeight: 1.6,
              maxWidth: "42rem",
              margin: "0 auto 2.5rem auto",
              fontFamily: "var(--font-heading)",
              textShadow: "0 2px 8px rgba(0,0,0,0.15)",
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
          <div
            style={{
              display: "flex",
              flexWrap: "nowrap",
              justifyContent: "center",
              gap: "clamp(0.5rem, 2vw, 1rem)",
            }}
          >
            <Link
              href="/get-started"
              className="group transition-opacity duration-200 hover:opacity-90 active:scale-95"
              style={{
                display: "inline-flex",
                height: "48px",
                alignItems: "center",
                gap: "8px",
                background: "#ffffff",
                color: "#000000",
                padding: "0 clamp(16px, 3vw, 24px)",
                borderRadius: "999px",
                fontSize: "clamp(12px, 2.5vw, 13.5px)",
                fontWeight: 600,
                textDecoration: "none",
                fontFamily: "var(--font-heading)",
                whiteSpace: "nowrap",
                boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
              }}
            >
              Get Started
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </Link>
            <Link
              href="/contact-sales"
              className="group transition-all duration-200 hover:bg-white/[0.15] active:scale-95"
              style={{
                display: "inline-flex",
                height: "48px",
                alignItems: "center",
                gap: "8px",
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: "#ffffff",
                padding: "0 clamp(16px, 3vw, 24px)",
                borderRadius: "999px",
                fontSize: "clamp(12px, 2.5vw, 13.5px)",
                fontWeight: 600,
                textDecoration: "none",
                fontFamily: "var(--font-heading)",
                whiteSpace: "nowrap",
                boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
              }}
            >
              Talk to Sales
            </Link>
          </div>
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

