/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -5px rgba(251, 146, 60, 0.12)",
        nav: "0 12px 40px -12px rgba(251, 146, 60, 0.22)",
        card: "0 4px 6px -1px rgba(0, 0, 0, 0.06), 0 10px 24px -6px rgba(234, 88, 12, 0.15)",
        glow: "0 0 0 1px rgba(251, 146, 60, 0.08), 0 20px 50px -15px rgba(251, 146, 60, 0.25)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(120, 113, 108, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(120, 113, 108, 0.04) 1px, transparent 1px)",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        shimmer: "shimmer 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}