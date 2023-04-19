module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  }, daisyui: {
    styled: true,
    themes: [
      {
        main: {

          "primary": "#bbf7d0",
          "secondary": "#4d7c0f",
          "accent": "#3f6212",
          "neutral": "#67e8f9",
          "base-100": "#111827",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
}