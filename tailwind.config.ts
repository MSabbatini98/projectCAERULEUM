import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue_1: '#CCDAFE',
        blue_2: '#87A7FF',
        blue_3: '#1749d1',
        blue_4: '#396CF7',
        blue_5: '#172D67',
        dark: '#00113C',
        light : '#DEF3FF'
      }
    },
  },
  plugins: [],
};
export default config;
