function add(a: number, b: number): number {
  return a + b;
}

type strN = string | number;

function whatever(a: strN, b: strN, c: strN) {
  console.log('whatever', a, b, c);
}

let myValue: (a: number, b: number) => number; //* Function type

myValue = add;
// myValue = 8; // TS shows error

console.log(myValue(5, 7));

//---

//* Function type again

function addAndHandle(a: number, b: number, callback: (sum: number) => void) {
  const result = a + b;
  return callback(result);
}

addAndHandle(1, 2, (result) => {
  console.log(`Handled result is ${result}`);
});
