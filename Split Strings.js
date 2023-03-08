/*******DESCRIPTION********/
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str){
 
    let regex = str.split(/(\w{2})/)
  
    let under = regex.filter(e => {
        return  e.length > 0
    }).map(el => {
        return el.length < 2 ? `${el}_` : el
    })
    console.log(under)
  }
  
  
  solution("abcdef")//, ["ab", "cd", "ef"]);
  solution("abcdefg")//, ["ab", "cd", "ef", "g_"]);
  solution("")//, []);
  