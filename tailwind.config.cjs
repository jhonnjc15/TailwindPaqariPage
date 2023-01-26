/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#00040f',
        secondary: '#00f6ff',
        dimWhite: 'rgba(255, 255, 255, 0.7)',
        dimBlue: 'rgba(9, 151, 124, 0.1)',
        paqariGreen: '#217276',
        paqariGreenDark: '#0c2324',
        paqariYellow: '#f3a415',
        paqariYellowHover: '#f3b815'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(rgb(33, 114, 118), rgb(12, 35, 36))',
        'gradient-radial-contact': 'linear-gradient(180deg, rgba(33,114,118,1) 0%, rgba(12,35,36,1) 100%);'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      keyframes: {
        comein: {
          '0%': {
            transform: 'translatey(100px)',
            opacity: '0'
          },
          '30%': {
            transform: 'translateX(-50px) scale(0.4)'
          },
          '70%': {
            transform: 'translateX(0px) scale(1.2)'
          },
          '100%': {
            transform: 'translatey(0px) scale(1)',
            opacity: '1'
          }
        }
      }
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px'
    }
  }
}
