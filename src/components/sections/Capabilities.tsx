"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Icon } from "@phosphor-icons/react";
import {
  ArrowsClockwise,
  CloudArrowUp,
  Gear,
  Plugs,
  FileCode,
  Cube,
  Robot,
  Shuffle,
  HardDrive,
  ArrowBendUpLeft,
  Sliders,
  ChartLine,
  Key,
  GitMerge,
  ArrowsCounterClockwise,
  UsersThree,
  UserCheck,
  ClockCounterClockwise,
  ClipboardText,
  UserGear,
  GraduationCap,
  DeviceMobile,
  MagnifyingGlass,
  Code,
  Stethoscope,
  Files,
  TextAa,
  Eye,
  TestTube,
  Globe,
  ShieldStar,
  Warning,
  Lock,
  Bug,
  Fingerprint,
  ArrowUpRight,
  BookOpen,
} from "@phosphor-icons/react";

/* ─── Types ─────────────────────────────────────────────────────────────── */

type Feature = {
  icon: Icon;
  tag: string;
  name: string;
  desc: string;
};

type Category = {
  id: string;
  label: string;
  desc: string;
  features: Feature[];
};

/* ─── Data ───────────────────────────────────────────────────────────────── */

const categories: Category[] = [
  {
    id: "platform",
    label: "Platform",
    desc: "The sovereign foundation — synchronized state, GPU cloud, MCP servers, and full configurability in one Rust core.",
    features: [
      {
        icon: ArrowsClockwise,
        tag: "Real-time Sync",
        name: "Omni-Sync Engine",
        desc: "Real-time, zero-latency state synchronization bridging macOS, Windows, Linux, and mobile web browsers natively.",
      },
      {
        icon: CloudArrowUp,
        tag: "GPU Cloud",
        name: "Project Vajra Pipeline",
        desc: "One-click deployment of ML functions and LLMs directly to a sovereign serverless GPU cloud.",
      },
      {
        icon: Gear,
        tag: "Orchestration",
        name: "NAVHUB Orchestration",
        desc: "Direct integration to manage cross-platform states, API keys, and B2B tenant routing.",
      },
      {
        icon: Plugs,
        tag: "MCP",
        name: "Any MCP Server",
        desc: "Native connection to any MCP-compatible server — file, database, Slack, Linear, and more. Hot-reload without restarting.",
      },
      {
        icon: FileCode,
        tag: "Configuration",
        name: "TOML Config",
        desc: "Complete configuration of models, tools, and permissions in a single TOML file. Workspace profiles for monorepos and microservices.",
      },
      {
        icon: Cube,
        tag: "Extensibility",
        name: "WASM Plugins",
        desc: "Extend RUX with plugins written in any language that compiles to WASM. Define custom tools and prompt templates.",
      },
    ],
  },
  {
    id: "ai-models",
    label: "AI Models",
    desc: "Every major model, every provider — smart routing, local execution, cost tracking, and multi-model consensus built in.",
    features: [
      {
        icon: Robot,
        tag: "Multi-Provider",
        name: "Any LLM, Any Provider",
        desc: "Support for OpenAI, Anthropic, Gemini, Mistral, Groq, Ollama, LM Studio, and any OpenAI-compatible endpoint.",
      },
      {
        icon: Shuffle,
        tag: "Auto-Routing",
        name: "Smart Model Routing",
        desc: "Auto-routes tasks to the optimal model — fast model for autocomplete, heavy model for architecture decisions.",
      },
      {
        icon: HardDrive,
        tag: "Offline",
        name: "Local Model Support",
        desc: "Fully offline execution of Ollama, llama.cpp, and LM Studio. Zero data leaves the machine.",
      },
      {
        icon: ArrowBendUpLeft,
        tag: "Reliability",
        name: "Model Fallback Chains",
        desc: "Automatic failover to backup models if a provider is rate-limited or down.",
      },
      {
        icon: Sliders,
        tag: "Granular Control",
        name: "Per-Task Model Config",
        desc: "Assign different models independently for chat, autocomplete, embeddings, and summarization.",
      },
      {
        icon: ChartLine,
        tag: "Monitoring",
        name: "Cost Tracking",
        desc: "Per-session and per-provider token cost monitoring dashboards with streaming responses across all providers.",
      },
      {
        icon: Key,
        tag: "BYOK",
        name: "Bring Your Own Key",
        desc: "Local storage of API keys — they are never sent to external servers.",
      },
      {
        icon: GitMerge,
        tag: "Synthesis",
        name: "Multi-Model Consensus",
        desc: "Prompts multiple models simultaneously and synthesizes the best combined answer.",
      },
    ],
  },
  {
    id: "agents",
    label: "Agents",
    desc: "Autonomous agents that plan, act, and reflect — with concurrency, human oversight, instant rollback, and custom personas.",
    features: [
      {
        icon: ArrowsCounterClockwise,
        tag: "Autonomous",
        name: "Agent Loop",
        desc: "Autonomous plan → act → observe → reflect execution loop that runs until a task is completed.",
      },
      {
        icon: UsersThree,
        tag: "Concurrency",
        name: "Parallel Agents",
        desc: "Spawns multiple AI agents to execute independent subtasks simultaneously and merges results.",
      },
      {
        icon: UserCheck,
        tag: "Safety",
        name: "Human-in-the-Loop",
        desc: "Pauses for user confirmation before executing ambiguous or destructive actions.",
      },
      {
        icon: ClockCounterClockwise,
        tag: "Undo",
        name: "Rollback",
        desc: "Instant undo for any agent action, including file edits, shell commands, and git changes.",
      },
      {
        icon: ClipboardText,
        tag: "Traceability",
        name: "Agent Audit Log",
        desc: "Complete historical trace of every AI decision, tool call, and model response.",
      },
      {
        icon: UserGear,
        tag: "Specialization",
        name: "Custom Agent Personas",
        desc: "Define specialized agents like security reviewers, test writers, or architects.",
      },
      {
        icon: GraduationCap,
        tag: "Embedded AI",
        name: "Osmium AI Tutor Engine",
        desc: "Embedded intelligence that dynamically generates practice environments and learning loops based on your code.",
      },
      {
        icon: DeviceMobile,
        tag: "Remote Execution",
        name: "Openclaws WhatsApp CLI",
        desc: "Remote execution of code, project initialization, and automations via WhatsApp text messages.",
      },
    ],
  },
  {
    id: "editor",
    label: "Editor",
    desc: "Full-spectrum editor intelligence — codebase indexing, 50+ languages, LSP, ghost text, and autonomous test generation.",
    features: [
      {
        icon: MagnifyingGlass,
        tag: "Indexing",
        name: "Codebase Indexing",
        desc: "Always-updated hybrid BM25 and semantic index of the entire repository with AST-aware Tree-sitter parsing.",
      },
      {
        icon: Code,
        tag: "Polyglot",
        name: "50+ Language Support",
        desc: "Native comprehension of Rust, Python, JS/TS, Go, Java, C/C++, Swift, Kotlin, and more.",
      },
      {
        icon: Stethoscope,
        tag: "Live Diagnostics",
        name: "LSP Integration",
        desc: "Hooks into existing language servers to feed live diagnostics and go-to-definitions directly to the AI.",
      },
      {
        icon: Files,
        tag: "Unified Diff",
        name: "Multi-File Edits",
        desc: "Agent edits multiple files in a single operation and displays a unified diff for review, accept, or reject.",
      },
      {
        icon: TextAa,
        tag: "Ghost Text",
        name: "Inline Autocomplete",
        desc: "Context-aware ghost-text completions generated as you type, powered by the full codebase index.",
      },
      {
        icon: Eye,
        tag: "Multimodal",
        name: "LM Lens Integration",
        desc: "Multimodal data harvesting giving agents active vision to read local files and structured data.",
      },
      {
        icon: TestTube,
        tag: "Automated Tests",
        name: "Test Generation",
        desc: "Automated writing of unit, integration, and edge-case tests across the codebase.",
      },
      {
        icon: Globe,
        tag: "Live Context",
        name: "Web Search & URL Fetch",
        desc: "Agent autonomously searches the internet, reads web pages, GitHub issues, and fetches latest library docs.",
      },
    ],
  },
  {
    id: "security",
    label: "Security",
    desc: "Rust-powered security from the ground up — IAM, secrets detection, air-gap mode, SAST scanning, and capability gates.",
    features: [
      {
        icon: ShieldStar,
        tag: "IAM",
        name: "Aegis Auth Gateway",
        desc: "The unified Identity and Access Management layer written in Rust securing the entire environment.",
      },
      {
        icon: Warning,
        tag: "Prevention",
        name: "Secrets Detection",
        desc: "Warning triggers before sending files with API keys or passwords to an LLM.",
      },
      {
        icon: Lock,
        tag: "Air-Gap",
        name: "Local-Only Mode",
        desc: "Hard toggle to force all models to local execution. Zero data leaves the machine.",
      },
      {
        icon: Bug,
        tag: "SAST",
        name: "Security Scan",
        desc: "AI-powered scanning for hardcoded secrets, unsafe patterns, and vulnerabilities across the codebase.",
      },
      {
        icon: Fingerprint,
        tag: "Permissions",
        name: "Capability Gates",
        desc: "Explicit per-session permission checks for directory, shell, and network access.",
      },
    ],
  },
];

