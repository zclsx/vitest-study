import { vi, it, expect, describe } from "vitest";
import { login, loginV2, getTip } from "./login";
import { cxrLogin } from "cxr";

// mock
vi.mock("cxr", () => {
  return {
    //mock
    cxrLogin: vi.fn().mockReturnValue(true), //mock是必须要去记录值的，而且负责验证
    // cxrLogin: vi.fn(() => true),

    //stub
    // cxrLogin: () => 2, //stub只是去提供值，不负责去记录 不负责去验证
  };
});

describe("login", () => {
  it("should called login function from cxr  ", async () => {
    login("cxr", "jiubugaosuni");

    expect(cxrLogin).toBeCalled();
    // expect(cxrLogin).toBeCalledWith("cxr", "jiubugaosuni");
    // expect(cxrLogin).toBeCalledTimes(1);
  });

  it("v2", () => {
    loginV2("cxr", "jiubugaosuni");

    expect(cxrLogin).toBeCalled(); //行为验证
    expect(getTip()).toBe("登录成功拉"); //状态验证
  });
});
