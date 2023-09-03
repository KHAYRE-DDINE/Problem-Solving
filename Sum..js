
/*******************DESCRIPTION****************************/

function Add(...val){
	let sum = val.reduce((a,c) => {
	    return a + c
	})

return sum
}

console.log(Add(1,2,3));
console.log(Add(4,14,5,9,14));
console.log(Add(2,36)); 