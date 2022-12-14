/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*html',
    "./src/**/*.{html,js}"
    
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        lightYellow: 'hsl(47°, 62%, 79%)',
        dimYellow: '#fdfcf9'
      }
    },
  },
  plugins: [],
}
