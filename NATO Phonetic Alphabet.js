/*******************DESCRIPTION****************************/


// Complete the function nato that takes a word in parameter and returns a string that spells the word using the NATO phonetic alphabet.
// There should be a space between each word in the returned string, and the first letter of each word should be capitalized.
// For those of you that don't want your fingers to bleed, this kata already has a dictionary typed out for you.


let LETTERS = {
    a: 'Alfa',
    b: 'Bravo',
    c: 'Charlie',
    d: 'Delta',
    e: 'Echo',
    f: 'Foxtrot',
    g: 'Golf',
    h: 'Hotel',
    i: 'India',
    j: 'Juliet',
    k: 'Kilo',
    l: 'Lima',
    m: 'Mike',
    n: 'November',
    o: 'Oscar',
    p: 'Papa',
    q: 'Quebec',
    r: 'Romeo',
    s: 'Sierra',
    t: 'Tango',
    u: 'Uniform',
    v: 'Victor',
    w: 'Whiskey',
    x: 'Xray',
    y: 'Yankee',
    z: 'Zulu'
}

// the object LETTERS is preloaded
// LETTERS['B'] === 'Bravo', etc
function nato(word) {
    let natoPhonetic = word.split("").map((el) => {
        return LETTERS[el.toLowerCase()]
    }).join(" ")
    return console.log(natoPhonetic);
}

nato("hi")// "Hotel India";
nato("abc")// "Alpha Bravo Charlie";
nato("babble")// "Bravo Alpha Bravo Bravo Lima Echo";
nato("Banana")// "Bravo Alpha November Alpha November Alpha";