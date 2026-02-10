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
        'saccs-light': '#fafafa',
        'saccs-grey': '#8b95a5',
        'saccs-dark': '#3d4852',
        'saccs-text': '#1a202c',
        'icon-bg': '#f3f4f6',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease forwards',
        'scroll': 'scroll 40s linear infinite',
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
      },
      boxShadow: {
        'saccs-sm': '0 1px 3px rgba(0, 0, 0, 0.06)',
        'saccs-md': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'saccs-lg': '0 4px 12px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
