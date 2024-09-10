const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: [
    '<rootDir>/src/testing/setup-tests.ts',
  ],
  setupFiles: ['./jest.polyfills.js'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  testEnvironmentOptions: {
    customExportConditions: [''],
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
  testPathIgnorePatterns: [
    '<rootDir>/cypress/',
    '<rootDir>/code-stages/',
  ],
};

module.exports = createJestConfig(customJestConfig);
