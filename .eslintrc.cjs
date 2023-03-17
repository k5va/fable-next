/** @type {import("eslint").Linter.Config} */
module.exports = {
  overrides: [{
    extends: ["plugin:@typescript-eslint/recommended-requiring-type-checking"],
    files: ["*.ts", "*.tsx"],
    parserOptions: {
      project: "tsconfig.json"
    },
    rules: {
      "@typescript-eslint/restrict-template-expressions": "off",
      "@typescript-eslint/consistent-type-imports": "off",
      "@typescript-eslint/no-misused-promises": "off"
    }
  }],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json"
  },
  plugins: ["@typescript-eslint"],
  extends: ["next/core-web-vitals", "plugin:@typescript-eslint/recommended", "plugin:storybook/recommended"],
  rules: {
    "@typescript-eslint/consistent-type-imports": ["warn", {
      prefer: "type-imports",
      fixStyle: "inline-type-imports"
    }]
  }
};