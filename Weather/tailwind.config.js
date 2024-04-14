/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'kanit-black': ['Kanit-Black'],
      'kanit-regular': ['Kanit-Regular'],
    },
    extend: {
      backgroundImage: {
        'thunderstorm': "url('../src/assets/img/Thunderstorm.jpg')",
        'drizzle': "url('../src/assets/img/Drizzle.jpg')",
        'rain': "url('../src/assets/img/Rain.jpg')",
        'snow': "url('../src/assets/img/Snow.jpg')",
        'mist': "url('../src/assets/img/Mist.jpg')",
        'smoke': "url('../src/assets/img/Smoke.jpg')",
        'haze': "url('../src/assets/img/Haze.jpg')",
        'dust': "url('../src/assets/img/Dust.jpg')",
        'fog': "url('../src/assets/img/Fog.jpg')",
        'sand': "url('../src/assets/img/Sand.jpg')",
        'ash': "url('../src/assets/img/Ash.jpg')",
        'squall': "url('../src/assets/img/Squall.jpg')",
        'tornado': "url('../src/assets/img/Tornado.jpg')",
        'clear': "url('../src/assets/img/Clear.jpg')",
        'clouds': "url('../src/assets/img/Clouds.jpg')",      
      },
    },
  },
  plugins: [],
}

