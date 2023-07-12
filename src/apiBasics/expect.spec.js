import { expect, it } from "vitest";

it("toBe", () => {
  // ===
  expect(1).toBe(1);
});

//两个对象之间进行比较
it("toEqual", () => {
  const user = {
    name: "zc",
  };
  expect(user).toEqual({
    name: "zc", //zc1 pass失败
  });
});

//toBeTruthy用于检测是不是返回了一个真值，至于值等于什么不关心
it("toBeTruthy", () => {
  expect(true).toBeTruthy();
  expect(1).toBeTruthy();
  expect("zc").toBeTruthy();
});

//
it("toBeFalsy", () => {
  expect(false).toBeFalsy();
  expect(0).toBeFalsy();
  expect("").toBeFalsy();
});

//toContain 是否包含
//数组 string
it("toContain", () => {
  const item1 = {
    name: "zc",
  };
  const item2 = {
    name: "jk",
  };
  const item3 = {
    name: "zy",
  };
  const arr = [item1, item2];
  expect(arr).toContain(item1);
  expect(arr).toContain(item2);
  // expect(arr).toContain(item3)//failed

  //string
  expect("zc").toContain("z");
  expect("<div>1234</div>").toContain("1234");
});

//toThrow检测函数是否会抛出一个error
it("toThrow", () => {
  function getName(name) {
    if (typeof name !== "string") {
      throw new Error("错误的name");
    }

    return "hey";
  }
  expect(() => {
    getName(111);
  }).toThrow("错误的name");//toThrow("1234") failed
});

