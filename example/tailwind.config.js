/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "../src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset"), require("@byarcadia-app/aether/tailwind-preset").preset],
  theme: {
    extend: {},
  },
  plugins: [],
};
