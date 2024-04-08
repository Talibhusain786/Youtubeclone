/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkOrange: "#d17404",
        lightOrange: "#F2E1CD",
        lightSkyBlue: "#38bdf8",
      },
      boxShadow: {
        card: "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
        card2:
          "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
      },
    },
    screens: {
      esm: "400px",
      msm: "500px",
      eem: "550px",
      sm: "640px",
      md: "768px",
      med: "900px",
      mmd: "800px",
      slg: "992px",
      lg: "1024px",
      nlg: "1100px",
      mlg: "1200px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
