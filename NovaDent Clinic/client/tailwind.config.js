/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a',
        accent: '#06b6d4',
        'accent-secondary': '#10b981',
        background: '#ffffff',
        'section-bg': '#f8fafc',
        'card-bg': '#ffffff',
        'text-primary': '#0f172a',
        'text-secondary': '#475569',
        border: '#e2e8f0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
