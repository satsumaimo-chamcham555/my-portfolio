/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        floral: "#fffaf0",
        chartreuse: "#7fff00",
        skyaccent: "#87ceeb",
        hotpink: "#ff69b4",
      },
      keyframes: {
        stickerBlink: {
          "0%, 100%": { opacity: "0.78", transform: "scale(0.88)" },
          "50%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "sticker-blink":
          "stickerBlink 1.35s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
