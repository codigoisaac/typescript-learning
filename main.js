function add(a, b, showResult, phrase) {
    var result = a + b;
    if (showResult)
        console.log("".concat(phrase, " ").concat(result));
    return result;
}
var a = 1, b = 2.7, result = add(a, b, true, 'Result is:');
