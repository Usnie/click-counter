Листинг 4. Код jest.config.js
module.exports = {
    preset: '@vue/cli-plugin-unit-jest',
    collectCoverage: true,
    collectCoverageFrom: ['**/*.vue', "!**/node_modules/**"],
    coverageReporters: ['lcov', 'text-summary'],
    coverageThreshold: {
      "global": {
        "branches": 80,
        "functions": 80,
        "lines": 50,
        "statements": -15
      }
    }
  }
