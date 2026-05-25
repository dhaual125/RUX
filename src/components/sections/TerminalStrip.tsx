export function TerminalStrip() {
  const items = [
    { cmd: "forge init", desc: "Project scaffolded in 0.3s" },
    { cmd: "Agent", desc: "plan → act → observe → reflect" },
    { cmd: "$ rux --model ollama:llama3", desc: "Zero data leaves machine" },
    { cmd: "Aegis Auth", desc: "IAM layer locked" },
    { cmd: "Multi-agent", desc: "4 agents spawned" },
    { cmd: "Rollback", desc: "File state restored" },
  ];

  return (
    <section 
      className="relative overflow-hidden select-none"
      style={{
        background: "var(--card-bg)",
        borderTop: "1px solid var(--border-default)",
        borderBottom: "1px solid var(--border-default)",
        padding: "16px 0",
      }}
    >
      <div className="relative w-full flex items-center">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--page-bg)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--page-bg)] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-16 py-2">
          {/* We duplicate the items a few times to ensure smooth infinite scrolling */}
          {[...items, ...items, ...items, ...items].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 whitespace-nowrap cursor-default"
              style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "12px",
                color: "var(--muted-text)",
              }}
            >
              <span style={{ color: "var(--heading-color)", fontWeight: 500 }}>
                {item.cmd}
              </span>
              <span style={{ opacity: 0.5 }}>→</span>
              <span>{item.desc}</span>
            </div>
          ))}
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
          animation: marquee 35s linear infinite;
        }
      `}</style>
    </section>
  );
}
