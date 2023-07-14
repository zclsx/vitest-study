import { doubleUserAge, fetchDoubleUserAge } from "./index";
import { vi, it, expect, describe, beforeEach } from "vitest";
import { userAge, fetchUserAge } from "./user";
//stub 存根
//替换掉真实的逻辑实现
//vi.mock api 参数：第一个path 第二个工厂函数

// console.log(userAge()); //mock会替换到最顶部

// //同步
// vi.mock("./user", () => {
//   return {
//     userAge: () => 2,
//   };
// });

//异步
vi.mock("./user", () => {
  return {
    fetchUserAge: () => Promise.resolve(2),
  };
});

//第二种方式只传路径，第二个参数赋值放入测试case中去returnvalue
// vi.mock("./user");

//第三中domock还需要导入

describe("间接input", () => {
  beforeEach(() => {
    // vi.doMock("./user", () => {
    //   return {
    //     userAge: () => 2,
    //   };
    // });
  });

  it.skip("first", () => {
    //given
    vi.mocked(userAge).mockReturnValue(2);
    //when
    const result = doubleUserAge();

    //then
    expect(result).toBe(4);
  });

  //mock数据全局的
  it.skip("second", () => {
    console.log(userAge());
  });

  it.skip("domock", async () => {
    const { doubleUserAge } = await import("./index");

    const result = doubleUserAge();

    //then
    expect(result).toBe(4);
  });

  it("promise mock", async () => {
    const result = await fetchDoubleUserAge();

    //then
    expect(result).toBe(4);
  });
});
