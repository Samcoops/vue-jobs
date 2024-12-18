/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['RubikVariable', 'sans-serif'],
      },
    },
    screens: {
      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }

      'mm': {'max': '480px'},
      // => @media (max-width: 350px) { ... }

      'sx': {'max': '350px'},
      // => @media (max-width: 350px) { ... }

      pc: { raw: '(hover: hover) and (pointer: fine)' },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
