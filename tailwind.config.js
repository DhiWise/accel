module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          50: "#f9fafa",
          100: "#f4f5f6",
          200: "#e6e8ea",
          400: "#c2c2c2",
          500: "#969da6",
          700: "#5d646f",
          900: "#25282d",
          "900_54": "#11182754",
          "200_7e": "#e6e8ea7e",
          "900_7f": "#1118277f",
        },
        white: { A700_a2: "#ffffffa2", A700: "#ffffff" },
        deep_purple: { 50: "#ebe5f6" },
        black: { 900: "#000000", "900_26": "#00000026" },
        blue_gray: { 700: "#545558", 800: "#464b53" },
        indigo: { 900: "#270157" },
        cyan: { 50: "#d6ffff", A700: "#17b5cb" },
      },
      fontFamily: { inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
