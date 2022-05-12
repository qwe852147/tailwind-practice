const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  // prefix: 'bo-',
  // important: true,
  // separator:'_',
  theme: {
    alternative: {
      one: "1",
      two: "2",
      three: "3",
      ten: "10",
    },
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
  plugins: [
    plugin(function ({
      addUtilities,
      matchUtilities,
      addComponents,
      matchComponents,
      addBase,
      theme,
    }) {
      addBase({
        // add Default
        h1: { fontSize: theme("fontSize.2xl") },
        // h2: { fontSize: theme("fontSize.xl") },
        // h3: { fontSize: theme("fontSize.lg") },
      });

      addUtilities({
        ".content-red": {
          color: "red",
        },
        ".content-blue": {
          color: "blue",
        },
      });

      matchUtilities(
        {
          matchborderU: (value) => ({
            borderWidth: value + "px",
            borderColor: "blue",
          }),
        },
        { values: theme("alternative") }
      );

      matchComponents(
        {
          matchborderC: (value) => ({
            borderWidth: value + "px",
            borderColor: "blue",
          }),
        },
        { values: theme("alternative") }
      );
    }),
  ],
};
