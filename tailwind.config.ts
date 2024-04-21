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
        'banner-bg':"url('../public/images/calculate.jpg')",
        'hero-bg':"url('../public/images/webdesign.jpg')",
      },
      
    },
  },
  plugins: [],
};
export default config;
