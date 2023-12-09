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
      '10': '3.25rem',
      '11': '3.5rem',
      '12': '4rem',
      '13': '4.25rem',
      '14': '4.5rem',
      '15': '5rem',
    },
    screens: {
      'mobile': '375px',
      'tablet': '768px',
      'desktop': '1296px',
    },
    extend: {
      colors: {
        Black: '#333333',
        White: '#ffffff',
        Grey: '#f5f5f5'
      }
    },
  },
  plugins: [],
}