/* ─── Component ──────────────────────────────────────────────────────────── */

function CategoryCards({
  cat,
  catIdx,
}: {
  cat: Category;
  catIdx: number;
}) {
  return (
    <div id={`cat-${cat.id}`} className="scroll-mt-4">
      <div className="mb-6 flex items-center gap-3">
        <span
          className="text-[11px] font-bold uppercase tracking-widest"
          style={{ color: "#C68B59" }}
        >
          {String(catIdx + 1).padStart(2, "0")}
        </span>
        <h3
          className="text-lg font-medium tracking-tight"
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--heading-color)",
          }}
        >
          {cat.label}
        </h3>
        <div
          className="h-px flex-grow border-t border-dotted ml-3"
          style={{ borderColor: "var(--border-subtle)", opacity: 0.6 }}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {cat.features.map((feature, i) => {
          const FeatureIcon = feature.icon;
          return (
            <ScrollReveal key={`${cat.id}-${feature.name}`} delay={i * 35}>
              <div
                className="group flex flex-col gap-4 p-5 h-full rounded-sm transition-all duration-200 hover:shadow-sm"
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div
                    className="inline-flex size-9 shrink-0 items-center justify-center rounded-xl"
                    style={{
                      border: "1px solid var(--border-subtle)",
                      background:
                        "linear-gradient(135deg, rgba(198,139,89,0.10) 0%, rgba(84,91,140,0.10) 100%)",
                    }}
                  >
                    <FeatureIcon
                      weight="duotone"
                      className="size-[17px]"
                      style={{ color: "#C68B59" }}
                    />
                  </div>
                  <span
                    className="text-[9px] font-semibold uppercase tracking-[0.14em] pt-1 text-right shrink-0"
                    style={{ color: "var(--subtle-text)" }}
                  >
                    {feature.tag}
                  </span>
                </div>

                <div>
                  <h3
                    className="mb-1.5"
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "0.96rem",
                      fontWeight: 500,
                      letterSpacing: "-0.015em",
                      color: "var(--heading-color)",
                      lineHeight: 1.25,
                    }}
                  >
                    {feature.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.82rem",
                      lineHeight: 1.65,
                      color: "var(--muted-text)",
                    }}
                  >
                    {feature.desc}
                  </p>
                </div>

                <div
                  className="mt-auto pt-3 border-t"
                  style={{ borderColor: "var(--border-subtle)" }}
                >
                  <span
                    className="text-[9px] font-bold uppercase tracking-widest"
                    style={{ color: "var(--subtle-text)" }}
                  >
                    {cat.label}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
}

