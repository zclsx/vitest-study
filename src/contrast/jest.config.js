/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  //import { add } from "./index"jest因@别名不理解，要重新配置
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
  },
};
