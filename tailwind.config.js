/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: 'rgb(var(--primary) / <alpha-value>)',
        secondary: 'rgb(var(--primary-light) / <alpha-value>)',
        white: 'rgb(var(--text-menu) / <alpha-value>)',
        background: 'rgb(var(--background) / <alpha-value>)',
        card: 'rgb(var(--card-background) / <alpha-value>)',
        light: 'rgb(var(--text-light) / <alpha-value>)',
      }
    },
  },
  plugins: [],
}

