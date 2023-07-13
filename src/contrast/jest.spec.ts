import { add } from "./index";

//jest默认是全局的api，直接可以去使用
test("should ", () => {
  expect(add(1, 2)).toBe(3);
});
