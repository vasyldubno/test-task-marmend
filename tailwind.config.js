/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: {
          white: "#FFFFFF",
          secondary: "#445275",
          tertiary: "#6677A2",
          primary: "#2D68F8",
        },
        blue: {
          "light-2": "#8099EC",
          "light-7": "#F4F6FF",
          "dark": "#1C3FB7"
        },
        gray: {
          "2": "#F3F4F6",
          "7": "#ABB1B8"
        },
        red: {
          "light-4": "#FDD8D8",
          "light-6": "#FEF3F3",
          red: "#F23030",
          dark: "#E10E0E",
          light: "#F56060"
        },
        green: {
          green: "#22AD5C"
        },
        shadow: "#A6AFC366"
      }
    },
  },
  plugins: [],
}

