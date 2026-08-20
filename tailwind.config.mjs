/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        purple: {
          brand: '#7038A6',
          hover: '#5D2B8E',
          light: '#8E4EC7',
          soft: '#F4EBFC',
          dark: '#3E1962',
        },
        anthracite: {
          DEFAULT: '#1F2937',
          950: '#0F172A',
          900: '#18181B',
          800: '#1F2937',
          700: '#374151',
          600: '#4B5563',
          500: '#6B7280',
          400: '#9CA3AF',
        },
        linen: {
          DEFAULT: '#FAF9F6',
          50: '#FFFFFF',
          100: '#FAF9F6',
          200: '#F4F2EB',
          300: '#E7E4D8',
        }
      },
      fontFamily: {
        serif: ['"Cinzel"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'purple-glow': '0 0 35px -5px rgba(112, 56, 166, 0.4)',
      }
    },
  },
  plugins: [],
}
