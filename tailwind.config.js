/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        white: 'rgb(var(--color-text) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
      }
    },
  },
  plugins: [],
}

