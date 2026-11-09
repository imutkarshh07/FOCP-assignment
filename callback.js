// ASSIGNMENT 3: CALLBACK-BASED UTILITY SYSTEM


// TASK 1: processArray

function processArray(arr, callback) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const value = callback(arr[i]);

    if (value !== undefined) {
      result.push(value);
    }
  }

  return result;
}


// TASK 2: square every number

function square(n) {
  return n * n;
}

console.log(processArray([1, 2, 3, 4], square));

// Output: [1, 4, 9, 16]


// TASK 3: return only even numbers

function onlyEven(n) {
  if (n % 2 === 0) {
    return n;
  }
}

console.log(processArray([1, 2, 3, 4], onlyEven));

// Output: [2, 4]


// TASK 4: processString

function processString(str, callback) {
  return callback(str);
}


// TASK 5: uppercase

function toUpper(text) {
  return text.toUpperCase();
}

console.log(processString("hello world", toUpper));

// Output: HELLO WORLD


// TASK 6: count words

function countWords(text) {
  const pieces = text.trim().split(/\s+/);
  let count = 0;

  if (text.trim() === "") {
    return 0;
  }

  for (let i = 0; i < pieces.length; i++) {
    if (pieces[i] !== "") {
      count++;
    }
  }

  return count;
}

console.log(processString("  hello   world  ", countWords));

// Output: 2


// TASK 7: calculate

function calculate(a, b, callback) {
  return callback(a, b);
}


// TASK 8: arithmetic operations

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error: Cannot divide by zero";
  }

  return a / b;
}

console.log("sum:-" + calculate(10, 5, add));
console.log("subtract:-" + calculate(10, 5, subtract));
console.log("multiply:-" + calculate(10, 5, multiply));
console.log("divide:-" + calculate(10, 5, divide));
console.log("divide of 10,0:-" + calculate(10, 0, divide));

// Output:
// sum:-15
// subtract:-5
// multiply:-50
// divide:-2
// divide of 10,0:-Error: Cannot divide by zero


// TASK 9: findElement

function findElement(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      return arr[i];
    }
  }

  return undefined;
}

function isBiggerThan2(n) {
  return n > 2;
}

function isBiggerThan10(n) {
  return n > 10;
}

console.log(findElement([1, 2, 3, 4], isBiggerThan2));
console.log(findElement([1, 2, 3, 4], isBiggerThan10));

// Output:
// 3
// undefined



