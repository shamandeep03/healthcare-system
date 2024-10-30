/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'secondary':'#6c6e6b',
        'primary':'#a4c4b6'
      },
      colors:{
        'secondary':'#6c6e6b',
        'primary':'#a4c4b6'
      }
    }
  },
  plugins: [],
};
