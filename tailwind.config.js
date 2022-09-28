/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    daisyui: {
      themes: [
        {
          mytheme: {
            "primary": "#2C76DC",
            "secondary": "#F000B8",
            "accent": "#37CDBE",
            "neutral": "#0F284A",
            "base-100": "#FFFFFF",
            "info": "#CCEDFF",
            "success": "#36D399",
            "warning": "#FBBD23",
            "error": "#F87272",
          },
        },
      ],
    },
  },
  plugins: [require("daisyui")],
}
