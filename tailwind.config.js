/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFD700', // Bright sunshine yellow
          light: '#FFE44D',
          dark: '#E6C200'
        },
        secondary: {
          DEFAULT: '#006400', // Dark forest green
          light: '#008000',
          dark: '#004B00'
        },
        accent: {
          DEFAULT: '#90EE90', // Light green for growth
          light: '#98FB98',
          dark: '#7CCD7C'
        },
        sand: {
          DEFAULT: '#FFFACD', // Lemon chiffon
          light: '#FFFDE7',
          dark: '#FFF59D'
        },
        slate: {
          DEFAULT: '#2F4F4F', // Dark slate for text
          light: '#445D5D',
          dark: '#1A2F2F'
        }
      },
    },
  },
  plugins: [],
};