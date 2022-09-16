// type aliases
type numberOrString = number | string;
type converversionType = 'as-number' | 'as-text';

function combine(
  a: numberOrString,
  b: numberOrString,
  resultConversion: converversionType
) {
  let result: numberOrString;

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
