/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "\\.tsx?$": "ts-jest",
  },
  globals: {
    "ts-jest": {
      tsConfig: "<rootDir>/tsconfig.json",
    },
  },
  moduleFileExtensions: ["ts", "tsx", "js"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
};