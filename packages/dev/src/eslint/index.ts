// Copyright 2020-2023 @wavesrcool/dev authors & contributors
// SPDX-License-Identifier: MIT

export default {
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["@typescript-eslint", "prettier", "unused-imports"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    warnOnUnsupportedTypeScriptVersion: false,
  },
  rules: {
    "import/prefer-default-export": "off",
    "class-methods-use-this": "off",
    "no-console": "off",
    "no-nested-ternary": "off",
    "no-useless-return": "off",
    "no-bitwise": ["error", { allow: ["~"] }],
    "import/extensions": ["error", "never", { json: "always" }],
    "import/no-unresolved": 0,
    "prettier/prettier": ["error"],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "@typescript-eslint/no-unused-vars": 2,
    "unused-imports/no-unused-imports": "error",
    "no-param-reassign": [
      "error",
      { props: true, ignorePropertyModificationsFor: ["state"] },
    ],
  },
  ignorePatterns: [
    "**/build/*",
    "**/coverage/*",
    "**/node_modules/*",
    "/.vscode/**",
    "/.yarn/**",
    "/jest.config.js",
    "src/index.ts",
  ],
};
