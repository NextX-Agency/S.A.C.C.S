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
        primary: {
          DEFAULT: '#3ebe71',
          dark: '#2ea05a',
          light: '#5dd68d',
        },
        'saccs-white': '#ffffff',
        'saccs-light': '#f5f7fa',
        'saccs-grey': '#8b95a5',
        'saccs-dark': '#3d4852',
        'saccs-text': '#1a202c',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease forwards',
        'scroll': 'scroll 40s linear infinite',
        'scroll-dot': 'scrollDot 2s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100% / 4))' },
        },
        scrollDot: {
          '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
          '50%': { transform: 'translateX(-50%) translateY(15px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'saccs-sm': '0 2px 4px rgba(0, 0, 0, 0.05)',
        'saccs-md': '0 4px 12px rgba(0, 0, 0, 0.1)',
        'saccs-lg': '0 10px 30px rgba(0, 0, 0, 0.15)',
        'saccs-glow': '0 0 40px rgba(62, 190, 113, 0.3)',
      },
    },
  },
  plugins: [],
};
