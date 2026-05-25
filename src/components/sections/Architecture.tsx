"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  Desktop,
  GitBranch,
  Robot,
  Brain,
  TreeStructure,
  ShieldCheck,
  Cpu,
  ArrowsClockwise,
} from "@phosphor-icons/react";
import { ArchStackIllu } from "./feature-illustrations";

const stackLayers = [
  { name: "VS Code / ADE / CLI", tag: "UI Layer", desc: "Interfaces", icon: Desktop, highlight: false },
  { name: "NAVHUB Orchestration", tag: "Routing", desc: "State, API keys, B2B tenants", icon: GitBranch, highlight: false },
  { name: "Agent Loop Engine", tag: "Agents", desc: "Plan → act → observe → reflect", icon: Robot, highlight: false },
  { name: "Smart Model Router", tag: "Models", desc: "8+ providers + local fallback", icon: Brain, highlight: false },
  { name: "Codebase Index", tag: "Intelligence", desc: "BM25 + semantic, AST-aware", icon: TreeStructure, highlight: false },
  { name: "Aegis Auth Gateway", tag: "IAM", desc: "Capability gates, secrets, BYOK", icon: ShieldCheck, highlight: false },
  { name: "Rust Core Engine", tag: "Foundation", desc: "Cross-platform binary, zero deps", icon: Cpu, highlight: true },
  { name: "Omni-Sync + MCP", tag: "Protocol", desc: "Real-time state + extensibility", icon: ArrowsClockwise, highlight: false },
];

export function Architecture() {
  return (
    <section className="relative py-16 md:py-24 bg-transparent">
      <div className="section-sep" />

      <div className="section-container">
        <div className="arch-layout">
          <div className="arch-layout-text lg:sticky lg:top-32">
            <ScrollReveal>
              <p className="section-eyebrow mb-4">Architecture</p>
              <h2 className="section-heading mb-6 text-balance">
                Rust at the bottom.
                <br />
                <span className="serif-italic">Everything else on top.</span>
              </h2>
              <div className="section-divider mb-6" />
              <div className="arch-prose">
                <p>
                  Every interface — the CLI forge, the VS Code extension, the ADE fork — talks to the same
                  underlying Rust engine. No drift. No inconsistency. One truth.
                </p>
                <p>
                  The Omni-Sync Engine keeps state synchronized across macOS, Windows, Linux, and mobile browsers
                  in real time. NAVHUB Orchestration handles cross-platform routing, API keys, and B2B tenant
                  management in a single layer.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80} className="hidden lg:block mt-8">
              <div className="lm-format-card arch-illo-card">
                <div className="lm-format-illo lm-format-illo--arch">
                  <ArchStackIllu className="lm-illo-svg" />
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="arch-stack">
            {stackLayers.map((layer, idx) => {
              const Icon = layer.icon;
              return (
                <ScrollReveal key={layer.name} delay={idx * 30}>
                  <div className={`arch-layer-card${layer.highlight ? " arch-layer-card--highlight" : ""}`}>
                    <div className="arch-layer-left">
                      <div className="lm-icon-box arch-layer-icon">
                        <Icon size={20} weight="duotone" />
                      </div>
                      <div>
                        <span
                          className="arch-layer-name"
                          style={layer.highlight ? { color: "var(--color-brand)" } : undefined}
                        >
                          {layer.name}
                        </span>
                        <span className={`arch-layer-tag${layer.highlight ? " arch-layer-tag--highlight" : ""}`}>
                          {layer.tag}
                        </span>
                      </div>
                    </div>
                    <span className="arch-layer-desc">{layer.desc}</span>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
