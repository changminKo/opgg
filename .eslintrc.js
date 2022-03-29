module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  ignorePatterns: ['.eslintrc.js', 'craco.config.js'],
  rules: {
    "no-console": "warn",
    "react/function-component-definition": "off",
    "import/prefer-default-export": "off",
    "import/extensions": "off",
    "react/no-array-index-key": "off",
    "max-len": ["error", { "code": 180 }]
  },
};
