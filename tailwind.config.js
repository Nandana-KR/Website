/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Warm premium healthcare palette inspired by reference
        primary: {
          50: "#f0f4ff",
          100: "#e0eaff",
          200: "#c7d7fe",
          300: "#a4bcfc",
          400: "#7b97f8",
          500: "#5a72f2",
          600: "#4353e6",
          700: "#3641d3",
          800: "#2e37ab",
          900: "#2b3487",
          950: "#1a1f52",
        },
        accent: {
          50: "#fdf4f3",
          100: "#fce7e4",
          200: "#fbd3ce",
          300: "#f6b3ab",
          400: "#ef877a",
          500: "#e3604f",
          600: "#cf4433",
          700: "#ae3627",
          800: "#903024",
          900: "#782d24",
        },
        neutral: {
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716c",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917",
          950: "#0f0e0d",
        },
        ivory: "#fefdfb",
        cream: "#faf8f5",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
        display: ["Sora", "Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgba(26, 31, 82, 0.08)",
        card: "0 12px 40px -12px rgba(26, 31, 82, 0.12)",
        elevated: "0 20px 60px -20px rgba(26, 31, 82, 0.18)",
        glow: "0 0 0 1px rgba(90, 114, 242, 0.1), 0 8px 32px -8px rgba(90, 114, 242, 0.2)",
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(ellipse 80% 60% at 50% -20%, rgba(90, 114, 242, 0.08), transparent 70%)",
        "section-gradient":
          "linear-gradient(180deg, #fefdfb 0%, #f5f5f4 100%)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        float: "float 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
