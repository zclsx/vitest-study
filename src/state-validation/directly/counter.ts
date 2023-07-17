export class Counter {
  private count: number;

  constructor() {
    this.count = 0;
  }

  increment(): void {
    //this.count++这是 -> 实现细节
    this.count--;
    this.count++;
    this.count++;
    //只要细节重构不会影响最终结果
  }

  reset(): void {
    this.count = 0;
  }

  getCount() {
    return this.count;
  }
}
