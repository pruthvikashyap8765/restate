/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik_Regular", 'sans-serif'],
        "rubik-medium": ["Rubik_Medium", 'sans-serif'],
        "rubik-bold": ["Rubik_Bold", 'sans-serif'],
        "rubik-extrabold": ["Rubik_ExtraBold", 'sans-serif'],
        "rubik-semibold": ["Rubik_SemiBold", 'sans-serif'],
        "rubik-light": ["Rubik_Light", 'sans-serif'],
      },
      colors: {
        "primary":{
          DEFAULT: '#0061FF',
          100: '#0061FF0A',
          200: '#0061FF1A',
          300: '#0061FF2A',
        },
        accent:{
          100: '#FBFBFD',
        },
        black:{
          DEFAULT: '#000000',
          100: '#8C8E98',
          200: '#666876',
          300: '#191d31',
        },
        danger: '#F75555'
    },
  },
  plugins: [],
}
}