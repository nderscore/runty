module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  ignorePatterns: ['/website/**/*'],
  plugins: ['jest', 'prettier', '@typescript-eslint'],
  env: {
    'jest/globals': true,
  },
  rules: {
    'prettier/prettier': 'error',
  },
};
