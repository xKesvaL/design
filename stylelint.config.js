module.exports = {
  extends: "stylelint-config-standard-scss",
  plugins: ["stylelint-scss", "stylelint-order"],
  rules: {
    "declaration-property-unit-allowed-list": {
      "/^border/": ["px"],
      "/^padding|^gap/": ["rem"],
    },
    "unit-allowed-list": ["%", "deg", "rem", "ms"],
  },
  ignoreFiles: ["test/**/*"],
};
