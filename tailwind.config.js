module.exports = {
  content: ["./src/**/*.{html,ts}"],
  // prefix: 'bo-',
  // important: true,
  // separator:'_',
  theme: {
    opacity: {
      10: "0.1",
      20: "0.2",
      40: "0.4",
      70: ".3",
    },
    extend: {
      opacity: {
        70: ".6",
      },
    },
  },
  presets: [
    // theme 繼承及定義
    require("./tailwind.config-theme"),
    // 測試多組 import
    // require("./tailwind.config-theme2"),
    // require("./tailwind.config-theme3"),
    // require("./tailwind.config-input-variant-order"),
  ],
  // corePlugins: {
  //   borderColor: false,
  //   backgroundColor: false,
  //   textColor: false,
  // },
};
