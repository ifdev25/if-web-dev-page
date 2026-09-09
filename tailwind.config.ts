import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./hooks/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    // Breakpoints calqués sur Bootstrap pour conserver le même comportement responsive
    screens: {
      sm:  "576px",
      md:  "768px",
      lg:  "992px",
      xl:  "1200px",
      "2xl": "1400px",
    },
    extend: {},
  },
  // .container est defini a la main dans app/globals.css (gouttiere fluide via
  // --gutter, au lieu des paliers fixes de Tailwind qui faisaient sauter le
  // padding de 12px a 95px selon la largeur). Le plugin est desactive pour
  // qu il n y ait qu une seule source de verite.
  corePlugins: {
    container: false,
  },
  plugins: [],
};

export default config;
