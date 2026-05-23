"use client";

import { useTheme } from "./ThemeProvider";

const options = [
  { value: "system" as const, label: "SYSTEM" },
  { value: "light" as const, label: "LIGHT" },
  { value: "dark" as const, label: "DARK" },
];

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className="inline-flex items-center rounded-full p-[3px] transition-all duration-300"
      style={{
        background: "var(--border-subtle)",
        border: "1px solid var(--border-subtle)",
      }}
    >
      {options.map((opt) => {
        const isActive = theme === opt.value;
        return (
          <button
            key={opt.value}
            onClick={() => setTheme(opt.value)}
            className="relative flex items-center justify-center rounded-full transition-all duration-200 cursor-pointer outline-none"
            style={{
              height: "24px",
              padding: "0 12px",
              background: isActive 
                ? "var(--card-bg)" 
                : "transparent",
              border: isActive 
                ? "1px solid var(--border-subtle)" 
                : "1px solid transparent",
              boxShadow: isActive ? "0 1px 3px rgba(0, 0, 0, 0.08)" : "none",
            }}
          >
            <span
              className="text-[9px] tracking-[0.08em] transition-colors duration-200"
              style={{
                fontWeight: isActive ? 700 : 500,
                color: isActive 
                  ? "var(--heading-color)" 
                  : "var(--muted-text)",
              }}
            >
              {opt.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

