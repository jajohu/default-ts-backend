/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'js'],
    testMatch: ['**/*.test.ts'],
    transform: {
      '^.+\\.ts$': 'ts-jest',
    },
  };