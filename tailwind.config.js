/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        title: "var(--title)",
        clockColor: "var(--clockColor)",
        select: "var(--select)",
      },
    },
  },
  plugins: [],
};
