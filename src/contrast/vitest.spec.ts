import { expect, test } from "vitest";
import { add } from "./index";

test("vitest", () => {
  expect(add(1, 1)).toBe(2);
});
