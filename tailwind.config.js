module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "youmi-white": "#ffffff",
        "youmi-white-background": "#FCFCFC",
        "youmi-off-white": "#DEDEDE",
        "youmi-light-grey": "#C7C7C7",
        "youmi-very-light-grey": "#EFEFF2",
        "youmi-grey": "#707070",
        "youmi-black": "#12092C",
        "youmi-purple": "#5A2FDF",
        "youmi-light-purple": "#F5F2FF",
        "youmi-dark-purple": "#4C4C6B",
        "youmi-yellow": "#E7D85D",
        "youmi-teal": "#68DDD2",
        "youmi-blue": "#5FB6F2",
        "youmi-green": "#B0E971",
        "youmi-red": "#DB6174",
      },
      fontFamily: {
        display: ["Inter"],
      },
      animation: {
        pop: "pop 0.3s ease-in-out",
        fade: "fade 0.4s ease-in-out ",
        slide: "slide 0.2s ease-in-out ",
        popSlow: "pop 0.5s ease-in-out ",
      },
      keyframes: {
        pop: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
        fade: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slide: {
          "0%": {
            transform: "scale(0)",
            transformOrigin: "top right",
            opacity: 0,
          },
          "100%": {
            transform: "scale(1)",
            transformOrigin: "top right",
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
}
