/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "150px": "150px",
        "250px": "250px",
      },
      width: {
        "2px": "2px",
      },
      inset: {
        100: "100%",
      },
    },
  },
  plugins: [],
};
