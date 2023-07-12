import {
  describe,
  test,
  beforeEach,
  beforeAll,
  afterAll,
  afterEach,
} from "vitest";

// setup -> before
// teardown -> after

//1.他们的执行顺序
//beforeEach会跟每个test去执行
//beforeAll beforeEach test afterEach afterAll

//beforeAll只执行一次，在最开始的时候
//eg:数据库的连接创建 / 创建临时文件
beforeAll(() => {
  console.log("beforeAll");
  return () => {
    //afterAll  vitest提供在这里去调用
    console.log("afterAll");
  };
});

//eg: pinia store
beforeEach(() => {
  console.log("beforeEach");
  return () => {
    //afterEach vitest提供在这里去调用
    console.log("afterEach");
  };
});

test("first", () => {
  console.log("first");
});

test("second", () => {
  console.log("second");
});

//eg:reset() 清除
afterEach(() => {
  console.log("afterEach");
});

describe("sub", () => {
  beforeEach(() => {
    console.log("sub:describe beforeEach");
  });

  test("sub first", () => {
    console.log("sub first");
  });

  afterEach(() => {
    console.log("sub:describe afterEach");
  });
});

//只执行一次，并且在最后
//eg:数据库：断开链接 / 临时文件：需要进行删除
afterAll(() => {
  console.log("afterAll");
});

//2.什么时候用
