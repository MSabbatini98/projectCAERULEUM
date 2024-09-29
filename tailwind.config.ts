import {nextui} from '@nextui-org/theme';
import { Goblin_One } from 'next/font/google';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(slider|popover).js"
  ],
  theme:{
    extend: {
    }
  },
  plugins: [nextui()],
};
export default config;
