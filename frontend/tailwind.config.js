/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#ecf6ff",
          100: "#d6ebff",
          500: "#1678d7",
          700: "#0b57a3",
          900: "#0a2a47",
        },
      },
    },
  },
  plugins: [],
};
