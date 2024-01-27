import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        "cream": "#EFF0F2",
        "white": "#FFFFFF",
        "dark_cream":"#EFF0F2",
        "light_blue":"#2166EB",
        "dark_blue":"#0458FD",
        "light_green":"#7DB87E",
        "cream_green":"#D7E5C1",
        "light_red":"#E55353",
        "dark_red":"#FD4255",
        "light_violet":"#D0C8F0",
        "light_pink":"#E5CEC1",
        "sky_blue":"#C9E3F0",
        "dark_black":"#111315",


      }
    },
  },
  plugins: [],
};
export default config;
