/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0a0f1a',
        panel: '#111a2b',
        line: '#1f2b40',
        mint: '#75e0c0',
        sky: '#7cc4ff',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 32px rgba(117, 224, 192, 0.25)',
      },
    },
  },
  plugins: [],
}
