module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'inner-xl': '4px 4px 4px 0px rgba(0, 0, 84, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: [
          'Archivo',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      slashedZero: {
        'font-variant-numeric': 'slashed-zero',
      }
    },
  },
  plugins: [],
}