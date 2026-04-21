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
        blue: {
          950: '#050E1F',
          900: '#081F4A',
          800: '#0B2F6E',
          700: '#0F3D8A',
          600: '#1349A8',
          500: '#1E5FCC',
          400: '#3B7DE8',
          300: '#6BA3F5',
          100: '#DBEAFE',
          50:  '#EEF4FF',
        },
        orange: {
          DEFAULT: '#E85D1F',
          dark:    '#C74D14',
          light:   '#F97316',
          50:      '#FFF4EE',
          100:     '#FFE4D1',
        },
      },
      fontFamily: {
        display: ['Montserrat', 'system-ui', 'sans-serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-geo': 'linear-gradient(135deg, #0B2F6E 0%, #081F4A 100%)',
      },
    },
  },
  plugins: [],
}
