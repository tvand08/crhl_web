/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': '#00AFEF',
      'gray-dark': '#1f2329',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'white': '#f5f5f5',
      'slate-dark': '#181822',
      'slate': '#272730',
      'slate-light': '#374151',
    },
    extend: {},
  },
  plugins: [],
  darkMode: 'class'
}
