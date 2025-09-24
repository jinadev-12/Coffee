/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat", "sans-serif"], // overrides Tailwind’s default sans
        saira: ["Saira", "serif"],
      },
      colors: {
        firstcolor: "var(--first-color)",
        firstcoloralt: "var(--first-color-alt)",
        titlecolor: "var(--title-color)",
        textcolor: "var( --text-color)",
        whitecolor: "var(--white-color)",
        darkcolor: "var(--dark-colorr)",
        bodycolor: "var(--body-color)",
        bodywhitecolor: "var(--body-white-color)",
        bodyfirstcolor: "var(--body-first-color)",
      },
    },
  },
  plugins: [],
};
