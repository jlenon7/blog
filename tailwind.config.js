/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/resources/views/**/*.edge'],
  theme: {
    extend: {}
  },
  safelist: [
    {
      pattern: /./
    }
  ],
  plugins: []
}
