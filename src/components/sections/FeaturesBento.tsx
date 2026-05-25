"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import React from "react";

export function FeaturesBento() {
  return (
    <section className="relative py-16 md:py-24 bg-transparent">
      {/* Top separator */}
      <div className="section-sep" />

      <div className="section-container">
        <ScrollReveal>
          <div className="mb-10">
            <p
              className="mb-4 text-[10px] font-semibold uppercase tracking-[0.16em]"
              style={{ color: "var(--subtle-text)" }}
            >
              Feature Density
            </p>
            <h2 className="section-heading mb-4 text-balance">
              Everything you need. <br />
              <span className="serif-italic">Nothing you don't.</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[minmax(140px,auto)] gap-4">
          
          {/* ── ROW 1 ── */}
          {/* Agent Loop */}
          <div 
            className="md:col-span-5 md:row-span-2 rounded-xl border relative overflow-hidden flex flex-col justify-end p-6 group"
            style={{ 
              background: "var(--card-bg)",
              borderColor: "var(--border-subtle)",
            }}
          >
            {/* Background Code */}
            <pre 
              className="absolute top-4 right-4 text-[10px] opacity-[0.25] pointer-events-none text-right font-mono select-none"
              style={{ color: "var(--muted-text)", lineHeight: 1.6 }}
            >
              {`fn agent_loop(task: Task) -> Result {
  loop {
    let plan = model.plan(&task)?;
    let action = agent.act(&plan)?;
    let obs = env.observe(&action)?;
    if agent.reflect(&obs).done { break }
  }
}`}
            </pre>
            
            <div className="relative z-10">
              <div 
                className="inline-block px-2.5 py-1 rounded text-[9px] font-mono font-semibold uppercase tracking-widest mb-3 border"
                style={{ 
                  color: "var(--page-text)", 
                  borderColor: "var(--border-strong)",
                  background: "var(--section-bg)" 
                }}
              >
                Agent Loop
              </div>
              <h3 
                className="text-[1.2rem] font-medium leading-[1.25] mb-2"
                style={{ fontFamily: "var(--font-heading)", color: "var(--heading-color)" }}
              >
                Autonomous execution<br/>until complete
              </h3>
              <p style={{ color: "var(--muted-text)", fontSize: "0.85rem", lineHeight: 1.5 }}>
                Plan → Act → Observe → Reflect — the full agentic loop with checkpoints and rollback.
              </p>
            </div>
          </div>

          {/* Rust Core */}
          <div 
            className="md:col-span-4 md:row-span-2 rounded-xl border relative overflow-hidden flex flex-col justify-end p-6 group"
            style={{ 
              background: "var(--card-bg)",
              borderColor: "var(--border-subtle)",
            }}
          >
            <div className="relative z-10">
              <div 
                className="inline-block px-2.5 py-1 rounded text-[9px] font-mono font-semibold uppercase tracking-widest mb-3 border"
                style={{ 
                  color: "var(--page-text)", 
                  borderColor: "var(--border-strong)",
                  background: "var(--section-bg)" 
                }}
              >
                Rust Core
              </div>
              <h3 
                className="text-[1.2rem] font-medium leading-[1.25] mb-2"
                style={{ fontFamily: "var(--font-heading)", color: "var(--heading-color)" }}
              >
                One binary.<br/>All platforms.
              </h3>
              <p style={{ color: "var(--muted-text)", fontSize: "0.85rem", lineHeight: 1.5 }}>
                A single cross-platform Rust binary runs identically on macOS, Linux, and Windows.
              </p>
            </div>
          </div>

          {/* Security */}
          <div 
            className="md:col-span-3 md:row-span-2 rounded-xl border relative overflow-hidden flex flex-col justify-end p-6 group"
            style={{ 
              background: "var(--card-bg)",
              borderColor: "var(--border-subtle)",
            }}
          >
            <div className="relative z-10">
              <div 
                className="inline-block px-2.5 py-1 rounded text-[9px] font-mono font-semibold uppercase tracking-widest mb-3 border"
                style={{ 
                  color: "var(--page-text)", 
                  borderColor: "var(--border-strong)",
                  background: "var(--section-bg)" 
                }}
              >
                Security
              </div>
              <h3 
                className="text-[1.1rem] font-medium leading-[1.25] mb-2"
                style={{ fontFamily: "var(--font-heading)", color: "var(--heading-color)" }}
              >
                Aegis Auth Gateway
              </h3>
              <p style={{ color: "var(--muted-text)", fontSize: "0.85rem", lineHeight: 1.5 }}>
                Unified IAM layer in Rust. Capability gates, secrets detection, local-only mode.
              </p>
            </div>
          </div>

          {/* ── ROW 2 ── */}
          {/* Model Support */}
          <div 
            className="md:col-span-8 md:row-span-2 rounded-xl border relative overflow-hidden flex flex-col justify-center p-6 sm:p-8"
            style={{ 
              background: "var(--card-bg)",
              borderColor: "var(--border-subtle)",
            }}
          >
            <span 
              className="text-[9px] font-mono font-semibold uppercase tracking-widest mb-2"
              style={{ color: "var(--subtle-text)" }}
            >
              Model Support
            </span>
            <h3 
              className="text-[1.4rem] font-medium leading-[1.2] mb-3"
              style={{ fontFamily: "var(--font-heading)", color: "var(--heading-color)" }}
            >
              Every provider. <span className="serif-italic">Smart routing.</span>
            </h3>
            <p className="max-w-xl mb-5" style={{ color: "var(--muted-text)", fontSize: "0.9rem", lineHeight: 1.5 }}>
              Auto-routes tasks to the optimal model — fast models for autocomplete, heavy models for architecture — with automatic failover chains.
            </p>
            
            {/* Model Pills */}
            <div className="flex flex-wrap gap-2">
              {["OpenAI", "Anthropic", "Gemini"].map(m => (
                <div key={m} className="px-3 py-1 text-[10px] font-mono rounded-full border" style={{ borderColor: "var(--page-text)", color: "var(--page-bg)", background: "var(--page-text)" }}>
                  {m}
                </div>
              ))}
              {["Groq", "Mistral", "Ollama", "LM Studio", "+ any OpenAI-compat"].map(m => (
                <div key={m} className="px-3 py-1 text-[10px] font-mono rounded-full border border-[var(--border-strong)] text-[var(--muted-text)] bg-transparent">
                  {m}
                </div>
              ))}
            </div>
          </div>

          {/* Intelligence */}
          <div 
            className="md:col-span-4 md:row-span-2 rounded-xl border relative overflow-hidden flex flex-col justify-end p-6"
            style={{ 
              background: "var(--card-bg)",
              borderColor: "var(--border-subtle)",
            }}
          >
            <span 
              className="text-[9px] font-mono font-semibold uppercase tracking-widest mb-2"
              style={{ color: "var(--subtle-text)" }}
            >
              Intelligence
            </span>
            <h3 
              className="text-[1.2rem] font-medium leading-[1.25] mb-2"
              style={{ fontFamily: "var(--font-heading)", color: "var(--heading-color)" }}
            >
              Multi-Model Consensus
            </h3>
            <p style={{ color: "var(--muted-text)", fontSize: "0.85rem", lineHeight: 1.5 }}>
              Prompt multiple models simultaneously. Synthesize the best combined answer from divergent outputs.
            </p>
          </div>

          {/* ── ROW 3 ── */}
          {/* Codebase */}
          <div 
            className="md:col-span-3 md:row-span-2 rounded-xl border relative flex flex-col justify-end p-6"
            style={{ 
              background: "var(--card-bg)",
              borderColor: "var(--border-subtle)",
            }}
          >
            <span 
              className="text-[9px] font-mono font-semibold uppercase tracking-widest mb-2"
              style={{ color: "var(--subtle-text)" }}
            >
              Codebase
            </span>
            <h3 
              className="text-[1.1rem] font-medium leading-[1.25] mb-2"
              style={{ fontFamily: "var(--font-heading)", color: "var(--heading-color)" }}
            >
              AST-Aware Context
            </h3>
            <p style={{ color: "var(--muted-text)", fontSize: "0.85rem", lineHeight: 1.5 }}>
              Tree-sitter parsing that understands functions, not flat text.
            </p>
          </div>

          {/* Developer Experience */}
          <div 
            className="md:col-span-5 md:row-span-2 rounded-xl border relative flex flex-col justify-end p-6"
            style={{ 
              background: "var(--card-bg)",
              borderColor: "var(--border-subtle)",
            }}
          >
            <span 
              className="text-[9px] font-mono font-semibold uppercase tracking-widest mb-2"
              style={{ color: "var(--subtle-text)" }}
            >
              Developer Experience
            </span>
            <h3 
              className="text-[1.2rem] font-medium leading-[1.25] mb-2"
              style={{ fontFamily: "var(--font-heading)", color: "var(--heading-color)" }}
            >
              "Openclaws" WhatsApp CLI
            </h3>
            <p style={{ color: "var(--muted-text)", fontSize: "0.85rem", lineHeight: 1.5 }}>
              Execute code, initialize projects, and trigger automations via WhatsApp text messages. Remote dev, redefined.
            </p>
          </div>

          {/* Extensions */}
          <div 
            className="md:col-span-4 md:row-span-2 rounded-xl border relative flex flex-col justify-end p-6"
            style={{ 
              background: "var(--card-bg)",
              borderColor: "var(--border-subtle)",
            }}
          >
            <span 
              className="text-[9px] font-mono font-semibold uppercase tracking-widest mb-2"
              style={{ color: "var(--subtle-text)" }}
            >
              Extensions
            </span>
            <h3 
              className="text-[1.2rem] font-medium leading-[1.25] mb-2"
              style={{ fontFamily: "var(--font-heading)", color: "var(--heading-color)" }}
            >
              MCP Marketplace
            </h3>
            <p style={{ color: "var(--muted-text)", fontSize: "0.85rem", lineHeight: 1.5 }}>
              Browse and install community MCP servers — Slack, Linear, databases, file systems — all live without a restart.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
