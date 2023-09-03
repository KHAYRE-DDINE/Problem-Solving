/*******************DESCRIPTION****************************/


/*
 Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.
 
 The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').
 */

function toWeirdCase(string) {
  //TODO
  let length = string.split(" ")
  let weird = ""
  for (i = 0; i < length.length; i++) {
    for (let j = 0; j < length[i].length; j++) {
      if (j % 2 == 0) {
        weird += length[i][j].toUpperCase()
      } else {
        weird += length[i][j].toLowerCase()
      }
    }

    weird += " "
  }
  return weird.trimEnd()
}

console.log(toWeirdCase('This is a test'))



