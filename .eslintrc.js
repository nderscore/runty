module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: ['eslint:recommended', 'prettier'],
  ignorePatterns: ['/website/**/*'],
  plugins: ['jest', 'prettier'],
  env: {
    'jest/globals': true,
  },
  rules: {
    'prettier/prettier': 'error',
  },
};
