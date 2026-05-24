"use client";

import { useState } from "react";
import { Hero } from "@/components/sections/Hero";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const categories = ["All", "Platform", "AI Models", "Agents", "Editor", "Security"];

const features = [
  // Platform
  { id: "omni-sync", name: "Omni-Sync Engine", tag: "Real-time Sync", category: "Platform", desc: "Real-time, zero-latency state synchronization bridging macOS, Windows, Linux, and mobile web browsers natively." },
  { id: "vajra", name: "Project Vajra Pipeline", tag: "GPU Cloud", category: "Platform", desc: "One-click deployment of ML functions and LLMs directly to a sovereign serverless GPU cloud." },
  { id: "navhub", name: "NAVHUB Orchestration", tag: "Orchestration", category: "Platform", desc: "Direct integration to manage cross-platform states, API keys, and B2B tenant routing." },
  { id: "mcp", name: "Any MCP Server", tag: "MCP", category: "Platform", desc: "Native connection to any MCP-compatible server — file, database, Slack, Linear, and more. Hot-reload without restarting." },
  { id: "toml", name: "TOML Config", tag: "Configuration", category: "Platform", desc: "Complete configuration of models, tools, and permissions in a single TOML file. Workspace profiles for monorepos and microservices." },
  { id: "wasm", name: "WASM Plugins", tag: "Extensibility", category: "Platform", desc: "Extend RUX with plugins written in any language that compiles to WASM. Define custom tools and prompt templates." },

  // AI Models
  { id: "any-llm", name: "Any LLM, Any Provider", tag: "Multi-Provider", category: "AI Models", desc: "Support for OpenAI, Anthropic, Gemini, Mistral, Groq, Ollama, LM Studio, and any OpenAI-compatible endpoint." },
  { id: "smart-routing", name: "Smart Model Routing", tag: "Auto-Routing", category: "AI Models", desc: "Auto-routes tasks to the optimal model — fast model for autocomplete, heavy model for architecture decisions." },
  { id: "local-models", name: "Local Model Support", tag: "Offline", category: "AI Models", desc: "Fully offline execution of Ollama, llama.cpp, and LM Studio. Zero data leaves the machine." },
  { id: "fallback", name: "Model Fallback Chains", tag: "Reliability", category: "AI Models", desc: "Automatic failover to backup models if a provider is rate-limited or down." },
  { id: "per-task", name: "Per-Task Model Config", tag: "Granular Control", category: "AI Models", desc: "Assign different models independently for chat, autocomplete, embeddings, and summarization." },
  { id: "cost", name: "Cost Tracking", tag: "Monitoring", category: "AI Models", desc: "Per-session and per-provider token cost monitoring dashboards with streaming responses across all providers." },
  { id: "byok", name: "Bring Your Own Key", tag: "BYOK", category: "AI Models", desc: "Local storage of API keys — they are never sent to external servers." },
  { id: "consensus", name: "Multi-Model Consensus", tag: "Synthesis", category: "AI Models", desc: "Prompts multiple models simultaneously and synthesizes the best combined answer." },

  // Agents
  { id: "agent-loop", name: "Agent Loop", tag: "Autonomous", category: "Agents", desc: "Autonomous plan → act → observe → reflect execution loop that runs until a task is completed." },
  { id: "parallel", name: "Parallel Agents", tag: "Concurrency", category: "Agents", desc: "Spawns multiple AI agents to execute independent subtasks simultaneously and merges results." },
  { id: "hitl", name: "Human-in-the-Loop", tag: "Safety", category: "Agents", desc: "Pauses for user confirmation before executing ambiguous or destructive actions." },
  { id: "rollback", name: "Rollback", tag: "Undo", category: "Agents", desc: "Instant undo for any agent action, including file edits, shell commands, and git changes." },
  { id: "audit", name: "Agent Audit Log", tag: "Traceability", category: "Agents", desc: "Complete historical trace of every AI decision, tool call, and model response." },
  { id: "personas", name: "Custom Agent Personas", tag: "Specialization", category: "Agents", desc: "Define specialized agents like security reviewers, test writers, or architects." },
  { id: "osmium-tutor", name: "Osmium AI Tutor Engine", tag: "Embedded AI", category: "Agents", desc: "Embedded intelligence that dynamically generates practice environments and learning loops based on your code." },
  { id: "openclaws", name: "Openclaws WhatsApp CLI", tag: "Remote Execution", category: "Agents", desc: "Remote execution of code, project initialization, and automations via WhatsApp text messages." },

  // Editor
  { id: "codebase-index", name: "Codebase Indexing", tag: "Indexing", category: "Editor", desc: "Always-updated hybrid BM25 and semantic index of the entire repository with AST-aware Tree-sitter parsing." },
  { id: "50-langs", name: "50+ Language Support", tag: "Polyglot", category: "Editor", desc: "Native comprehension of Rust, Python, JS/TS, Go, Java, C/C++, Swift, Kotlin, and more." },
  { id: "lsp", name: "LSP Integration", tag: "Live Diagnostics", category: "Editor", desc: "Hooks into existing language servers to feed live diagnostics and go-to-definitions directly to the AI." },
  { id: "multi-edit", name: "Multi-File Edits", tag: "Unified Diff", category: "Editor", desc: "Agent edits multiple files in a single operation and displays a unified diff for review, accept, or reject." },
  { id: "autocomplete", name: "Inline Autocomplete", tag: "Ghost Text", category: "Editor", desc: "Context-aware ghost-text completions generated as you type, powered by the full codebase index." },
  { id: "lm-lens", name: "LM Lens Integration", tag: "Multimodal", category: "Editor", desc: "Multimodal data harvesting giving agents active vision to read local files and structured data." },
  { id: "test-gen", name: "Test Generation", tag: "Automated Tests", category: "Editor", desc: "Automated writing of unit, integration, and edge-case tests across the codebase." },
  { id: "web-search", name: "Web Search & URL Fetch", tag: "Live Context", category: "Editor", desc: "Agent autonomously searches the internet, reads web pages, GitHub issues, and fetches latest library docs." },

  // Security
  { id: "aegis", name: "Aegis Auth Gateway", tag: "IAM", category: "Security", desc: "The unified Identity and Access Management layer written in Rust securing the entire environment." },
  { id: "secrets", name: "Secrets Detection", tag: "Prevention", category: "Security", desc: "Warning triggers before sending files with API keys or passwords to an LLM." },
  { id: "local-only", name: "Local-Only Mode", tag: "Air-Gap", category: "Security", desc: "Hard toggle to force all models to local execution. Zero data leaves the machine." },
  { id: "security-scan", name: "Security Scan", tag: "SAST", category: "Security", desc: "AI-powered scanning for hardcoded secrets, unsafe patterns, and vulnerabilities across the codebase." },
  { id: "capability-gates", name: "Capability Gates", tag: "Permissions", category: "Security", desc: "Explicit per-session permission checks for directory, shell, and network access." },
];

