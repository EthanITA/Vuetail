/** @type {import('tailwindcss').Config} */
import { lightColors, lightHoverColors } from "./src/themes/light";

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...lightColors,
        ...lightHoverColors,
      },
    },
  },
  plugins: [],
};
