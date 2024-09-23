import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "bg-[#A8B820]",
    "bg-[#705848]",
    "bg-[#7038F8]",
    "bg-[#F8D030]",
    "bg-[#EE99AC]",
    "bg-[#C03028]",
    "bg-[#F08030]",
    "bg-[#A890F0]",
    "bg-[#705898]",
    "bg-[#78C850]",
    "bg-[#E0C068]",
    "bg-[#98D8D8]",
    "bg-[#A8A878]",
    "bg-[#A040A0]",
    "bg-[#F85888]",
    "bg-[#B8A038]",
    "bg-[#B8B8D0]",
    "bg-[#6890F0]",
    "text-white",
    "text-black",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
