/** @type {import('tailwindcss').Config} */
export default {
  content: ['./views/**/*.pug'],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentcolor',
      'black': '#000000',
      'white': '#ffffff',
      'celadon': '#A8E6A1',
      'emerald': '#50c878', // Cambiado a lowercase para consistencia
      'pigmentgreen': '#4CAF50',
    },
  },
  plugins: [],
}

