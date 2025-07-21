module.exports = {
  darkMode: 'class', // or 'media'
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      opensans: ['Open Sans', 'sans-serif'],
    },
    screens: {
      xxs: '340px',   // your small custom breakpoint
      mdx: '720px',   // custom medium screen breakpoint
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {},
  },
  plugins: [],
};
