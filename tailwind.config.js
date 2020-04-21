module.exports = {
  theme: {
    fontFamily: {
      light: ['Cocon Next Arabic Light', 'sans-serif'],
      body: ['Cocon Next Arabic Regular', 'sans-serif'],
      bold: ['Cocon Next Arabic Bold', 'sans-serif'],
    },
    colors: {
      pink: '#FF0058',
      yellow: '#FAD848',
      gray: '#535B6C',
      light: '#AAB3C2',
      slight: '#E7EBF2',
      white: '#fff',
      red: '#F50000',
      softblack: '#0A0E20'
    },
    container: {
      center: true,
    },
    extend: {
      screens: {
        '2xl': '1400px',
        '3xl': '1600px',
        '4xl': '1900px',
      },
      fontSize: {
        '8xl': '6rem',
      }
    },
  },
  variants: {
  borderColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
},
  plugins: [],
}
