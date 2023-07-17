import { it, expect, describe } from "vitest";
import { UserService } from "./UserService";
import { Database } from "./database";

describe("UserService", () => {
  it("should create user ", () => {
    const database = new Database();
    const userService = new UserService(database);

    const user = userService.createUser("zc");

    // expect(database.getUser(user.id)?.name).toBe("zc");
    expect(userService.findUser(user.id)?.name).toBe("zc");
  });
});
