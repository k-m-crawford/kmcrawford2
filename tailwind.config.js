/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'franklin-gothic': ['Franklin Gothic Medium','Franklin Gothic','ITC Franklin Gothic','Arial','sans-serif'],
        'gill-sans': ['Gill Sans','Gill Sans MT','Calibri','sans-serif']
      }
    },
  },
  plugins: [],
}

