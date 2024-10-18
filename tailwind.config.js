/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Your app router paths
    './pages/**/*.{js,ts,jsx,tsx}', // If you're using the pages directory
    './components/**/*.{js,ts,jsx,tsx}', // Add this if you have a components directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

