module.exports = {
  hooks: {
    'pre-push': 'jest',
    'pre-commit': 'lint-staged'
  }
};
