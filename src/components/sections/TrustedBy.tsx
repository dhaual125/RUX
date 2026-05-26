const logos = [
  { src: "/aws.svg", alt: "AWS", height: 42 },
  { src: "/nvidia-inception.svg", alt: "NVIDIA Inception", height: 38 },
  { src: "/dpiit.png", alt: "DPIIT", height: 36 },
  { src: "/plaur.svg", alt: "Plaur", height: 30 },
  { src: "/homeguru.svg", alt: "HomeGuru", height: 34 },
];

const track = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

export function TrustedBy() {
  return (
    <section
      style={{
        padding: "clamp(1.5rem, 4vw, 2.5rem) 0",
        borderBottom: "1px solid var(--border-default)",
        background: "var(--page-bg)",
        transition: "background 0.35s ease, border-color 0.35s ease",
      }}
    >
      <div className="section-container" style={{ marginBottom: "1.25rem" }}>
        <p className="section-eyebrow" style={{ textAlign: "center" }}>
          Trusted by teams building with intent
        </p>
      </div>

      <div className="rux-ticker-wrap">
        <div className="rux-ticker-track">
          {track.map((logo, idx) => (
            <img
              key={idx}
              src={logo.src}
              alt={logo.alt}
              className="rux-ticker-logo"
              style={{ height: `${logo.height}px`, width: "auto" }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes rux-ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .rux-ticker-wrap {
          overflow: hidden;
          -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
          mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
        }
        .rux-ticker-wrap:hover .rux-ticker-track {
          animation-play-state: paused;
        }
        .rux-ticker-track {
          display: flex;
          align-items: center;
          gap: 4.5rem;
          padding-right: 4.5rem;
          width: max-content;
          animation: rux-ticker 60s linear infinite;
        }
        .rux-ticker-logo {
          flex-shrink: 0;
          filter: grayscale(100%) opacity(0.35);
          transition: filter 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.3s ease;
        }
        .dark .rux-ticker-logo {
          filter: invert(1) grayscale(100%) opacity(0.5);
        }
        .rux-ticker-logo:hover {
          filter: grayscale(0%) opacity(1);
          transform: scale(1.04);
        }
        .dark .rux-ticker-logo:hover {
          filter: invert(1) grayscale(0%) opacity(1);
        }
      `}</style>
    </section>
  );
}
