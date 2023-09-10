/*******************DESCRIPTION****************************/
/*
If we write out the digits of "60" as English words we get "sixzero"; the number of letters in "sixzero" is seven. The number of letters in "seven" is five. The number of letters in "five" is four. The number of letters in "four" is four: we have reached a stable equilibrium.

Note: for integers larger than 9, write out the names of each digit in a single word (instead of the proper name of the number in English). For example, write 12 as "onetwo" (instead of twelve), and 999 as "nineninenine" (instead of nine hundred and ninety-nine).

For any integer between 0 and 999, return an array showing the path from that integer to a stable equilibrium
*/
let numberWord = {

    "0": "zero",
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine"

}

function numbersOfLetters(integer) {
    // your code here

    let result = integer.toString().split("").map((e) => {
        return numberWord[e.toString()]
    }).join("")

    function doIt() {
        result = result.length.toString().split("").map((e) => {
            return numberWord[e.toString()]
        }).join("")

        return result
    }

    let all = []
    all.push(result)
    
    while (all[all.length-1] !== "four") {
        all.push(doIt())
    }

    // for (let i = 0; i < 5; i++) {
    //     all.push(doIt())
    //     if (all[all.length - 1] == all[all.length - 2]) {
    //         all.pop()
    //         break
    //     }
    // }

    return console.log(all)
}


numbersOfLetters(1)//["one", "three", "five", "four"]
numbersOfLetters(12)//["onetwo", "six", "three", "five", "four"]
numbersOfLetters(37)//["threeseven", "onezero", "seven", "five", "four"]
numbersOfLetters(311)//["threeoneone", "oneone", "six", "three", "five", "four"]
numbersOfLetters(999)//["nineninenine", "onetwo", "six", "three", "five", "four"]