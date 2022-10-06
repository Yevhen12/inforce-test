module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {},
      boxShadow: {
      'defaultBtn': '0px 2px 7px 0px rgba(0,0,0,0.5)',
      },
      minHeight: {
        '600': '600px',
      },
      colors: {
        'modal': 'rgba(0, 0, 0, 0.6)',
      },
      scale: {
        'half': '0.5',
        'full': '1'
      },
      height: {
        'btn': '40px'
      },
      width: {
        'drop': '110px'
      }
    },
  },
  plugins: [],
}