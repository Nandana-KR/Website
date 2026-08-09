/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Premium healthcare palette
        brand: {
          50: "#eef7ff",
          100: "#d9edff",
          200: "#bce0ff",
          300: "#8ecdff",
          400: "#59b0ff",
          500: "#2f8fff",
          600: "#1a6ff5",
          700: "#1657e1",
          800: "#1948b6",
          900: "#1a418f",
        },
        teal: {
          50: "#eaf7f6",
          100: "#cbeeec",
          200: "#9bdedb",
          300: "#63c7c4",
          400: "#38acaa",
          500: "#1f9190",
          600: "#167375",
          700: "#155c5f",
          800: "#154a4d",
          900: "#153e41",
        },
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
        display: ["Sora", "Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(16, 71, 130, 0.18)",
        card: "0 20px 50px -20px rgba(16, 71, 130, 0.28)",
        glow: "0 0 0 1px rgba(255,255,255,0.6), 0 24px 60px -24px rgba(31, 145, 144, 0.45)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(1200px 600px at 100% -10%, rgba(47,143,255,0.12), transparent 60%), radial-gradient(900px 500px at -10% 20%, rgba(31,145,144,0.12), transparent 55%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
