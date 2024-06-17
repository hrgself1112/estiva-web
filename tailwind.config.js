/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    extend: {



      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",

        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",

      },

      colors: {
        "bg-estiva-footer": "#121b30",
        "bg-esitva-footer2":"radial-gradient(circle, rgba(4,50,79,1) 50%, rgba(19,29,51,1) 100%)",
        "devider-color": "rgba(125, 211, 252, 0.8)",
        "social_bg":"#1d2b4e",
        "icon-twitter": "#00aced",
        "icon-facebook": "#3b5998",
        "icon-linkedin": "#007bb6",
        "icon-instagram": "#bc2a8d",
        "icon-pinterest": "#cb2027",
      },


    },
  },
 plugins: [],
};
