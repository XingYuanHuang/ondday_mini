/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        grass: '#78C850',
        fire: '#F08030',
        water: '#6890F0',
        light: '#F8D030',
        ground: '#E0C068',
        ice: '#98D8D8',
        dragon: '#7038F8',
        electric: '#F8D030',
        poison: '#A040A0',
        bug: '#A8B820',
        fighting: '#C03028',
        flying: '#A890F0',
        fairy: '#EE99AC',
        ghost: '#705898',
        dark: '#705848',
        normal: '#A8A878',
        psychic: '#F85888',
        steel: '#B8B8D0'
      }
    },
  },
  plugins: [],
}