export default function RuxPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = features.filter(
    (f) => activeCategory === "All" || f.category === activeCategory
  );

  return (
    <>
      <Hero />

      {/* ── Header ── */}
      <section
        className="relative pt-28 sm:pt-32 md:pt-36 pb-10"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in srgb, var(--page-bg) 92%, #486985 8%) 0%, color-mix(in srgb, var(--page-bg) 95%, #7d4835 5%) 40%, var(--page-bg) 100%)",
        }}
      >
        <div className="grid-overlay" />
        <div className="section-container relative z-10">
          <ScrollReveal>
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div className="max-w-3xl">
                <p
                  className="mb-4 text-[10px] font-semibold uppercase tracking-[0.16em]"
                  style={{ color: "var(--subtle-text)" }}
                >
                  RUX — Agentic Development Environment
                </p>
                <h1
                  className="text-balance"
                  style={{
                    fontFamily: "var(--font-waldenburg)",
                    fontSize: "clamp(2rem, 4vw, 3.15rem)",
                    fontWeight: 500,
                    letterSpacing: "-0.03em",
                    lineHeight: 1.08,
                    color: "var(--heading-color)",
                  }}
                >
                  Every tool. Every model.{" "}
                  <span
                    style={{
                      fontFamily: "'Instrument Serif', serif",
                      fontStyle: "italic",
                      background: "linear-gradient(135deg, #C68B59 0%, #545B8C 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    One engine.
                  </span>
                </h1>
                <p
                  className="mt-5 max-w-xl"
                  style={{ color: "var(--muted-text)", lineHeight: 1.68, fontSize: "0.95rem" }}
                >
                  RUX is a sovereign, AI-native development environment. A single Rust-powered core
                  unifying every model, agent, editor, and security layer you need to ship.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
        <div className="section-container mt-10">
          <div className="section-divider" />
        </div>
      </section>

      {/* ── Infinite Logo Ticker Section ── */}
      <section className="relative py-6 bg-transparent overflow-hidden select-none">
        <div className="max-w-6xl lg:max-w-[90vw] mx-auto px-4 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400/60 dark:text-gray-500/60 mb-6">
            TRUSTED BY TEAMS BUILDING WITH INTENT
          </p>
          
          <div className="relative w-full overflow-hidden flex items-center">
            {/* Fade gradients on side edges for a premium look */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--page-bg)] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--page-bg)] to-transparent z-10 pointer-events-none" />
            
            <div className="animate-marquee flex items-center gap-16 py-2">
              {[
                "TantriX", "AWS", "Plaur", "Osmium AI", "HomeGuru", 
                "NineOne152", "Navchetna Technologies", "Kriya", "Natraj", "Plenora",
                "TantriX", "AWS", "Plaur", "Osmium AI", "HomeGuru", 
                "NineOne152", "Navchetna Technologies", "Kriya", "Natraj", "Plenora"
              ].map((logo, idx) => (
                <span
                  key={idx}
                  className="text-gray-400/50 dark:text-gray-500/40 font-medium tracking-widest text-[14.5px] hover:text-black dark:hover:text-white transition-all duration-300 whitespace-nowrap cursor-default"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 25s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* ── Features Grid ── */}
      <section
        id="capabilities"
        className="relative overflow-hidden py-8 md:py-14"
        style={{ background: "var(--page-bg)" }}
      >
        <div className="section-container">
          {/* Header + Filter */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p
                className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em]"
                style={{ color: "var(--subtle-text)" }}
              >
                Capabilities
              </p>
              <h2 className="section-heading">What RUX can do</h2>
            </div>

            {/* Segmented filter */}
            <div className="w-full sm:w-auto overflow-x-auto pb-1 -mx-1 px-1">
              <div
                className="relative flex rounded-full p-1 w-max"
                style={{
                  background: "var(--border-subtle)",
                  boxShadow: "inset 0 0 0 1px var(--border-subtle)",
                }}
              >
                <div className="flex gap-0.5">
                  {categories.map((cat) => {
                    const isActive = activeCategory === cat;
                    return (
                      <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className="isolate relative flex items-center justify-center cursor-pointer shrink-0 outline-none rounded-full h-8 px-4 transition-all duration-200"
                      >
                        {isActive && (
                          <div
                            className="absolute inset-0 -z-10 rounded-full"
                            style={{
                              background: "var(--card-bg)",
                              boxShadow: "0 0 0 1px var(--border-subtle), 0 2px 6px rgba(0,0,0,0.10)",
                            }}
                          />
                        )}
                        <span
                          className="relative text-[12.5px] font-medium tracking-tight transition-colors duration-200"
                          style={{ color: isActive ? "var(--heading-color)" : "var(--muted-text)" }}
                        >
                          {cat}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3"
            style={{ border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", overflow: "hidden" }}
          >
            {filtered.map((f, i) => (
              <ScrollReveal key={f.id} delay={i * 30}>
                <div
                  className="group flex flex-col gap-3 p-6 h-full transition-colors duration-200"
                  style={{
                    background: "var(--page-bg)",
                    borderRight: "1px solid var(--border-subtle)",
                    borderBottom: "1px solid var(--border-subtle)",
                  }}
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3
                      style={{
                        fontFamily: "var(--font-waldenburg)",
                        fontSize: "1rem",
                        fontWeight: 500,
                        letterSpacing: "-0.015em",
                        color: "var(--heading-color)",
                        lineHeight: 1.3,
                      }}
                    >
                      {f.name}
                    </h3>
                    <span
                      className="shrink-0 rounded-full px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider"
                      style={{
                        background: "rgba(125,72,53,0.07)",
                        color: "var(--color-brand)",
                        border: "1px solid rgba(125,72,53,0.12)",
                      }}
                    >
                      {f.tag}
                    </span>
                  </div>
                  <p
                    style={{
                      color: "var(--muted-text)",
                      fontSize: "0.875rem",
                      lineHeight: 1.65,
                    }}
                  >
                    {f.desc}
                  </p>
                  <p
                    className="mt-auto text-[10px] font-semibold uppercase tracking-widest"
                    style={{ color: "var(--subtle-text)" }}
                  >
                    {f.category}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

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
                  RUX runs entirely on your machine. Your keys, your models, your data — always.
                </p>
                <a
                  href="/get-started"
                  className="inline-flex items-center justify-center rounded-full px-6 text-sm font-semibold transition-colors"
                  style={{
                    height: "2.5rem",
                    background: "var(--heading-color)",
                    color: "var(--page-bg)",
                  }}
                >
                  Get Early Access
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
