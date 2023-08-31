/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#2d324d",
      },
      container: {
        center: true,
        padding: "1rem",
      },
      letterSpacing: {
        letterSpacing: "1.5px",
      },
      colors: {
        myColor: "#DB009E",
        secund: "#003CB0",
        input: "#c0dbea",
        button: "#d885a3",
        addColor: "#f1f1f1",
      },
      borderRadius: {
        myBorder: "7px",
      },
    },
  },
  plugins: [],
};
