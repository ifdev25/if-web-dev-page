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
    container: {
      center: true,
      padding: "0.75rem",
      screens: {
        sm:    "540px",
        md:    "720px",
        lg:    "960px",
        xl:    "1140px",
        "2xl": "1320px",
      },
    },
    extend: {},
  },
  plugins: [],
};

export default config;
