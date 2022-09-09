function combine(a, b) {
    var result;
    if (typeof a === 'number' && typeof b === 'number') {
        result = a + b;
    }
    else {
        result = a.toString() + b.toString();
    }
    return result;
}
console.log(combine('this', 2));
console.log(combine('this', ' is not it'));
console.log(combine(2, 7));
console.log(combine('2', '7'));
