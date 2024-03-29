import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        brand_white: {
          300: "#f0f0f0",
          400: "#f9f9f9",
        },
        brand_pink: {
          500: "#8a8a8a",
        },
        brand_blue: {
          200: "#255caf",
          400: "#002147",
        },
        brand_yellow: {
          500: "#fdc800",
        },
      },
      fontFamily: {
        Roboto: ["Roboto"],
        OpenSans: ["Open Sans"],
      },
    },
  },
  plugins: [],
};
export default config;
