/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#E5C178',
          DEFAULT: '#C89D4B',
          hover: '#B58B38',
          dark: '#B8860B',
          vibrant: '#D4AF37',
          soft: '#F4E8D0',
          subtle: '#FAF3E5',
        },
        slate: {
          950: '#0E1012',
          dark: '#141619',
          card: '#1E2024',
          border: '#2C2F36',
          muted: '#8A909A',
        },
        cream: {
          DEFAULT: '#FBF8F2',
          light: '#FFFFFF',
          dark: '#F4EFE6',
          border: '#E8E1D3',
          text: '#2D2B28',
          muted: '#6E6B65',
        }
      },
      fontFamily: {
        serif: ['"Cinzel"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        cursive: ['"Cormorant Garamond"', '"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 10px 30px -5px rgba(200, 157, 75, 0.35)',
        'gold-subtle': '0 15px 35px -10px rgba(200, 157, 75, 0.2)',
        'dark-luxury': '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        'card-soft': '0 10px 30px -5px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
}
