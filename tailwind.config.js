/** @type {import('tailwindcss').Config} */
export default {
  content: ['./views/**/*.pug'],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentcolor',
      'redd': '#D62828',
      'black': '#000000',
      'white': '#ffffff',
      'celadon': '#A8E6A1',
      'cgr': '#F1FBFA',
      'emerald': '#50c878',
      'pigmentgreen': '#4CAF50',

      // Intensidades de celadon
      'celadon-50':'#C1FFC4',
      'celadon-100': '#A8E6A1',
      'celadon-200': '#8BD88B',  
      'celadon-300': '#78C774',  
      'celadon-400': '#65B762', 

  
      'emerald-100': '#50c878',
      'emerald-200': '#4DC66A',  
      'emerald-300': '#48B45D',  
      'emerald-400': '#3F9B50', 


      'pigmentgreen-100': '#4CAF50',
      'pigmentgreen-200': '#45A446',  
      'pigmentgreen-300': '#3F953D',  
    },
    backgroundImage: {
      // Degradado de Celadon a Emerald
      'celadon-to-emerald': 'linear-gradient(to right, #A8E6A1, #50c878)',

      // Degradado de Emerald a Pigment Green
      'emerald-to-pigmentgreen': 'linear-gradient(to right, #50c878, #4CAF50)',

      // Degradado de Celadon a Pigment Green
      'celadon-to-pigmentgreen': 'linear-gradient(to right, #A8E6A1, #4CAF50)',

      // Degradado de tres colores
      'three-color-gradient': 'linear-gradient(to right, #A8E6A1, #50c878, #4CAF50)',

    }
  },
  plugins: [],
}
