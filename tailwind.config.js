/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['src/**/*.vue'],
  darkMode: 'class',
  screens: {},
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Proxima Nova', ...defaultTheme.fontFamily.sans]
    }
  },
  plugins: []
}
