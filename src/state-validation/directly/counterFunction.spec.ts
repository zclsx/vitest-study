import { afterEach, it, expect, describe } from "vitest";
import { increment, getCount ,reset} from "./counterFunction";

describe("counter function", () => {
  afterEach(() => {
    reset();
  });
  it("increment", () => {
    //0->1
    increment();

    expect(getCount()).toBe(1);
    //做拆卸，恢复sut状态
    //reset()
  });

  it("second", () => {
    //1->2
    increment();

    expect(getCount()).toBe(1);
  });
});
