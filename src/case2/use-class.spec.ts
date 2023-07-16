import { it, expect, describe, vi } from "vitest";
import { doubleUserAge } from "./use-class";
// import { User } from "./User";

vi.mock("./User", async () => {
  return {
    User: class User {
      age: number = 2;
      //方法两种方式1.是在vimock里设置
      //   getAge() {
      //     return 2;
      //   }
    },
  };
});

describe("使用class的形式", () => {
  it("方法/属性", () => {
    // given

    // 2.是在User.prototype直接去改变
    // User.prototype.getAge = () => 2;

    // when
    const age = doubleUserAge();

    // then
    expect(age).toBe(4);
  });
});
