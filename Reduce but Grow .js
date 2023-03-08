function grow(x){
	let result = x.reduce((a,c) => {
		return  a * c
})
     return console.log(result)
}

grow([1, 2, 3]);
grow([4, 1, 1, 1, 4]); 
grow([2, 2, 2, 2, 2, 2])