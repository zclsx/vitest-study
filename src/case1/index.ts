import { fetchUserAge, userAge } from "./user";

//直接Input
function add(a: number, b: number) {
  return a + b;
}

//间接input
export function doubleUserAge(): number {
  return userAge() * 2;
}

export async function fetchDoubleUserAge(): Promise<number> {
  const result = await fetchUserAge();
  return result * 2;
}
