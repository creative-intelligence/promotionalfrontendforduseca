/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        primary: "#D9D9D9",
        secondary: "#B79F8E",
        span: "#475045",
        zhero: "#EAEFF4",
        paragraph: "#505056",
        margin:"#7F6246"
      },
      fontFamily: {
        outfit: ["Outfit"],
        roboto: ["Roboto"],
        poppins:["Poppins"]
      },
    },
  },
  plugins: [],
};
