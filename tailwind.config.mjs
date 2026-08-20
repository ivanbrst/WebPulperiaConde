/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        purple: {
          brand:   '#7038A6',
          light:   '#8B4FC0',
          dark:    '#5B2A87',
          subtle:  '#F5EEF9',
          muted:   '#E8D8F5',
        },
        anthracite: {
          DEFAULT: '#1F2937',
          light:   '#374151',
          muted:   '#6B7280',
          subtle:  '#9CA3AF',
        },
        linen: {
          DEFAULT: '#FAF9F6',
          warm:    '#F4F1EB',
          border:  '#E8E4DC',
          dark:    '#D6D0C4',
        },
      },
      fontFamily: {
        serif:  ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans:   ['"Space Grotesk"', '"Inter"', 'sans-serif'],
        display:['"Cinzel"', '"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      fontSize: {
        'fluid-xl': 'clamp(3rem, 8vw, 7rem)',
        'fluid-lg': 'clamp(2rem, 5vw, 4.5rem)',
      },
      boxShadow: {
        'purple-glow':  '0 10px 40px -5px rgba(112,56,166,0.35)',
        'purple-tint':  '0 20px 60px -10px rgba(112,56,166,0.18)',
        'glass':        '0 8px 32px 0 rgba(31,41,55,0.08)',
        'floating':     '0 24px 48px -12px rgba(31,41,55,0.12)',
        'floating-dark':'0 32px 64px -16px rgba(31,41,55,0.22)',
      },
      keyframes: {
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        floatSlow: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-12px)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        revealWidth: {
          '0%':   { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        'fade-in-up':         'fadeInUp 0.75s cubic-bezier(0.16,1,0.3,1) both',
        'fade-in-up-d1':      'fadeInUp 0.75s 0.15s cubic-bezier(0.16,1,0.3,1) both',
        'fade-in-up-d2':      'fadeInUp 0.75s 0.30s cubic-bezier(0.16,1,0.3,1) both',
        'fade-in-up-d3':      'fadeInUp 0.75s 0.45s cubic-bezier(0.16,1,0.3,1) both',
        'fade-in-up-d4':      'fadeInUp 0.75s 0.60s cubic-bezier(0.16,1,0.3,1) both',
        'fade-in':            'fadeIn 1s 0.2s ease both',
        'float-slow':         'floatSlow 6s ease-in-out infinite',
        'marquee':            'marquee 32s linear infinite',
      },
    },
  },
  plugins: [],
}
