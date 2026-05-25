import type { SVGProps } from "react";

type IlluProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 280 200",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
} as const;

export function AgentLoopIllu(props: IlluProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="140" cy="100" r="58" stroke="currentColor" strokeWidth="0.7" strokeDasharray="4 3" opacity={0.2} />
      <path d="M140 42 A58 58 0 0 1 198 100" stroke="currentColor" strokeWidth="1.4" />
      <path d="M198 100 A58 58 0 0 1 140 158" stroke="currentColor" strokeWidth="1.4" opacity={0.55} />
      <path d="M140 158 A58 58 0 0 1 82 100" stroke="currentColor" strokeWidth="1.4" opacity={0.55} />
      <path d="M82 100 A58 58 0 0 1 140 42" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 3" opacity={0.35} />
      <polygon points="192,96 204,100 192,104" fill="currentColor" opacity={0.7} />
      <rect x="118" y="88" width="44" height="24" rx="4" stroke="currentColor" strokeWidth="1.2" />
      <line x1="126" y1="96" x2="154" y2="96" stroke="currentColor" strokeWidth="0.8" opacity={0.6} />
      <line x1="126" y1="104" x2="146" y2="104" stroke="currentColor" strokeWidth="0.7" strokeDasharray="3 2" opacity={0.4} />
      <circle cx="140" cy="100" r="6" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export function RustCoreIllu(props: IlluProps) {
  return (
    <svg {...base} {...props}>
      <rect x="95" y="55" width="90" height="90" rx="8" stroke="currentColor" strokeWidth="1.3" />
      <path d="M95 85 H185" stroke="currentColor" strokeWidth="0.8" opacity={0.4} />
      <path d="M95 115 H185" stroke="currentColor" strokeWidth="0.8" opacity={0.4} />
      <path d="M125 55 V145" stroke="currentColor" strokeWidth="0.8" opacity={0.4} />
      <path d="M155 55 V145" stroke="currentColor" strokeWidth="0.8" opacity={0.4} />
      <circle cx="110" cy="70" r="4" fill="currentColor" opacity={0.25} />
      <circle cx="170" cy="100" r="4" fill="currentColor" opacity={0.25} />
      <circle cx="110" cy="130" r="4" fill="currentColor" opacity={0.25} />
      <rect x="72" y="72" width="36" height="56" rx="4" stroke="currentColor" strokeWidth="0.9" opacity={0.35} />
      <rect x="172" y="72" width="36" height="56" rx="4" stroke="currentColor" strokeWidth="0.9" opacity={0.35} />
      <path d="M108 72 L140 55 L172 72" stroke="currentColor" strokeWidth="0.6" strokeDasharray="3 2" opacity={0.2} />
    </svg>
  );
}

export function SecurityIllu(props: IlluProps) {
  return (
    <svg {...base} {...props}>
      <path d="M140 38 L200 62 V108 C200 138 140 162 140 162 C140 162 80 138 80 108 V62 Z" stroke="currentColor" strokeWidth="1.3" />
      <path d="M140 38 L80 62 V108 C80 138 140 162 140 162" stroke="currentColor" strokeWidth="0.6" strokeDasharray="3 2" opacity={0.2} />
      <rect x="122" y="88" width="36" height="42" rx="6" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="140" cy="104" r="6" stroke="currentColor" strokeWidth="1" />
      <line x1="140" y1="110" x2="140" y2="122" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M108 128 H172" stroke="currentColor" strokeWidth="0.7" opacity={0.35} />
    </svg>
  );
}

export function ModelRouterIllu(props: IlluProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="140" cy="100" r="22" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="70" cy="70" r="14" stroke="currentColor" strokeWidth="1" opacity={0.55} />
      <circle cx="210" cy="70" r="14" stroke="currentColor" strokeWidth="1" opacity={0.55} />
      <circle cx="70" cy="130" r="14" stroke="currentColor" strokeWidth="1" opacity={0.55} />
      <circle cx="210" cy="130" r="14" stroke="currentColor" strokeWidth="1" opacity={0.55} />
      <line x1="84" y1="78" x2="122" y2="92" stroke="currentColor" strokeWidth="0.8" opacity={0.5} />
      <line x1="196" y1="78" x2="158" y2="92" stroke="currentColor" strokeWidth="0.8" opacity={0.5} />
      <line x1="84" y1="122" x2="122" y2="108" stroke="currentColor" strokeWidth="0.8" opacity={0.5} />
      <line x1="196" y1="122" x2="158" y2="108" stroke="currentColor" strokeWidth="0.8" opacity={0.5} />
      <circle cx="140" cy="100" r="4" fill="currentColor" opacity={0.35} />
    </svg>
  );
}

