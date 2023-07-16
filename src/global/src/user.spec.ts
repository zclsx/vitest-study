import { vi, it, expect } from "vitest";
import { doubleInnerWidth, doubleUserAge, doubleHeight } from "./user";

vi.mock("./window", () => {
  return {
    innerHeightFn: () => 200,
  };
});

it("doubleUserAge", () => {
  vi.stubGlobal("zc", { age: 24 });

  const r = doubleUserAge();

  expect(r).toBe(48);
});

it("double innerWidth", () => {
  // window
  vi.stubGlobal("innerWidth", 200);

  const r = doubleInnerWidth();

  expect(r).toBe(400);
});

it("double innerHight", () => {
  const r = doubleHeight();

  expect(r).toBe(400);
});
