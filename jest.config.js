/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '.+\\.(css)$': 'jest-css-modules-transform',
    '.+\\.(svg)$': 'svg-jest',
  },
}
