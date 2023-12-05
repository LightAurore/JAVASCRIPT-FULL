/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#243c5a",
        turquoise: "#15e6cd",
      },
      fontFamily: {
        display: "Oswald, ui-serif", // Adds a new `font-display` class
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
