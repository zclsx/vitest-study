import { innerHeightFn } from "./window";

export function doubleUserAge() {
  // const userAge = localStorage.getItem("userAge");
  return zc.age * 2;
}

export function doubleInnerWidth() {
  return innerWidth * 2;
}

export function doubleHeight() {
  return innerHeightFn() * 2;
}
