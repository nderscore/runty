module.exports = {
  collectCoverageFrom: ['src/**/*.js'],
  moduleNameMapper: {
    '^runty$': '<rootDir>/src/index.js',
    '^runty/(.+)$': '<rootDir>/src/$1',
  },
  roots: ['<rootDir>/tests'],
  testMatch: [
    '**/*.test.js',
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  verbose: true
};
