import { it, expect, describe, vi } from "vitest";
import { tellName } from "./use-variable";
import { name, gold } from "./config";

// vi.mock("./config", () => {
//   return {
//     name: "jk",
//   };
// });
//importOriginal提供回调函数参数获取原有文件的参数
vi.mock("./config", async (importOriginal) => {
  //vi.importActual这个api也可以获取原有文件的参数
  //   const config = await vi.importActual("./config");
  //   console.log(config);
  const config = await importOriginal();

  return {
    ...(config as any), //解构原先的值
    name: "jk",
  };
});

describe("使用变量的形式", () => {
  it("tell name ", () => {
    console.log(gold);
    // when
    const name = tellName();

    // then
    expect(name).toBe("xiaohong-heiheihei");
  });
});
