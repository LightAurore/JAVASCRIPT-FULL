/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    // Extend permet de garder les thèmes de base
    extend: {

      colors: {
        tomato: "#ff6347",
        primary :{
          50: "#D1CCDC",
          100: "#424c55",
          500: "#f5edf0",
          900: "#886f68"
        }
      }
    },
  },
  plugins: [],
}

/* ctrl espace dans l'extend pour voir tout ce qu'on peut modifier */