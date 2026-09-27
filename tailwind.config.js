/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FBF4E7',
        'cream-deep': '#F1E2C8',
        rose: '#C67B80',
        'rose-deep': '#A6585E',
        cocoa: '#3A2A20',
        'cocoa-light': '#5C4436',
        gold: '#C6912E',
        'gold-deep': '#A6741F',
        ink: '#2B2118',
        'ink-soft': '#6B5D50',
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'serif'],
        sans: ['Manrope', 'sans-serif'],
        mal: ['"Noto Sans Malayalam"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 40px -20px rgba(58,32,20,0.35)',
      },
      borderRadius: {
        xl2: '22px',
      },
    },
  },
  plugins: [],
}
