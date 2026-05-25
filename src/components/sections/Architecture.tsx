"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

const stackLayers = [
  { name: "VS Code / ADE / CLI", tag: "UI Layer", desc: "Interfaces", highlight: false },
  { name: "NAVHUB Orchestration", tag: "Routing", desc: "State, API keys, B2B tenants", highlight: false },
  { name: "Agent Loop Engine", tag: "Agents", desc: "Plan → act → observe → reflect", highlight: false },
  { name: "Smart Model Router", tag: "Models", desc: "8+ providers + local fallback", highlight: false },
  { name: "Codebase Index", tag: "Intelligence", desc: "BM25 + semantic, AST-aware", highlight: false },
  { name: "Aegis Auth Gateway", tag: "IAM", desc: "Capability gates, secrets, BYOK", highlight: false },
  { name: "Rust Core Engine", tag: "Foundation", desc: "Cross-platform binary, zero deps", highlight: true },
  { name: "Omni-Sync + MCP", tag: "Protocol", desc: "Real-time state + extensibility", highlight: false },
];

export function Architecture() {
  return (
    <section className="relative py-16 md:py-24 bg-transparent">
      {/* Top separator */}
      <div className="section-sep" />

      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Text */}
          <div className="lg:sticky lg:top-32">
            <ScrollReveal>
              <p
                className="mb-4 text-[10px] font-semibold uppercase tracking-[0.16em]"
                style={{ color: "var(--subtle-text)" }}
              >
                Architecture
              </p>
              <h2 className="section-heading mb-6 text-balance">
                Rust at the bottom.<br />
                <span className="serif-italic">Everything else on top.</span>
              </h2>
              <div 
                className="flex flex-col gap-5"
                style={{
                  color: "var(--muted-text)",
                  lineHeight: 1.68,
                  fontSize: "1rem",
                }}
              >
                <p>
                  Every interface — the CLI forge, the VS Code extension, the ADE fork — talks to the same underlying Rust engine. No drift. No inconsistency. One truth.
                </p>
                <p>
                  The Omni-Sync Engine keeps state synchronized across macOS, Windows, Linux, and mobile browsers in real time. NAVHUB Orchestration handles cross-platform routing, API keys, and B2B tenant management in a single layer.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Stack */}
          <div className="flex flex-col gap-[2px]">
            {stackLayers.map((layer, idx) => (
              <ScrollReveal key={idx} delay={idx * 30}>
                <div 
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-5 md:p-6 transition-colors duration-300 group"
                  style={{
                    background: layer.highlight 
                      ? "rgba(198,139,89,0.06)" 
                      : "var(--card-bg)",
                    border: "1px solid",
                    borderColor: layer.highlight 
                      ? "rgba(198,139,89,0.3)" 
                      : "var(--border-subtle)",
                    borderRadius: "4px",
                  }}
                >
                  <div className="flex items-center gap-4 mb-2 sm:mb-0">
                    <span 
                      style={{ 
                        fontFamily: "var(--font-heading)", 
                        color: layer.highlight ? "#C68B59" : "var(--heading-color)",
                        fontSize: "1.05rem",
                        fontWeight: layer.highlight ? 500 : 400
                      }}
                    >
                      {layer.name}
                    </span>
                    <span 
                      className="px-2 py-0.5 text-[9px] font-mono rounded uppercase tracking-widest"
                      style={{ 
                        border: "1px solid",
                        borderColor: layer.highlight ? "rgba(198,139,89,0.3)" : "var(--border-subtle)",
                        color: layer.highlight ? "#C68B59" : "var(--muted-text)",
                        background: layer.highlight ? "rgba(198,139,89,0.08)" : "transparent"
                      }}
                    >
                      {layer.tag}
                    </span>
                  </div>
                  <span 
                    className="text-[10px] font-mono uppercase tracking-widest sm:text-right"
                    style={{ color: "var(--subtle-text)" }}
                  >
                    {layer.desc}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
