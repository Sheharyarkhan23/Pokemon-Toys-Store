/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pokemon: {
          red: '#FF1C1C',
          yellow: '#FFCB05',
          blue: '#3B4CCA',
          gray: '#F5F5F5',
          dark: '#333333',
        },
      },
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite alternate',
      },
      variants: {
        backgroundColor: ['responsive', 'hover', 'focus', 'checked'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #FFCB05' },
          '100%': { boxShadow: '0 0 20px #FFCB05, 0 0 30px #FFCB05' },
        },
      },
    },
  },
  plugins: [],
};
