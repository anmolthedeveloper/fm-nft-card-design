/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      content: {
        nft: 'url("./images/icon-ethereum.svg")',
        clock: 'url("./images/icon-clock.svg")',
        avatar: 'url("./images/image-avatar.png")',
      },
      colors: {
        mainBG: "hsl(217, 54%, 11%)",
        cardBG: "hsl(216, 50%, 16%)",
        line: "hsl(215, 32%, 27%)",
        cyanText: "hsl(178, 100%, 50%)",
        cyanImg: "rgba(0, 255, 247, 0.5);",
        text: "hsl(215, 51%, 70%)",
      },
      fontFamily: {
        outfit: ["Outfit"],
      },
    },
  },
  plugins: [],
};
