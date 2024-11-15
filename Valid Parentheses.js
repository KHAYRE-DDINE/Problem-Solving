/*
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid.
The function should return true if the string is valid, and false if it's invalid.
*/

function validParentheses(parens) {
  // your code here ..
  let obj = {
    "(": ")",
  }
  let stack = []
  for (let i = 0; i < parens.length; i++) {
    let curr = parens[i]
    if (obj[curr]) {
      stack.push(obj[curr])
    } else if (stack.pop() !== curr) {
      return false;
    }
  }
  return stack.length === 0
}

console.log(validParentheses("()))))(((((")) // false;
console.log(validParentheses("()")) // true;
console.log(validParentheses("())")) // false;
console.log(validParentheses("()(())((()))(())()")) // true;