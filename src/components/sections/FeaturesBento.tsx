"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  ArrowsClockwise,
  TreeStructure,
  ChatsCircle,
  PlugsConnected,
  Brain,
} from "@phosphor-icons/react";
import type { ReactNode } from "react";
import {
  AgentLoopIllu,
  RustCoreIllu,
  SecurityIllu,
  ModelRouterIllu,
  ConsensusIllu,
  AstIllu,
  WhatsAppIllu,
  McpIllu,
} from "./feature-illustrations";

type FeatureCard = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  illustration: ReactNode;
  icon?: ReactNode;
  className?: string;
};

const PRIMARY_MODELS = ["OpenAI", "Anthropic", "Gemini"];
const MORE_MODELS = ["Groq", "Mistral", "Ollama", "LM Studio", "+ any OpenAI-compat"];

function FormatCard({ eyebrow, title, description, illustration, className = "" }: FeatureCard) {
  return (
    <div className={`lm-format-card ${className}`}>
      <div className="lm-format-illo">{illustration}</div>
      <div className="lm-format-body">
        <span className="lm-card-eyebrow">{eyebrow}</span>
        <h3 className="lm-card-title">{title}</h3>
        <p className="lm-card-desc">{description}</p>
      </div>
    </div>
  );
}

function IconFeatureCard({ eyebrow, title, description, illustration, icon }: FeatureCard) {
  return (
    <div className="lm-format-card">
      <div className="lm-format-illo lm-format-illo--compact">{illustration}</div>
      <div className="lm-format-body">
        {icon && <div className="lm-icon-box">{icon}</div>}
        <span className="lm-card-eyebrow">{eyebrow}</span>
        <h3 className="lm-card-title">{title}</h3>
        <p className="lm-card-desc">{description}</p>
      </div>
    </div>
  );
}

export function FeaturesBento() {
  return (
    <section className="relative py-16 md:py-24 bg-transparent">
      <div className="section-sep" />

      <div className="section-container">
        <ScrollReveal>
          <div className="mb-10">
            <p className="section-eyebrow mb-4">Feature Density</p>
            <h2 className="section-heading mb-4 text-balance">
              Everything you need. <br />
              <span className="serif-italic">Nothing you don&apos;t.</span>
            </h2>
            <div className="section-divider" />
          </div>
        </ScrollReveal>

        {/* Row 1 — illustrated cards (LM formats style) */}
        <div className="formats-grid mb-3">
          <ScrollReveal delay={0}>
            <FormatCard
              eyebrow="Agent Loop"
              title={
                <>
                  Autonomous execution
                  <br />
                  until complete
                </>
              }
              description="Plan → Act → Observe → Reflect — the full agentic loop with checkpoints and rollback."
              illustration={<AgentLoopIllu className="lm-illo-svg" />}
            />
          </ScrollReveal>
          <ScrollReveal delay={50}>
            <FormatCard
              eyebrow="Rust Core"
              title={
                <>
                  One binary.
                  <br />
                  All platforms.
                </>
              }
              description="A single cross-platform Rust binary runs identically on macOS, Linux, and Windows."
              illustration={<RustCoreIllu className="lm-illo-svg" />}
            />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <FormatCard
              eyebrow="Security"
              title="Aegis Auth Gateway"
              description="Unified IAM layer in Rust. Capability gates, secrets detection, local-only mode."
              illustration={<SecurityIllu className="lm-illo-svg" />}
            />
          </ScrollReveal>
        </div>

        {/* Model Support — full-width bento (LM API card style) */}
        <ScrollReveal delay={120}>
          <div className="lm-bento-wide mb-3">
            <div className="lm-bento-wide-inner">
              <div className="lm-bento-wide-illo">
                <ModelRouterIllu className="lm-illo-svg" />
              </div>
              <div className="lm-bento-wide-content">
                <span className="lm-card-eyebrow">Model Support</span>
                <h3 className="lm-bento-title">
                  Every provider. <span className="serif-italic">Smart routing.</span>
                </h3>
                <p className="lm-card-desc lm-card-desc--wide">
                  Auto-routes tasks to the optimal model — fast models for autocomplete, heavy models for
                  architecture — with automatic failover chains.
                </p>
                <div className="lm-pill-row">
                  {PRIMARY_MODELS.map((m) => (
                    <span key={m} className="lm-pill lm-pill--filled">
                      {m}
                    </span>
                  ))}
                  {MORE_MODELS.map((m) => (
                    <span key={m} className="lm-pill">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Row 3 — four feature cards */}
        <div className="formats-grid">
          <ScrollReveal delay={0}>
            <IconFeatureCard
              eyebrow="Intelligence"
              title="Multi-Model Consensus"
              description="Prompt multiple models simultaneously. Synthesize the best combined answer from divergent outputs."
              illustration={<ConsensusIllu className="lm-illo-svg" />}
              icon={<Brain size={22} weight="duotone" />}
            />
          </ScrollReveal>
          <ScrollReveal delay={50}>
            <IconFeatureCard
              eyebrow="Codebase"
              title="AST-Aware Context"
              description="Tree-sitter parsing that understands functions, not flat text."
              illustration={<AstIllu className="lm-illo-svg" />}
              icon={<TreeStructure size={22} weight="duotone" />}
            />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <IconFeatureCard
              eyebrow="Developer Experience"
              title={'"Openclaws" WhatsApp CLI'}
              description="Execute code, initialize projects, and trigger automations via WhatsApp text messages. Remote dev, redefined."
              illustration={<WhatsAppIllu className="lm-illo-svg" />}
              icon={<ChatsCircle size={22} weight="duotone" />}
            />
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <IconFeatureCard
              eyebrow="Extensions"
              title="MCP Marketplace"
              description="Browse and install community MCP servers — Slack, Linear, databases, file systems — all live without a restart."
              illustration={<McpIllu className="lm-illo-svg" />}
              icon={<PlugsConnected size={22} weight="duotone" />}
            />
          </ScrollReveal>
        </div>

        {/* Agent loop code snippet card — LM API code block style */}
        <ScrollReveal delay={180} className="mt-3">
          <div className="lm-bento-code">
            <div className="lm-bento-code-header">
              <div className="lm-icon-box">
                <ArrowsClockwise size={22} weight="duotone" />
              </div>
              <div>
                <span className="lm-card-eyebrow">Agent Loop</span>
                <p className="lm-card-desc" style={{ margin: 0 }}>
                  Plan → Act → Observe → Reflect
                </p>
              </div>
            </div>
            <pre className="lm-code-block">
              <code>
                <span className="lm-code-kw">fn</span> agent_loop(task: Task) -&gt; Result {"{"}
                {"\n"}  <span className="lm-code-kw">loop</span> {"{"}
                {"\n"}    <span className="lm-code-kw">let</span> plan = model.plan(&amp;task)?;
                {"\n"}    <span className="lm-code-kw">let</span> action = agent.act(&amp;plan)?;
                {"\n"}    <span className="lm-code-kw">let</span> obs = env.observe(&amp;action)?;
                {"\n"}    <span className="lm-code-kw">if</span> agent.reflect(&amp;obs).done {"{"} <span className="lm-code-kw">break</span> {"}"}
                {"\n"}  {"}"}
                {"\n"}{"}"}
              </code>
            </pre>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
