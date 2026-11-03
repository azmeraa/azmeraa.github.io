/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        ink: '#090d18',
        panel: '#111827',
        line: '#263247',
        mint: '#75e0c0',
        sky: '#82b7ff',
      },
      boxShadow: {
        glow: '0 0 70px rgba(117, 224, 192, 0.12)',
      },
    },
  },
  plugins: [],
}