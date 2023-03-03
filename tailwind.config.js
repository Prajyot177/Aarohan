/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "background-image": "url('./assets/bg-image.png')",
        "groupDance": "url(./assets/GROUP_DANCE.JPG)",
        "bandWars": "url(./assets/BANDWARS.JPG)"
      },
      colors: {
        "orange-custom": "#ffa500"
      }
    },
  },
  plugins: [],
}
