/*******************DESCRIPTION****************************/


function dropCap(n) {
    let first;
    let cap;
    let word = n.split(" ").map(e =>{
    
     if(e.length > 2){
     
          first = e.charAt(0).toUpperCase()
          cap = first + e.substring(1).toLowerCase()
      
     }else{
          cap = e
     }
           return cap
 
    }).join(" ")
    
    return console.log(word)
 
 } 
 
 dropCap('Apple Banana')//,"Apple Banana");
 dropCap('jtGAene Gh CWPDcjtoQaZuVfjbWgW v')//,"Apple");
 dropCap('')//,"");
 dropCap('of')//,"of");
 dropCap('Revelation of the contents outraged American public opinion, and helped generate')//,"Revelation of The Contents Outraged American Public Opinion, And Helped Generate");
 dropCap('more  than	one space between words')//,"More  Than	One Space Between Words")
 dropCap('  leading spaces')//,"  Leading Spaces")
 dropCap('trailing spaces   ')//,"Trailing Spaces   ")
 dropCap('ALL CAPS CRAZINESS')//,"All Caps Craziness")
 dropCap('rAnDoM CaPs CrAzInEsS')//,"Random Caps Craziness")
 
 