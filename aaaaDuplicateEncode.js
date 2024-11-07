function duplicateEncode(word) {

   let change = word.split("").map((e) => {
      
   })

   return change;
}

console.log(duplicateEncode("din"))  // (((;
console.log(duplicateEncode("recede"))  // ()()();
console.log(duplicateEncode("Success"))  // )())());
console.log(duplicateEncode("(( @"))  // ))((;