
/*******DESCRIPTION********/

// Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database.
//  At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.
// Examples (input -> output)
// '! !'                 -> '! !'
// '123456789'           -> ''
// 'This looks5 grea8t!' -> 'This looks great!'
// Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. 
// Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.

function pigIt(str){
    //Code here
    let reversered = str.split(" ").map((e) => {
    
        return `${e.slice(1)}${e.slice(0,1)}ay`
  
    }).join(" ")
    
    return reversered
  }
  
  console.log(pigIt('Pig latin is ugly')); // igPay atinlay siay oolcay
  console.log(pigIt('Hello world !')); // elloHay orldway !
  console.log(pigIt('This is my string')) //'hisTay siay ymay tringsay