/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#2C5530',
          50: '#F2F7F3'
        },
        brown: {
          DEFAULT: '#8B4513',
          50: '#FDF6F0'
        },
        sage: {
          DEFAULT: '#9CAF88',
          50: '#F5F7F3'
        },
        wheat: {
          DEFAULT: '#F5DEB3',
          50: '#FDFBF7'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
};