/** @type {import('tailwindcss').Config} */
import   fluid ,{ screens, fontSize } from 'fluid-tailwind'
import daisyui from 'daisyui'

module.exports = {
  content: ["./src/**/*.{html,js,pug}"],
  theme: {
    screens,
    fontSize,
    container: {
      center: true,
    },
    extend: {
      fontSize: {        
        /** FontSize in PX */
        'class-name': ['font-size-in-rem', { lineHeight: 'line-height-in-rem' }], 
        'class-name': ['font-size-in-rem', { lineHeight: 'line-height-in-rem' }], 
    
      },      
    },
  },
  plugins: [
    fluid,
    daisyui
  ],
  corePlugins: {
    preflight: true, /** Ensure it's enabled */
  },
}
