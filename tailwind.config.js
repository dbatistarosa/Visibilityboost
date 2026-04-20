/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#03080f',
          900: '#080f1e',
          800: '#0d1a30',
          700: '#122040',
          600: '#1a2f58',
          500: '#243d6e',
          400: '#3a5490',
        },
        silver: {
          100: '#f5f6f8',
          200: '#e9eaee',
          300: '#d2d5de',
          400: '#a8aec0',
          500: '#717d96',
        },
        gold: {
          DEFAULT: '#c8a44a',
          light: '#debb71',
          xl: '#f2dea0',
          bg: '#faf5e6',
        }
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
