/*******************DESCRIPTION****************************/

var average = function (salary) {
    let min = salary.reduce((a, c) => {
      return a < c;
    });
    let max = salary.reduce((a, c) => {
      return a > c;
    });
    let sum = 0;
    let ave;
    for (i = 0; i < salary.length; i++) {
      if (salary[i] === min || salary[i] === max) {
        continue;
        
      } else {
        sum += salary[i];
       ave = sum / (salary.length - 2);
      } 
    }
    return console.log(ave);
  };
  
  average([2445, 4632, 3356, 2333]);