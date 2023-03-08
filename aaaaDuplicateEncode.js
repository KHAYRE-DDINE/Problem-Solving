function duplicateEncode(word){
    let dup = [];
    
    let change = word.split("").map((e) => {
         
    
         
       if (word.indexOf(e) == -1){
          dup.push("(");
       }else{
          dup.push(")");
          }
    
    })
    
      return console.log(dup.join(""));
    }
    
    duplicateEncode("din")//"(((";
    duplicateEncode("recede")//"()()()";
    duplicateEncode("Success")//")())())";
    duplicateEncode("(( @")//"))((");