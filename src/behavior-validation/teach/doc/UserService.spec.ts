import { vi, it, expect, describe } from "vitest";
import { UserService } from "./UserService";
import { Database } from "./database";

// 测试逻辑是：

// 创建一个Database实例和一个UserService实例。
// 使用spyOn函数模拟Database实例中的addUser方法。
// 调用userService.createUser("zc")。
// 使用expect断言来验证database.addUser是否被调用。
describe("UserService", () => {
  it("should create user ", () => {
    // setup
    Database.prototype.addUser = vi.fn()
    const database = new Database();

    //第二个参数方法名
    // vi.spyOn(database, "addUser") 

    // addUser.isCalled = false
    // addUser.isCalled = true
    console.log(database.addUser)
    const userService = new UserService(database);

    userService.createUser("zc")

    expect(database.addUser).toBeCalled()

  });
});
