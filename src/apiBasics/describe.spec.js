import { describe, it, expect } from "vitest";
//测试套件 test suit -> 里面两个case it 
//skip统一处理直接跳过 describe.skip
//only只执行only选中的测试套件进行测试 describe.only ,其余的测试套件skip

describe("add", () => {
  const user = {
    name: "zc",
  };
  it("should add a item to todos", () => {
    expect(user.name).toBe("zc");
  });
  it("should add a item to todos with reverse command", () => {
    expect(user.name).toBe("cz");
  });

  //尽量不要去嵌套套多（2-3层），不然组织会有些问题
  describe('sum', () => {
    
  });
  describe('sub', () => {
    
  });
});

describe("remove", () => {
  it("should remove a item", () => {});
});
