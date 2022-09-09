function add(a: number, b: number, showResult: boolean, phrase: string) {
  const result = a + b;

  if (showResult) console.log(`${phrase} ${result}`);

  return result;
}

const a = 1,
  b = 2.7,
  result = add(a, b, true, 'Result is:');
