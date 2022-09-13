function add(a: number, b: number): number {
  return a + b;
}

let myValue: Function;

myValue = add;
// myValue = 8; // TS shows error

console.log(myValue(5, 7));
