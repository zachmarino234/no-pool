/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',  // This should catch everything in src
    './src/app/*.{js,ts,jsx,tsx}',
    './src/components/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'aptly': ['aptly', 'sans-serif'],
      }
    }
  },
  plugins: [],
}