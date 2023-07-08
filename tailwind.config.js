/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'pri-dark-1': 'rgb(var(--pri-dark-1))',
        'pri-dark-2': 'rgb(var(--pri-dark-2))',
        'pri-dark-3': 'rgb(var(--pri-dark-3))',
        'sec-dark-1': 'rgb(var(--sec-dark-1))',
        'sec-dark-2': 'rgb(var(--sec-dark-2))',
        'sec-dark-3': 'rgb(var(--sec-dark-3))',
        'pri-light-1': 'rgb(var(--pri-light-1))',
        'pri-light-2': 'rgb(var(--pri-light-2))',
        'pri-light-3': 'rgb(var(--pri-light-3))',
        'sec-light-1': 'rgb(var(--sec-light-1))',
        'sec-light-2': 'rgb(var(--sec-light-2))',
        'sec-light-3': 'rgb(var(--sec-light-3))',
        'pri-accent-1': 'rgb(var(--pri-accent-1))',
        'pri-accent-2': 'rgb(var(--pri-accent-2))',
        'pri-accent-3': 'rgb(var(--pri-accent-3))',
        'sec-accent-1': 'rgb(var(--sec-accent-1))',
        'sec-accent-2': 'rgb(var(--sec-accent-2))',
        'sec-accent-3': 'rgb(var(--sec-accent-3))',
      },
      brightness: {
        35: '.35',
      }
    },
  },
  plugins: [],
}
