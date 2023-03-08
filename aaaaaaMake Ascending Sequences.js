// ???????????????????????????
/*******DESCRIPTION********/
// Task
// You are given a positive integer n. We intend to make some ascending sequences according to the following rules:

// Make a sequence of length 1: [ n ]

// Or, insert a number to the left side of the sequence. But this number can not exceed half of the first number of the sequence.

// Follow rule 2, continue insert number to the left side of the sequence.

// Your task is to count the number of all possible sequences, and return it.

// If you do not understand the task, please read the rewritten version below:

// You are given a positive integer n. Your task is to count the number of such sequences:

// It should be an ascending sequence;

// It should end with number n.

// Each number in the sequence should smaller or equals to the half of its right, except for the last number n.

// We define that a sequence containing only a number n is a valid ascending sequence.

// Examples
// For n = 6, the output should be 6.

// All sequences we made are:

// [6]

// insert a number to the left:

// [1,6]
// [2,6]
// [3,6]

// continue insert number:

// [1,2,6]
// [1,3,6]

function makeSequences(n){
    //coding and coding..
    let seq = []
    for(i=0; i<=parseInt(n); i++){
        seq.push(i)
    }
    seq.push(n)
       
       let make = seq.reduce((a,c)=>{
           return a + c
       })
    return make
    
  }
  
  console.log(makeSequences(82))
  