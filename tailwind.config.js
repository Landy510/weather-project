/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    spacing: {
      '1': '0.25rem',
      '2': '0.5rem',
      '2-1/2': '0.75rem',
      '3': '1rem',
      '4': '1.25rem',
      '5': '1.5rem',
      '6': '2rem',
      '7': '2.25rem',
      '8': '2.5rem',
      '9': '3rem',
      '10': '3.25rem'
    },
    extend: {
      colors: {
        Black: {
          500: 'rgba(51, 51, 51, 0.5)',
          default: '#333333'
        },
        White: '#ffffff',
        Grey: '#f5f5f5',
        Danger: {
          100: '#ECBBC4',
          500: '#CB747E'
        },
        Warning: {
          100: '#ffe58f',
          500: '#FAAD14'
        }
      }
    },
  },
  plugins: [],
}

