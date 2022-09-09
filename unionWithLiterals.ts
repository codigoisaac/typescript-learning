function combine(
  a: number | string,
  b: number | string,
  resultConversion: 'as-number' | 'as-text'
) {
  let result: number | string;

  if (
    (typeof a === 'number' && typeof b === 'number') ||
    resultConversion === 'as-number'
  ) {
    result = +a + +b;
  } else {
    result = a.toString() + b.toString();
  }

  return result;
}

console.log(combine('this', 2, 'as-number'));
console.log(combine('this', ' is not it', 'as-text'));
console.log(combine(2, 7, 'as-text'));
console.log(combine('2', '7', 'as-number'));
