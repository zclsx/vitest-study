// const user = {
//   age: 1,
// };

export function userAge() {
  //api
  //return user.age
  return 18;
  //这些获取方式都很有可能进行改变数据，一旦写死发生改变会出错->脆弱测试
}

//异步的方式
export function fetchUserAge(): Promise<number> {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      return resolve(18);
    }, 0);
  });
}

//这里面其实是去返回他们两个
// return {
//   userAge,
//   fetchUserAge,
// };
