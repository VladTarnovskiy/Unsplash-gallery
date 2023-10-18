import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      base_green: "#14b8a6",
      base_green_light: "#2dd4bf",
      base_yellow: "#fde047",
      base_yellow_dark: "#facc15",
      base_grey: "#9ca3af",
      base_dark: "#1A1C1E",
      base_red: "#f87171",
      base_light: "#e5e5e5",
      base_white: "#fafafa",
      dark_black: "#0C0E0F",
      dark_header: "#434A4D",
      dark_textarea: "#0C0E0F",
    },
    fontSize: {
      sm: "1rem",
      base: "1.3rem",
      xl: "1.6rem",
      "2xl": "1.8rem",
      "3xl": "2rem",
      "4xl": "2.2rem",
    },
  },
  plugins: [],
});
export default config;
