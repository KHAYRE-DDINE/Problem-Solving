/*******************DESCRIPTION****************************/

function squareSum(...numbers){
   
    let sumSqu = 0;
    let arrNum = numbers
    
    
 for (i = 0; i < arrNum.length; i++){
 
     sumSqu += Math.pow(arrNum[i], 2)
             
 }
     
     return sumSqu
 }
 
 
 console.log(squareSum(1,2,4,1))