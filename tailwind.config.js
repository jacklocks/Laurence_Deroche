/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      teal: "#007B83",
      blue: "#C6D8D7",
      green: "#64B298",
      pink: "#DEDAD8",
      black: "#161A24",
      red: "#B2002E",
    },
    fontFamily: {
      text: ["Montserrat-Regular", "sans-serif"],
      // title: ["Oswald-Regular", "sans-serif"],
      man: ["Parisienne-Regular", "sans-serif"],
      titlenav: ["ProtestRiot-Regular", "sans-serif"],
    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
    },
  },
  plugins: [],
});
