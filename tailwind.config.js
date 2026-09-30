/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0C0A09',
        foreground: '#FAFAF9',
        gold: '#CA8A04',
      },
      fontFamily: {
        bodoni: ['var(--font-bodoni)'],
        jost: ['var(--font-jost)'],
      },
    },
  },
  plugins: [],
}
