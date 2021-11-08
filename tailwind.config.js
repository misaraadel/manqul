module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: `#676868`,
      secodary: `#707070`,
      yellow: `#E1A705`,
      white: `#fff`,
      dark: `#000`,
    },
    fontFamily: {
      display: ['Cairo', 'sans-serif'],
      body: ['Cairo', 'sans-serif'],
    },

    screens: {
      sm: '480px',
      md: '768px',
      lg: '1140px',
      xl: '1520px',
    },
    
    fontSize: {
      'heading': '35px',
      'featureHead': '25px',
      'footer': '20px',
      'paragraph': '16px',
      'copyrights': '15px'
    },

    container: {
      center: true,
      padding: '15px',
    },

    zIndex: {
      'min': -1,
      'max': 99,
      'full-max': 999,
    }, 
    lineHeight: {
      'generalHead': '66px',
      'copyrights': '50px',
      'featureLead': '47px',
      'footer': '37px',
      'head': '30px',

    },
    width: {
      'full': '100%',
      'fit-content': 'fit-content',
      'half': '50%',
      'semi-half': '60%',
      'header': '374.6px',
      'footer':'168px',
      'num': '162px',
      'logo': '136.24',
      'features': '120px',
      'feature': '90px',
      'icon': '24px' ,
    },
    height: {
      'full': '100%',
      'half': '50%',
      'header': '401.23px',
      'features': '120px',
      'num': '111px',
      'feature': '90px',
      'footer': '80px',
      'logo': '85px' ,
      'icon': '24px',
    },
    borderRadius: {
      'circle': '50%',
      'btn': '100px',
      'video': '40px',
      'input': '25px'
    }

  },

  variants: {},

  plugins: [
    // require('tailwindcss-logical'),
    // require('tailwindcss-dark-mode')()
  ],
  purge: {
    // enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.ts',
    ]
  },
}
