// test it
//expect toBe
//test.only
//提示是否通过/报错
//beforeAl beforeEach afterAll afterEach
//describe
//自动执行所有的测试脚本 *.spec.js

//收集
const tests = [];
const onlys = [];
const beforeAlls = [];
const beforeEachs = [];
const afterEachs = [];
const afterAlls = [];

export function beforeAll(callback) {
  beforeAlls.push(callback);
}

export function beforeEach(callback) {
  beforeEachs.push(callback);
}

export function test(name, callback) {
  tests.push({ name, callback });
}

test.only = (name, callback) => {
  onlys.push({ name, callback });
};

export const it = test;

export function expect(actual) {
  return {
    toBe(expected) {
      if (expected === actual) {
        console.log("ok");
      } else {
        throw new Error(`fail actual:${actual} expected:${expected}`);
      }
    },
  };
}

export function afterEach(callback) {
  afterEachs.push(callback);
}

export function afterAll(callback) {
  afterAlls.push(callback);
}

export function run() {
  for (const beforeAllCallback of beforeAlls) {
    beforeAllCallback();
  }

  const suit = onlys.length > 0 ? onlys : tests;

  for (const test of suit) {
    for (const beforeEachCallback of beforeEachs) {
      beforeEachCallback();
    }
    try {
      test.callback();
      console.log(`ok:${test.name}`);
    } catch (error) {
      console.log(`fail:${error}`);
    }
    for (const beforeEachCallback of afterEachs) {
      beforeEachCallback();
    }
  }

  for (const beforeAllCallback of afterAlls) {
    beforeAllCallback();
  }
}

//实现一个toEqual
