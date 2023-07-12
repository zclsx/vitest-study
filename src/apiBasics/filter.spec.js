import { it, test } from "vitest";

//skip only todo

it.skip("test", () => {
  add();
});

test.only("test", () => {
  add();
});

it("test", () => {
  add();
});

//todo
test.todo("add"); //test("add")
test.todo("add reverse"); //test("add reverse")
test.todo("remove"); //test("remove")
