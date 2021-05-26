module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "import/prefer-default-export": "off",
    "import/extensions": ["error", "always", { ignorePackages: true }],
    "no-use-before-define": ["error", { functions: false }],
    "no-unused-vars": "off",
    "max-len": ["error", { ignoreComments: true, code: 120 }],
    "no-alert": "off",
    "no-console": "off",
  },
  plugins: ["jest"],
};