export function ConsensusIllu(props: IlluProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="95" cy="88" r="28" stroke="currentColor" strokeWidth="1.1" opacity={0.45} />
      <circle cx="185" cy="88" r="28" stroke="currentColor" strokeWidth="1.1" opacity={0.45} />
      <circle cx="140" cy="128" r="28" stroke="currentColor" strokeWidth="1.1" opacity={0.45} />
      <path d="M115 100 L140 115 L165 100" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="140" cy="100" r="18" stroke="currentColor" strokeWidth="1.3" />
      <path d="M132 100 L138 106 L150 94" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AstIllu(props: IlluProps) {
  return (
    <svg {...base} {...props}>
      <line x1="140" y1="40" x2="140" y2="160" stroke="currentColor" strokeWidth="1" opacity={0.35} />
      <line x1="140" y1="70" x2="90" y2="110" stroke="currentColor" strokeWidth="1" opacity={0.5} />
      <line x1="140" y1="70" x2="190" y2="110" stroke="currentColor" strokeWidth="1" opacity={0.5} />
      <line x1="90" y1="110" x2="65" y2="150" stroke="currentColor" strokeWidth="0.8" opacity={0.4} />
      <line x1="90" y1="110" x2="115" y2="150" stroke="currentColor" strokeWidth="0.8" opacity={0.4} />
      <line x1="190" y1="110" x2="165" y2="150" stroke="currentColor" strokeWidth="0.8" opacity={0.4} />
      <line x1="190" y1="110" x2="215" y2="150" stroke="currentColor" strokeWidth="0.8" opacity={0.4} />
      <circle cx="140" cy="40" r="5" fill="currentColor" opacity={0.5} />
      <circle cx="90" cy="110" r="4" fill="currentColor" opacity={0.3} />
      <circle cx="190" cy="110" r="4" fill="currentColor" opacity={0.3} />
      <rect x="118" y="32" width="44" height="10" rx="2" fill="currentColor" opacity={0.12} />
    </svg>
  );
}

export function WhatsAppIllu(props: IlluProps) {
  return (
    <svg {...base} {...props}>
      <rect x="100" y="32" width="80" height="136" rx="14" stroke="currentColor" strokeWidth="1.3" />
      <rect x="108" y="48" width="64" height="96" rx="6" stroke="currentColor" strokeWidth="0.7" strokeDasharray="3 2" opacity={0.25} />
      <rect x="116" y="62" width="36" height="8" rx="3" fill="currentColor" opacity={0.15} />
      <rect x="116" y="78" width="48" height="8" rx="3" fill="currentColor" opacity={0.12} />
      <rect x="132" y="94" width="32" height="8" rx="3" fill="currentColor" opacity={0.18} />
      <rect x="116" y="110" width="40" height="8" rx="3" fill="currentColor" opacity={0.12} />
      <circle cx="140" cy="152" r="3" fill="currentColor" opacity={0.25} />
      <path d="M168 118 L188 128 L168 138 Z" stroke="currentColor" strokeWidth="1" fill="none" opacity={0.4} />
    </svg>
  );
}

export function McpIllu(props: IlluProps) {
  return (
    <svg {...base} {...props}>
      <rect x="70" y="50" width="55" height="55" rx="8" stroke="currentColor" strokeWidth="1.2" />
      <rect x="155" y="50" width="55" height="55" rx="8" stroke="currentColor" strokeWidth="1.2" />
      <rect x="70" y="115" width="55" height="55" rx="8" stroke="currentColor" strokeWidth="1.2" opacity={0.55} />
      <rect x="155" y="115" width="55" height="55" rx="8" stroke="currentColor" strokeWidth="1.2" opacity={0.55} />
      <line x1="125" y1="77" x2="155" y2="77" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 2" opacity={0.35} />
      <line x1="97" y1="105" x2="97" y2="115" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 2" opacity={0.35} />
      <circle cx="97" cy="77" r="4" fill="currentColor" opacity={0.25} />
      <circle cx="182" cy="77" r="4" fill="currentColor" opacity={0.25} />
      <path d="M168 142 L182 152 L168 162" stroke="currentColor" strokeWidth="1" opacity={0.5} />
    </svg>
  );
}

export function ArchStackIllu(props: IlluProps) {
  return (
    <svg {...base} {...props}>
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <rect
          key={i}
          x={60 + i * 4}
          y={30 + i * 18}
          width={160 - i * 8}
          height={14}
          rx={3}
          stroke="currentColor"
          strokeWidth={i === 6 ? 1.3 : 0.9}
          fill={i === 6 ? "currentColor" : "none"}
          fillOpacity={i === 6 ? 0.08 : 0}
          opacity={0.35 + (i === 6 ? 0.45 : 0)}
        />
      ))}
    </svg>
  );
}
