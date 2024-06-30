/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // or 'media'
  theme: {

    extend: {
      fontSize: {
        ssm: "0.7rem",
      },

      fontFamily: {
        openSans: ["Open Sans", "sans - serif"],
        poppins: ["Poppins", "sans - serif"],
      },
    },
  },
  plugins: [],
};
