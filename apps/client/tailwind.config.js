/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/design/src/**/*.{js,ts,jsx,tsx,css,scss}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        red: "#780000",
        "red-dark": "#600d11",
        "gray-light": "#efefef",
        "gray-dark": "#333333",
        "gray-hover": "#f7f7f7",
        "gray-bg":"#fcfcfc",
      },
    },
  },
  plugins: [],
};
