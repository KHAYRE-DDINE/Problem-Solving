// ????????????????????????
/*
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid.
The function should return true if the string is valid, and false if it's invalid.
*/

function validParentheses(parens) {
  // your code here ..

  let parenthesis = parens.match(/(\(\(*\)*\))/g)
  let idx = 0

  parens.forEach(ele => {
    return ele.match(/(\(\(*\)*\))/g)
  })

  // if (idx * 2 === parens.length) {
  //   console.log(idx * 2 + ' ' + parens.length)
  //   console.log(true);
  // } else {
  //   console.log(idx * 2 + ' ' + parens.length)
  //   console.log(false);
  // }
}

validParentheses(")))))(((((") // false;
validParentheses("()") // true;
validParentheses("())") // false;
validParentheses("()(())((()))(())()") // true;