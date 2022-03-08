module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parserOptions: {
    tsconfigRootDir: './packages/runty',
    project: ['./packages/**/tsconfig.json']
  },
  ignorePatterns: ['**/dist/**/*', '**/build/**/', 'packages/website/**/*'],
  plugins: ['jest', '@typescript-eslint', 'simple-import-sort', 'prettier'],
  env: {
    'jest/globals': true,
  },
  rules: {
    'prettier/prettier': 'error',
    'sort-imports': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error'
  },
};
