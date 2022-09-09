function add(a: number, b: number, showResult: boolean, phrase: string) {
  const result = a + b;

  if (showResult) console.log(`${phrase} ${result}`);

  return result;
}

let a: number;
a = 1;

let b: number;
b = 2.7;

const result = add(a, b, true, 'Result is:');
