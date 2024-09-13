import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "lumi-white": "#FAFDF6",
        "lumi-blue": "#A5D9DA",
        "lumi-yellow": "#FBCB83",
        "lumi-red": "#FCD1CB",
        "lumi-green": "#BBE4C6",
      },
    }
  },
  plugins: [],
};
export default config;
