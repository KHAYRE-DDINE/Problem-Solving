let countOdds = function(low, high) {

    let odd = [];
  for(let i=low; i<=high; i++){
      if(i % 2 !== 0){
      odd.push(i)
      }}
  
  return console.log(odd.length)
  
};

countOdds(3, 13);