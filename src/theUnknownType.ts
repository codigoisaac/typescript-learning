//* 'unknow' is better than 'any' cause it involves the value being checked

let userInput: unknown;
// let userInput: any;

let userName: string;

userInput = 'ok';
userInput = 7;

// TS will show error - unknown is not garanteed to be a string
// But if userInput is 'any', then it works
// userName = userInput;

// But this will work with userInput being 'unknown', because of the check
if (typeof userInput === 'string') {
  userName = userInput;
}
