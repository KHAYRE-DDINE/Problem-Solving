
/*******************DESCRIPTION****************************/

function stringClean(s) {
    // Function will return the cleaned string
    let patt = /[^1-90]/g;
  
    // return console.log(patt.test(s))
  
    if(patt.test(s)){
      return console.log( (s = s.match(patt)).join(""))
    }else{
      return console.log(s = ""); 
    }
      
  }
  stringClean(""); // ""
  stringClean("123456789"); // "
  stringClean("! !"); //"! !"
  stringClean("(E3at m2e2!!)"); // "(Eat me!!)"
  stringClean("Dsa32 cdsc34232 csa!!! 1I 4Am cool!"); // "Dsa cdsc csa!!! I Am cool!"
  stringClean("A1 A1! AAA   3J4K5L@!!!"); // "A A! AAA   JKL@!!!"