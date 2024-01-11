/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      colors: {
        "regal-blue": "#243c5a",
        turquoise: "#15e6cd",
      },
      fontFamily: {
        display: "Oswald, ui-serif", // Adds a new `font-display` class
        principal: "kdam",
        FairePlay: ["Playfair"],
      },
      listStyleImage: {
        pomme: 'url("assets/images/pomme.png")',
        apple: "🍏",
      },
      listStyleType: {
        apple: "🍏",
      },
      screens: {
        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};
