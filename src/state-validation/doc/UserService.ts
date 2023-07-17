import { Database, User } from "./database";

//sut就是被测试的系统 ->UserService
export class UserService {
  // database -> 状态存于doc
  constructor(private database: Database) {}

  createUser(name: string): User {
    const id = Math.floor(Math.random() * 1000);
    const newUser: User = { id, name };
    this.database.addUser(newUser);
    return newUser;
  }
  //提供一个api直接去调用database
  findUser(id: number) {
    return this.database.getUser(id);
  }
}
