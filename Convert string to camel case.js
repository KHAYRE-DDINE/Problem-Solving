/*******DESCRIPTION********/

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
  let regex = /[\W_]/g;
  let camelCase;
  if (str != "") {
    let camel = str
      .split(regex)
      .map((e) => {
        return `${e.charAt(0).toUpperCase()}${e.substring(1)}`;
      })
      .join("");

    for (i = 1; i <= camel.length; i++) {
      //  camel.charAt(0) = str.split(regex).join("")[0]
      camelCase = str.split(regex).join("")[0] + camel.substring(1);
    }
  } else {
    return "";
  }

  return camelCase;
}
console.log(toCamelCase("")); //, '', "An empty string was provided but not returned")
console.log(toCamelCase("the_stealth_warrior")); //, "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
console.log(toCamelCase("The-Stealth-Warrior")); //, "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
console.log(toCamelCase("A-B-C")); //, "ABC", "toCamelCase('A-B-C') did not return correct value")
