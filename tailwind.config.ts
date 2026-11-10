import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: "#FFFCF6",
          100: "#FFF9ED", // Primary background
          200: "#FFF3DC", // Secondary background
          300: "#F8E8C8", // Light champagne
          400: "#EDD4A6",
          border: "#EAD6B5",
        },
        gold: {
          50: "#FFFDF5",
          100: "#FEF7DC",
          200: "#FCEEAE",
          300: "#F8DF75",
          400: "#F4C84A", // Primary golden
          500: "#EFAE32", // Amber
          600: "#D3941F",
          700: "#AB7214",
        },
        amber: {
          DEFAULT: "#EFAE32",
          dark: "#C98B19",
          light: "#F7D081",
        },
        brandOrange: {
          light: "#F5B667",
          DEFAULT: "#E99A38", // Warm orange
          dark: "#C27519",
        },
        charcoal: {
          50: "#F5F4F2",
          100: "#E6E3DE",
          200: "#C9C4BC",
          400: "#6B6358",
          600: "#443E35",
          700: "#342F28",
          800: "#29251F", // Deep charcoal (headings & readable body)
          900: "#1A1713",
        },
        warmBrown: {
          DEFAULT: "#51402C", // Warm brown
          light: "#6E573D",
          dark: "#3B2E1E",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        accent: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      keyframes: {
        pulseRing: {
          "0%": { transform: "scale(0.95)", opacity: "0.8" },
          "50%": { transform: "scale(1.2)", opacity: "0.2" },
          "100%": { transform: "scale(0.95)", opacity: "0.8" },
        },
        floatGentle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        "pulse-ring": "pulseRing 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-gentle": "floatGentle 4s ease-in-out infinite",
      },
      boxShadow: {
        editorial: "0 10px 30px -10px rgba(41, 37, 31, 0.08)",
        card: "0 4px 20px -2px rgba(81, 64, 44, 0.06)",
        cardHover: "0 14px 34px -4px rgba(81, 64, 44, 0.12)",
        goldGlow: "0 4px 25px rgba(244, 200, 74, 0.35)",
        amberGlow: "0 6px 28px rgba(239, 174, 50, 0.35)",
      },
    },
  },
  plugins: [],
};
export default config;

