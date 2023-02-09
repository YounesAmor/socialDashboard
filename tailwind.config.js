/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "375px",
      lg: "1000px",
    },
    extend: {
      boxShadow: {
        "3xl": "0 0 50px",
      },
      backgroundImage: {
        mainBg: "url('/src/assets/images/bg-pattern.svg')",
        circles: "url('/src/assets/images/pattern-circles.svg')",
      },
      colors: {
        limeGreen: "hsl(163, 72%, 41%)",
        brightRed: "hsl(356, 69%, 56%)",
        faceBook: "hsl(208, 92%, 53%)",
        twitter: "hsl(203, 89%, 53%)",
        instagramFrom: "hsl(37, 97%, 70%)",
        instagramTo: "hsl(329, 70%, 58%)",
        youTube: "hsl(348, 97%, 39%)",
        toggleDarkThemFrom: "hsl(210, 78%, 56%)",
        toggleDarkThemTo: "hsl(146, 68%, 55%)",
        darkBg: "hsl(230, 17%, 14%)",
        darkTopBg: "hsl(232, 19%, 15%)",
        darkCardBg: "hsl(228, 28%, 20%)",
        darkText: "hsl(228, 34%, 66%)",
        lightTopbg: "hsl(225, 100%, 98%)",
        lightCardBg: "hsl(227, 47%, 96%)",
        lightText: "hsl(228, 12%, 44%)",
        lightTextSecond: "hsl(230, 17%, 14%)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  "tailwindCSS.includeLanguages": {
    javascript: "javascript",
    html: "HTML",
  },
  "editor.quickSuggestions": {
    strings: true,
  },
  plugins: [],
};
