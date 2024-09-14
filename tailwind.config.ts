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
        "lumi-white": "#FFFFFF",
        "lumi-blue": "#00659A",
        "lumi-yellow": "#FFEA01",
        "lumi-red": "#DA251D",
        "lumi-green": "#9DCD16",
        "lumi-orange": "#FF9D00",
      },
    }
  },
  plugins: [],
};
export default config;
