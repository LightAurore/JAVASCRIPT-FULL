/** @type {import('tailwindcss').Config} */
module.exports = {
  "content" : ["./public/src/**/*.{html,js,ts,jsx,tsx, ejs}"],
  theme: {
    extend: {
      // backgroundImage: {
      //   'banner': "url('/public/mages/banner.jpg')",
      // },
      borderRadius:{
        'triangle': '0% 0% 25% 100%/100% 0% 25% 25% '
      },
      gridTemplateColumns:{
        'recettes': '20% 75%',
      }
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
}

