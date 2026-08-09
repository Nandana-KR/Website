/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Deep navy — primary brand color
        navy: {
          50: "#f0f4f8",
          100: "#d9e2ec",
          200: "#bcccdc",
          300: "#9fb3c8",
          400: "#829ab1",
          500: "#627d98",
          600: "#486581",
          700: "#334e68",
          800: "#243b53",
          900: "#102a43",
          950: "#0a1929",
        },
        // Warm coral accent
        coral: {
          50: "#fff5f5",
          100: "#ffe3e0",
          200: "#ffcbc4",
          300: "#ffa699",
          400: "#ff7b6b",
          500: "#f25c4a",
          600: "#df3d2b",
          700: "#bb2e1f",
          800: "#9b291d",
          900: "#80271e",
        },
        // Warm gold secondary
        gold: {
          50: "#fdfcf7",
          100: "#fbf7e8",
          200: "#f6ecc6",
          300: "#eeda95",
          400: "#e5c45e",
          500: "#dbb03a",
          600: "#c4922d",
          700: "#a37226",
          800: "#865b25",
          900: "#6f4b22",
        },
        // Backgrounds
        cream: "#faf9f6",
        ivory: "#fefdfb",
        surface: "#ffffff",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
        display: ["Sora", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        serif: ["Lora", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 2px 16px -2px rgba(10, 25, 41, 0.06)",
        card: "0 8px 32px -8px rgba(10, 25, 41, 0.1)",
        elevated: "0 16px 48px -12px rgba(10, 25, 41, 0.14)",
        "inner-glow": "inset 0 1px 2px rgba(255,255,255,0.1)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      backgroundImage: {
        "hero-overlay":
          "linear-gradient(135deg, rgba(10,25,41,0.92) 0%, rgba(16,42,67,0.85) 50%, rgba(10,25,41,0.75) 100%)",
        "dark-gradient":
          "linear-gradient(180deg, #0a1929 0%, #102a43 100%)",
        "warm-gradient":
          "linear-gradient(135deg, #faf9f6 0%, #fff5f5 100%)",
      },
      keyframes: {
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "slide-up": "slide-up 0.7s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "scale-in": "scale-in 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
