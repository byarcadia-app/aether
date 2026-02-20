import type { Config } from "tailwindcss";

export const preset = {
  darkMode: "class",
  content: [],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        surface: {
          DEFAULT: "var(--color-surface)",
          foreground: "var(--color-surface-foreground)",
        },
        overlay: {
          DEFAULT: "var(--color-overlay)",
          foreground: "var(--color-overlay-foreground)",
        },
        primary: {
          DEFAULT: "var(--color-primary)",
          foreground: "var(--color-primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          foreground: "var(--color-secondary-foreground)",
        },
        success: {
          DEFAULT: "var(--color-success)",
          foreground: "var(--color-success-foreground)",
        },
        warning: {
          DEFAULT: "var(--color-warning)",
          foreground: "var(--color-warning-foreground)",
        },
        danger: {
          DEFAULT: "var(--color-danger)",
          foreground: "var(--color-danger-foreground)",
        },
        info: {
          DEFAULT: "var(--color-info)",
          foreground: "var(--color-info-foreground)",
        },
        muted: {
          DEFAULT: "var(--color-muted)",
          foreground: "var(--color-muted-foreground)",
        },
        border: "var(--color-border)",
        input: "var(--color-input)",
        ring: "var(--color-ring)",
        glass: {
          DEFAULT: "var(--color-glass)",
          border: "var(--color-glass-border)",
          highlight: "var(--color-glass-highlight)",
        },
        tag: {
          coral: "var(--color-tag-coral)",
          amber: "var(--color-tag-amber)",
          sky: "var(--color-tag-sky)",
          lavender: "var(--color-tag-lavender)",
          slate: "var(--color-tag-slate)",
          mint: "var(--color-tag-mint)",
          stone: "var(--color-tag-stone)",
        },
      },
    },
    fontFamily: {
      inter: ["Inter_400Regular"],
      interMedium: ["Inter_500Medium"],
      interSemiBold: ["Inter_600SemiBold"],
      interBold: ["Inter_700Bold"],
    },
  },
  plugins: [],
} satisfies Config;
