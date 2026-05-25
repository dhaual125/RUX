"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  ShieldCheck,
  Robot,
  Network,
  Brain,
  Desktop,
  GearSix,
} from "@phosphor-icons/react";

const pillars = [
  {
    number: "01",
    title: "Sovereign Intelligence",
    desc: "BYOK local key storage. Local-only mode. Secrets detection. Your code, models, and keys never leave unless you say so.",
    count: "12 security features",
    icon: ShieldCheck,
  },
  {
    number: "02",
    title: "Autonomous Agents",
    desc: "Plan → act → observe → reflect loops with parallel spawning, rollback, human-in-the-loop pauses, and full audit trails.",
    count: "15 agent features",
    icon: Robot,
  },
  {
    number: "03",
    title: "Any Model, Anywhere",
    desc: "OpenAI, Anthropic, Gemini, Groq, Ollama, LM Studio — unified under one protocol with smart routing and failover chains.",
    count: "8 providers + local",
    icon: Network,
  },
  {
    number: "04",
    title: "Deep Code Intelligence",
    desc: "AST-aware context via Tree-sitter, LSP integration, dependency graphs, and hybrid BM25 + semantic indexing across 50+ languages.",
    count: "14 code features",
    icon: Brain,
  },
  {
    number: "05",
    title: "Full Environment Control",
    desc: "Interactive PTY, background processes, full FS access, git-native context, and MCP marketplace — the IDE is the shell.",
    count: "20+ env features",
    icon: Desktop,
  },
  {
    number: "06",
    title: "Extensible Core",
    desc: "WASM plugins, custom tools, TOML config, workspace profiles, and a shared Rust engine that powers CLI, VS Code, and ADE equally.",
    count: "10 platform features",
    icon: GearSix,
  },
];

export function Pillars() {
  return (
    <section className="relative py-16 md:py-24 bg-transparent">
      <div className="section-container">
        
        {/* Header */}
        <ScrollReveal>
          <div className="mb-14 max-w-2xl">
            <p
              className="mb-4 text-[10px] font-semibold uppercase tracking-[0.16em]"
              style={{ color: "var(--subtle-text)" }}
            >
              Core Pillars
            </p>
            <h2 className="section-heading mb-4">
              Built different.<br />
              <span className="serif-italic">By design.</span>
            </h2>
            <p
              style={{
                color: "var(--muted-text)",
                lineHeight: 1.68,
                fontSize: "1rem",
              }}
            >
              Not a wrapper. Not a plugin. RUX is a ground-up Rust engine that owns the entire surface — from model routing to filesystem access — with no external dependencies calling home.
            </p>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border-subtle)] border border-[var(--border-subtle)] rounded-xl overflow-hidden">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 40} className="h-full">
                <div 
                  className="relative p-8 md:p-10 h-full flex flex-col group transition-all duration-300 hover:bg-[var(--section-bg)]"
                  style={{ background: "var(--card-bg)" }}
                >
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[var(--color-brand)] transition-colors duration-300" />
                  
                  {/* Number & Icon */}
                  <div className="flex items-start justify-between mb-8">
                    <span 
                      className="font-mono text-[11px] tracking-[0.1em]"
                      style={{ color: "var(--subtle-text)" }}
                    >
                      {pillar.number}
                    </span>
                    <div
                      className="inline-flex size-11 items-center justify-center rounded-xl transition-colors duration-300"
                      style={{
                        border: "1px solid var(--border-subtle)",
                        background: "var(--section-bg)",
                      }}
                    >
                      <Icon
                        weight="duotone"
                        className="size-6"
                        style={{ color: "var(--page-text)" }}
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <h3
                    className="mb-3 text-[1.15rem]"
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 500,
                      color: "var(--heading-color)",
                      letterSpacing: "-0.015em",
                    }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    className="mb-8"
                    style={{
                      color: "var(--muted-text)",
                      fontSize: "0.85rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {pillar.desc}
                  </p>

                  {/* Bottom Count */}
                  <div className="mt-auto pt-4 flex items-center justify-end">
                    <span 
                      className="font-mono text-[9px] uppercase tracking-[0.08em]"
                      style={{ color: "var(--subtle-text)" }}
                    >
                      {pillar.count}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
