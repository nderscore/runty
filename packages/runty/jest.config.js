/* eslint-disable no-undef */
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  // FIXME: update preset after removing all JS code
  preset: 'ts-jest/presets/js-with-ts-esm',
  testEnvironment: 'node',
  collectCoverageFrom: ['src/**/*.js', 'src/**/*.ts'],
  moduleNameMapper: {
    '^runty$': '<rootDir>/src/index.ts',
  },
  roots: ['<rootDir>/tests'],
  testMatch: ['**/*.test.js', '**/*.test.ts'],
  verbose: true,
  globals: {
    'ts-jest': {
      tsconfig: 'tests/tsconfig.json',
    },
  },
};
