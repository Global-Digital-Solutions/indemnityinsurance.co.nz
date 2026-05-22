/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#fff7ed',  // orange-50
          100: '#ffedd5',  // orange-100
          200: '#fed7aa',  // orange-200
          300: '#d1d5db',  // gray-300 (subtle text on dark)
          400: '#9ca3af',  // gray-400
          500: '#f97316',  // orange-500
          600: '#ea580c',  // orange-600
          700: '#f97316',  // orange-500 (links, CTAs, accents)
          800: '#1f2937',  // gray-800
          900: '#111827',  // gray-900
          950: '#030712',  // gray-950
        },
        gold: {
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
        },
      },
    },
  },
  plugins: [],
}
