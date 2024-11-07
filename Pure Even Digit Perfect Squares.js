
// DESCRIPTION:
// The integer 64 is the first integer that has all of its digits even and furthermore, is a perfect square.
// The second one is 400 and the third one 484.
// Give the numbers of this sequence that are in the range [a,b] (both values inclusive)

// Examples:
// Even digit squares between 100 to 1000:  [400, 484]  (the output should be sorted)
// Even digit squares between 1000 to 4000: []

function evenDigitSquares(a, b) {

	/*********** Solution one **************/

	/*	let even = Array.from({ length: b - a + 1 }, (_, i) => a + i)
		let pureEven = [];
	
		even.forEach((e) => {
			return Math.sqrt(e) % 2 == 0 && String(e).split('').every((n) => n % 2 == 0) ? pureEven.push(e) : ""
		})
	
		return pureEven; 
	*/

	/*********** Solution Two **************Best For Time Execution */

	let pureEven = [];
	let start = Math.ceil(Math.sqrt(a));
	let end = Math.floor(Math.sqrt(b));

	for (let i = start; i <= end; i++) {
		let square = i * i;
		if (String(square).split('').every(digit => digit % 2 === 0)) {
			pureEven.push(square);
		}
	}

	return pureEven;

}

console.log(evenDigitSquares(100, 1000))
console.log(evenDigitSquares(1000, 4000))
console.log(evenDigitSquares(45679, 92353))
console.log(evenDigitSquares(9325043, 53251072))


