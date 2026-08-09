/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#edf5f6",
          100: "#d8e9eb",
          200: "#b4d4d8",
          300: "#86b8be",
          400: "#5699a1",
          500: "#347e87",
          600: "#28656e",
          700: "#24525b",
          800: "#21444c",
          900: "#1e3a41",
          950: "#10292f",
        },
        aqua: {
          50: "#effafa",
          100: "#d7f2f1",
          200: "#b4e5e3",
          300: "#7ed1cf",
          400: "#4ab5b5",
          500: "#2c989a",
          600: "#227b80",
          700: "#216269",
          800: "#205057",
          900: "#1f434a",
        },
        sand: {
          50: "#fffdf9",
          100: "#faf6ef",
          200: "#f1e9dc",
          300: "#e6d8c6",
          400: "#d4bea0",
          500: "#c19e78",
        },
        gold: {
          400: "#ddb65b",
          500: "#c99838",
          600: "#aa7928",
        },
      },
      fontFamily: {
        sans: ["DM Sans", "system-ui", "sans-serif"],
        display: ["Manrope", "DM Sans", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 6px 24px -8px rgba(16, 41, 47, 0.12)",
        card: "0 18px 45px -18px rgba(16, 41, 47, 0.2)",
        lift: "0 24px 70px -24px rgba(16, 41, 47, 0.24)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      backgroundImage: {
        "hero-wash": "radial-gradient(circle at 80% 0%, rgba(126, 209, 207, .2), transparent 35%), linear-gradient(135deg, #fbfefd 0%, #edf8f7 100%)",
        "ink-gradient": "linear-gradient(135deg, #10292f 0%, #24525b 100%)",
      },
      keyframes: {
        "soft-rise": {
          "0%": { opacity: "0", transform: "translateY(22px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "soft-rise": "soft-rise .7s ease-out forwards",
        float: "float 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
