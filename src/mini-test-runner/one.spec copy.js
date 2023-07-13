import {
  afterAll,
  afterEach,
  beforeEach,
  beforeAll,
  // run,
  test,
  it,
  expect,
} from "./core.js";

beforeAll(() => {
  console.log("before all");
});

beforeEach(() => {
  console.log("before each");
});

test("first test case", () => {
  console.log("first test case");
  expect(2).toBe(2);
});

it("second test case", () => {
  console.log("second test case");
  expect(2).toBe(3);
});

//test.only
// test("only test case", () => {
//   console.log("only test case");
// });

afterEach(() => {
  console.log("after each");
});

afterAll(() => {
  console.log("after all");
});

// run();
