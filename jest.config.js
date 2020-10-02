/* eslint-disable no-undef */
module.exports = {
  collectCoverageFrom: ['src/**/*.js'],
  moduleNameMapper: {
    '^runty$': '<rootDir>/src/index.js',
  },
  roots: ['<rootDir>/tests'],
  testMatch: ['**/*.test.js'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  verbose: true,
};
