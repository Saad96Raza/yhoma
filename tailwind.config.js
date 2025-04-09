/** @type {import('tailwindcss').Config} */
import   fluid ,{ screens, fontSize } from 'fluid-tailwind'
module.exports = {
  content: ["./src/**/*.{html,js,scss}"],
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
  plugins: [fluid],
  corePlugins: {
    preflight: true, /** Ensure it's enabled */
  },
}
