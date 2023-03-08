
/*******DESCRIPTION********/

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){
	// code away

	let spaceIndex = name.indexOf(" ")
	
	let letterOne = name.substr(0,1)
	
	let letterTwo = name.substr(spaceIndex, 2).trim()

	return console.log((letterOne +"."+ letterTwo).toUpperCase())
}


abbrevName("Sam Harris") // "S.H");
abbrevName("Patrick Feenan") // "P.F");
abbrevName("Evan Cole") // "E.C");
abbrevName("P Favuzzi") // "P.F");
abbrevName("David Mendieta") //  "D.M");