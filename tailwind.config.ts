/** @type {import('tailwindcss').Config} */

export const colors = {
  default: "#0066ff",
  danger: "#E73D23",
  warning: "#F9DC5C",
  success: "#2EB800",
};

const hoverColors = {
  "default-hover": "#005AE0",
  "danger-hover": "#CA2E16",
  "success-hover": "#248F00",
  "warning-hover": "#F8D53A",
};

const sizes = ["xs", "sm", "lg", "xl"];

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...colors,
        ...hoverColors,
      },
    },
  },
  plugins: [],
  purge: {
    safelist: [
      ...Object.keys(colors).map((color) => `bg-${color}`),
      ...Object.keys(hoverColors).map((color) => `hover:bg-${color}`),
      ...sizes.map((size) => `text-${size}`),
    ],
  },
};
