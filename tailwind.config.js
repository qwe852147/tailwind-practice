module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    opacity: {
      10: "0.1",
      20: "0.2",
      40: "0.4",
    },
  },
  presets: [
    // theme 繼承及定義
    require("./tailwind.config-theme"),
    // 測試多組 import
    // require("./tailwind.config-theme2"),
    // require("./tailwind.config-theme3"),
  ],
};
