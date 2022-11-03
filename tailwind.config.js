/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  //...our theme
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#064A76",
          secondary: "#e3f3fa",
          accent: "#aed051",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
}