export function Capabilities() {
  const [active, setActive] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Desktop only: scroll-spy updates active timeline from card scroll
  useEffect(() => {
    if (!isDesktop) return;

    const container = scrollContainerRef.current;
    if (!container) return;

    const observerOptions = {
      root: container,
      rootMargin: "-20% 0px -55% 0px",
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      if (isScrollingRef.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const index = categories.findIndex((cat) => `cat-${cat.id}` === id);
          if (index !== -1) {
            setActive(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    categories.forEach((cat) => {
      const element = document.getElementById(`cat-${cat.id}`);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [isDesktop]);

  const handleNavClick = (index: number, id: string) => {
    setActive(index);

    if (!isDesktop) return;

    const container = scrollContainerRef.current;
    const element = document.getElementById(`cat-${id}`);
    if (container && element) {
      isScrollingRef.current = true;

      const containerTop = container.getBoundingClientRect().top;
      const elementTop = element.getBoundingClientRect().top;
      const scrollTarget = container.scrollTop + (elementTop - containerTop) - 4;

      container.scrollTo({
        top: scrollTarget,
        behavior: "smooth",
      });

      setTimeout(() => {
        isScrollingRef.current = false;
      }, 800);
    }
  };



  return (
    <section
      id="capabilities"
      className="relative py-8 md:py-14"
      style={{ background: "var(--page-bg)" }}
    >
      {/* Dotted top separator */}
      <div className="section-sep" />

      <div className="section-container">

        {/* ── Section Header ── */}
        <ScrollReveal>
          <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p
                className="mb-4 text-[10px] font-semibold uppercase tracking-[0.16em]"
                style={{ color: "var(--subtle-text)" }}
              >
                Capabilities
              </p>
              <h2 className="section-heading">
                Every tool. Every model.{" "}
                <span className="serif-italic">One engine.</span>
              </h2>
            </div>
            <p
              className="max-w-md"
              style={{
                color: "var(--muted-text)",
                lineHeight: 1.68,
                fontSize: "0.94rem",
              }}
            >
              A sovereign, AI-native development environment unifying every
              model, agent, editor, and security layer in one Rust-powered
              engine.
            </p>
          </div>
        </ScrollReveal>

        {/* Dotted horizontal divider */}
        <div className="section-divider mb-10" />

        {/* ── Two-column Layout ── */}
        <div className="grid gap-10 lg:grid-cols-[minmax(220px,0.65fr)_minmax(0,1.35fr)]">

          {/* ── Left: Sticky Category Nav ── */}
          {/* sticky keeps left side stuck to screen if layout overflows elsewhere */}
          <div className="lg:sticky lg:top-28 lg:self-start" style={{ overflow: "visible" }}>

              {/* Category list — dotted border left */}
              <div
                className="flex flex-col gap-5 border-l border-dotted pl-6"
                style={{ borderColor: "var(--border-default)" }}
              >
                {categories.map((cat, index) => (
                  <button
                    key={cat.id}
                    onClick={() => handleNavClick(index, cat.id)}
                    className="text-left relative group w-full"
                  >
                    {/* Indicator dot */}
                    <div
                      className="absolute -left-[27px] top-[7px] h-2 w-2 rounded-full transition-all duration-300"
                      style={{
                        background:
                          active === index ? "#C68B59" : "transparent",
                        border:
                          active === index
                            ? "none"
                            : "1.5px solid var(--border-strong)",
                      }}
                    />

                    {/* Category title */}
                    <h3
                      className="transition-colors duration-300"
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "1.1rem",
                        fontWeight: active === index ? 500 : 400,
                        letterSpacing: "-0.02em",
                        color:
                          active === index
                            ? "var(--heading-color)"
                            : "var(--subtle-text)",
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}. {cat.label}
                    </h3>

                    {/* Expandable description */}
                    <div
                      className="overflow-hidden transition-all duration-300 ease-in-out"
                      style={{
                        maxHeight: active === index ? "120px" : "0px",
                        opacity: active === index ? 1 : 0,
                        marginTop: active === index ? "0.4rem" : "0",
                      }}
                    >
                      <p
                        className="text-[0.82rem] pr-4 leading-[1.65]"
                        style={{ color: "var(--muted-text)" }}
                      >
                        {cat.desc}
                      </p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Divider */}
              <div className="section-divider my-8" />

              {/* Bottom CTAs */}
              <div className="flex flex-col gap-3">
                <Link
                  href="/get-started"
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold transition-opacity hover:opacity-70 w-max"
                  style={{ color: "var(--heading-color)" }}
                >
                  Get started
                  <ArrowUpRight weight="bold" className="size-3.5" />
                </Link>
                <Link
                  href="/get-started"
                  className="inline-flex items-center gap-1.5 text-[13px] font-medium transition-opacity hover:opacity-70 w-max"
                  style={{ color: "var(--muted-text)" }}
                >
                  <BookOpen weight="regular" className="size-3.5" />
                  Explore documentation
                </Link>
            </div>
          </div>

          {/* ── Right: Feature cards (one category on mobile, all on desktop) ── */}
          <div
            ref={scrollContainerRef}
            className="lg:h-[580px] lg:overflow-y-auto custom-scroll flex flex-col gap-14 lg:pr-6 min-h-0"
          >
            <div className="flex flex-col gap-14 capabilities-cards-panel">
              {categories.map((cat, catIdx) => {
                const isActive = catIdx === active;
                return (
                  <div
                    key={cat.id}
                    className={`${isActive ? "block" : "hidden lg:block"} ${
                      isActive ? "capabilities-card-active" : ""
                    }`}
                  >
                    <CategoryCards
                      cat={cat}
                      catIdx={catIdx}
                    />
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .custom-scroll {
          scrollbar-width: thin;
          scrollbar-color: rgba(198, 139, 89, 0.25) transparent;
        }
        .custom-scroll::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background-color: rgba(198, 139, 89, 0.25);
          border-radius: 20px;
        }
        .custom-scroll::-webkit-scrollbar-thumb:hover {
          background-color: rgba(198, 139, 89, 0.5);
        }
        @media (max-width: 1023px) {
          .capabilities-cards-panel {
            animation: capabilitiesFadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .capabilities-card-active {
            animation: capabilitiesFadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          }
        }
        @keyframes capabilitiesFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

