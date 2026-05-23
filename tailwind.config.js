/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lavender: {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#CDB4DB",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7e22ce",
        },
        soft: {
          purple: "#CDB4DB",
          lilac: "#E8D5F5",
          blush: "#F8F0FF",
          mist: "#F5F0FA",
        },
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
        soft: "0 4px 24px rgba(205, 180, 219, 0.25)",
        "soft-lg": "0 8px 40px rgba(205, 180, 219, 0.35)",
        card: "0 2px 16px rgba(147, 51, 234, 0.08)",
      },
      backgroundImage: {
        "notebook-grid":
          "linear-gradient(rgba(205,180,219,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(205,180,219,0.12) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "28px 28px",
      },
    },
  },
  plugins: [],
};
