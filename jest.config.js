/* eslint-disable no-undef */
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  // FIXME: update preset after removing all JS code
  preset: 'ts-jest/presets/js-with-ts-esm',
  testEnvironment: 'node',
  collectCoverageFrom: ['src/**/*.js', 'src/**/*.ts'],
  moduleNameMapper: {
    '^runty$': '<rootDir>/src/index.js',
  },
  roots: ['<rootDir>/tests'],
  testMatch: ['**/*.test.js'],
  verbose: true,
};
