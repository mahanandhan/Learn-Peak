module.exports = {
    theme: {
      extend: {
        animation: {
          border: "borderMove 4s linear infinite",
          "fade-in": "fadeIn 1s ease-in-out",
          "slide-in": "slideIn 1s ease-out",
          bounce: "bounce 1.5s infinite",
          pulse: "pulse 2s infinite",
        },
        keyframes: {
          borderMove: {
            "0%": { transform: "translateY(0)" },
            "25%": { transform: "translateX(10px)" },
            "50%": { transform: "translateY(10px)" },
            "75%": { transform: "translateX(-10px)" },
            "100%": { transform: "translateY(0)" },
          },
          fadeIn: {
            "0%": { opacity: 0 },
            "100%": { opacity: 1 },
          },
          slideIn: {
            "0%": { transform: "translateY(-20px)", opacity: 0 },
            "100%": { transform: "translateY(0)", opacity: 1 },
          },
        },
      },
    },
  };
  