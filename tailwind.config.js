/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["roboto"],
      },
      colors: {
        right: {
          500: "#1E1E1E",
        },
        location: {
          500: "rgba(101, 101, 101, 1)",
        },
        subject: {
          500: "#AEAEAE",
        },
        highlight: {
          100: "rgba(38, 38, 38, 0.93)",
        },
      },
    },
  },
  plugins: [],
};
