module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    useJSXTextNode: true,
    project: "./tsconfig.json",
    tsconfigRootDir: "../../",
    extraFileExtensions: [".tsx"]
  }
}
