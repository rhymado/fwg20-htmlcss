/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ["./pages/*.{html,js}"],
  theme: {
    fontSize: {
      "3xl": "1.5rem",
    },
    colors: {
      primary: "#61d8de",
      secondary: "#7c70e6",
      tertiary: "#e839f6",
    },
    screens: {
      tbt: "426px",
      sm: "641px",
      md: "769px",
      lg: "1025px",
      xl: "1281px",
      "2xl": "1537px",
      uw: "2041px",
    },
    extend: {
      fontSize: {
        "10xl": "10rem",
      },
      gridTemplateColumns: {
        custom: "100px minmax(100px, 1fr) 200px",
      },
      spacing: {
        halffull: "50%",
        halfscreen: "50vh",
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
