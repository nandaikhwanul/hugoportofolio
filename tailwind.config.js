/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./layouts/**/*.html", 
    "./content/**/*.md",
    "./themes/**/layouts/**/*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

