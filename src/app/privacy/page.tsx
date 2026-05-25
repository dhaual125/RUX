import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Privacy Policy — RUX",
  description: "Privacy Policy for RUX, an AI-native development environment by Navchetna Technologies.",
};

const sections = [
  {
    title: "1. Information Collection",
    content: [
      "We collect information you provide directly, including account details when signing up, using RUX services, or contacting support.",
      "Automatically collected data includes device information, usage patterns, and technical details necessary for service operation. RUX never collects your source code or API keys.",
    ],
  },
  {
    title: "2. Use of Information",
    content: [
      "Information is used to provide, maintain, and improve RUX services, process requests, and communicate with users.",
      "We analyze anonymized usage data to enhance the developer experience and develop new features while maintaining strict privacy standards.",
    ],
  },
  {
    title: "3. Information Sharing",
    content: [
      "Personal information is not sold or shared with third parties except as necessary for service provision or legal compliance.",
      "We may share aggregated, non-personally identifiable information for business purposes.",
    ],
  },
  {
    title: "4. Local-First & Data Security",
    content: [
      "RUX is designed local-first. Your API keys are stored only on your machine and are never transmitted to RUX servers.",
      "We implement industry-standard security measures to protect any personal information against unauthorized access, alteration, or destruction.",
    ],
  },
  {
    title: "5. User Rights",
    content: [
      "Users have the right to access, correct, or delete personal information, subject to legal and operational requirements.",
      "Requests can be submitted through our contact channels and will be processed within reasonable timeframes.",
    ],
  },
  {
    title: "6. Contact Information",
    content: ["For privacy-related inquiries, contact us at hello@navchetna.tech"],
  },
];

export default function PrivacyPage() {
  return (
    <main style={{ background: "var(--page-bg)" }} className="min-h-screen">
      <section
        className="relative border-b pt-28 pb-12 md:pt-36 md:pb-16"
        style={{ borderColor: "var(--border-default)" }}
      >
        <div className="grid-overlay" />
        <div className="section-container relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span
                className="mb-4 inline-flex rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em]"
                style={{ border: "1px solid var(--border-subtle)", color: "var(--subtle-text)" }}
              >
                Legal
              </span>
              <h1
                className="text-balance"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  fontWeight: 400,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.05,
                  color: "var(--heading-color)",
                }}
              >
                Privacy{" "}
                <span
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontStyle: "italic",
                    background: "linear-gradient(135deg, #C68B59 0%, #545B8C 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Policy.
                </span>
              </h1>
              <p className="mt-6 text-[16px]" style={{ color: "var(--muted-text)", lineHeight: 1.7 }}>
                Effective Date: January 1, 2025
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-14 md:py-24">
        <div className="section-container">
          <div className="mx-auto max-w-3xl flex flex-col gap-12">
            {sections.map((sec, i) => (
              <ScrollReveal key={i} delay={i * 20}>
                <div>
                  <h2
                    className="mb-4 text-2xl"
                    style={{
                      fontFamily: "var(--font-heading)",
                      letterSpacing: "-0.02em",
                      fontWeight: 500,
                      color: "var(--heading-color)",
                    }}
                  >
                    {sec.title}
                  </h2>
                  <div className="flex flex-col gap-4">
                    {sec.content.map((paragraph, pIdx) => (
                      <p
                        key={pIdx}
                        style={{ color: "var(--muted-text)", lineHeight: 1.7, fontSize: "0.98rem" }}
                      >
                        {paragraph.includes("hello@navchetna.tech") ? (
                          <>
                            For privacy-related inquiries, contact us at{" "}
                            <a
                              href="mailto:hello@navchetna.tech"
                              style={{ color: "var(--heading-color)", textDecoration: "underline", textUnderlineOffset: "4px" }}
                            >
                              hello@navchetna.tech
                            </a>
                            .
                          </>
                        ) : (
                          paragraph
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

