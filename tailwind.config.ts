import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        paper: { DEFAULT: "rgb(var(--paper-rgb) / <alpha-value>)", deep: "rgb(var(--paper-deep-rgb) / <alpha-value>)" },
        ink: { DEFAULT: "rgb(var(--ink-rgb) / <alpha-value>)", soft: "rgb(var(--ink-soft-rgb) / <alpha-value>)" },
        muted: "rgb(var(--muted-rgb) / <alpha-value>)",
        hanko: { DEFAULT: "rgb(var(--hanko-rgb) / <alpha-value>)", bright: "rgb(var(--hanko-bright-rgb) / <alpha-value>)" },
      },
      fontFamily: {
        display: ["var(--font-display)", "Impact", "sans-serif"],
        jp: ["var(--font-display)", "Hiragino Sans", "Noto Sans JP", "Noto Sans CJK JP", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;
