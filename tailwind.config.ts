import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dorea: {
          50:  '#f0f9f8',
          100: '#d9f0ee',
          200: '#b3e2de',
          300: '#7ecdc8',
          400: '#48b0aa',
          500: '#2e9590',
          600: '#237875',
          700: '#1e6361',  // primary action colour
          800: '#1b5250',
          900: '#194442',
        },
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}

export default config
