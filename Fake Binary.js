
/*******************DESCRIPTION****************************/

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'.
// Return the resulting string.
// Note: input will never be an empty string

function fakeBin(x){
    let binary = x.split("").map((e) => {
        return e < 5 ? e = 0 : e = 1;
 }).join("")
    return console.log(binary)
    
 }
    
fakeBin('45385593107843568') //'01011110001100111';
fakeBin('509321967506747') //'101000111101101'; 
fakeBin('366058562030849490134388085') //'011011110000101010000011011';
 