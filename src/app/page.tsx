import { Hero } from "@/components/sections/Hero";
import { Capabilities } from "@/components/sections/Capabilities";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function RuxPage() {
  return (
    <>
      {/* ── Hero ── */}
      <Hero />

      {/* ── Trusted-by ticker ── */}
      <section className="relative py-6 bg-transparent overflow-hidden select-none">
        <div className="max-w-6xl lg:max-w-[90vw] mx-auto px-4 text-center">
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.2em] mb-6"
            style={{ color: "var(--subtle-text)" }}
          >
            TRUSTED BY TEAMS BUILDING WITH INTENT
          </p>

          <div className="relative w-full overflow-hidden flex items-center">
            {/* Edge fades */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--page-bg)] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--page-bg)] to-transparent z-10 pointer-events-none" />

            <div className="animate-marquee flex items-center gap-16 py-2">
              {[
                "TantriX", "AWS", "Plaur", "Osmium AI", "HomeGuru",
                "NineOne152", "Navchetna Technologies", "Kriya", "Natraj", "Plenora",
                "TantriX", "AWS", "Plaur", "Osmium AI", "HomeGuru",
                "NineOne152", "Navchetna Technologies", "Kriya", "Natraj", "Plenora",
              ].map((logo, idx) => (
                <span
                  key={idx}
                  className="font-medium tracking-widest whitespace-nowrap cursor-default transition-all duration-300"
                  style={{
                    fontSize: "14.5px",
                    color: "var(--subtle-text)",
                  }}
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @keyframes marquee {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 28s linear infinite;
          }
          .animate-marquee:hover { animation-play-state: paused; }
        `}</style>
      </section>

      {/* ── Capabilities (redesigned) ── */}
      <Capabilities />

      {/* ── CTA ── */}
      <section
        className="relative overflow-hidden py-14 md:py-20"
        style={{ background: "var(--page-bg)" }}
      >
        <div className="section-container">
          <ScrollReveal>
            <div
              className="relative isolate overflow-hidden rounded-2xl flex flex-col items-center text-center"
              style={{
                background: "var(--soft-gradient)",
                border: "1px solid var(--border-subtle)",
                padding: "clamp(2.5rem, 8vw, 3.5rem) clamp(1.5rem, 5vw, 3rem)",
              }}
            >
              {/* Corner accents */}
              <span className="absolute top-0 left-0 w-12 h-px" style={{ background: "linear-gradient(to right, var(--border-default), transparent)" }} />
              <span className="absolute top-0 left-0 h-12 w-px" style={{ background: "linear-gradient(to bottom, var(--border-default), transparent)" }} />
              <span className="absolute bottom-0 right-0 w-12 h-px" style={{ background: "linear-gradient(to left, var(--border-default), transparent)" }} />
              <span className="absolute bottom-0 right-0 h-12 w-px" style={{ background: "linear-gradient(to top, var(--border-default), transparent)" }} />

              <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto">
                <h2
                  className="mb-4 text-balance"
                  style={{
                    fontFamily: "var(--font-waldenburg)",
                    fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                    fontWeight: 400,
                    lineHeight: 1.1,
                    letterSpacing: "-0.03em",
                    color: "var(--heading-color)",
                  }}
                >
                  Ready to build with{" "}
                  <span
                    style={{
                      fontFamily: "'Instrument Serif', serif",
                      fontStyle: "italic",
                      background: "linear-gradient(135deg, #d4845a 0%, #8b6bc7 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    sovereign AI?
                  </span>
                </h2>
                <p
                  style={{
                    color: "var(--muted-text)",
                    lineHeight: 1.65,
                    fontSize: "0.92rem",
                    marginBottom: "1.75rem",
                    maxWidth: "42ch",
                  }}
                >
                  RUX runs entirely on your machine. Your keys, your models,
                  your data — always.
                </p>
                <Link
                  href="/get-started"
                  className="inline-flex items-center justify-center rounded-full px-6 text-sm font-semibold transition-colors"
                  style={{
                    height: "2.5rem",
                    background: "var(--heading-color)",
                    color: "var(--page-bg)",
                  }}
                >
                  Get Early Access
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
