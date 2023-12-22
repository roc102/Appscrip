/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          miscwhite: "var(--miscwhite)",
          texttext: "var(--texttext)",
        },
      },
    },
    plugins: [],
  };
  