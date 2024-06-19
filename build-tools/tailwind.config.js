const plugin = require('tailwindcss/plugin')
module.exports = {
  corePlugins: {
    preflight: false,
    container: false
  },
  content: ["./../**/*.{html,php,}"],
  darkMode: 'dark-mode',
  theme: {
    fontFamily:{
      sans: ['Montserrat', 'sans-serif'],
     

    },
    container: {
      center: true,
      padding:{
        DEFAULT: "1rem",
        xs:"0.5rem",
      },
    },
    
    extend: {
      screens:{
        xs: "425px",
        sm: "576px",
        md: "768px",
        lg: '1024px',
        xl: "1200px",
        '2xl': '1480px',
        '3xl': '1680px',
      },
      colors:{
        primary_color_1: '#164D92',
        primary_color_2: '#00B48D',
        lightgreen: '#E8EFEA',
        lightgrey: '#C1CCD750',
        greenishyellow: '#F0FFEA',
        darkblue: '#607994',
        black:'#000000',
        white:'#FFFFFF'
      },
      borderRadius:{
        30:'31px',
        20:'20px',
        10:'10px'
      },
      padding:{
        sm:"15px",
        md:"30px",
        lg:"60px",
        xl:"100px",
        100:'100px',
        90:'90px'
      },

     
    },
  },
  plugins: [require('tailwindcss-rtl'),
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.__sample_class': {
          backgroundColor: theme('colors.white'),
          borderRadius: theme('borderRadius.lg'),
          padding: theme('spacing.6'),
          boxShadow: theme('boxShadow.xl'),
        }
      })
    }),
    function ({ addComponents }) {
      addComponents({
        '.rwcontainer': {
          maxWidth: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingRight: '30px',
          paddingLeft: '30px',
          overflow:"hidden",
          '@screen xs': {
            maxWidth: '425px',
          },
          '@screen xs': {
            maxWidth: '576px',
          },
          '@screen md': {
            maxWidth: '768px',

          },
          '@screen lg': {
            maxWidth: '960px',
          },
          '@screen xl': {
            maxWidth: '1160px',
          },
          '@screen 2xl': {
            maxWidth: '1450px',
            paddingLeft:'25px',
            paddingRight:'25px'
            
          },
          '@screen 3xl': {
            maxWidth: '1550px',
            paddingLeft:'30px',
            paddingRight:'30px',
          },
        }
      })
      addComponents({
        '.container-fluid': {
          width: '100%',
          paddingRight: '0.75rem',
          paddingLeft: '0.75rem',
          
        }
      })
      addComponents({
        '.container-small': {
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingRight: '18px',
          paddingLeft: '18px',
          '@screen 2xl': {
            maxWidth: '1450px',
            paddingLeft:'100px',
            paddingRight:'100px'
            
          },
          '@screen 3xl': {
            maxWidth: '1480px',
            paddingLeft:'100px',
            paddingRight:'100px',
          },
        },
      })
    }
  ],
  
}