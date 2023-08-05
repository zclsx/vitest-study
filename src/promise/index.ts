export function fetchUserData() {
  return new Promise((resolve, _reject) => {
    resolve("1");
  });
}

export function delay(time: number) {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve("ok");
    }, time);
  });
}
