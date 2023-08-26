// Lets go fishing!

// Given an array of items, fish the odd one out!


function fish(odd) {
  //Go fish!
  if (odd.length > 1) {

    let str = []
    let other = []

    odd.map((e) => {
      typeof e === typeof "" ? str.push(e) : other.push(e)
    })

    odd.reduce((a, c) => {
      typeof a === typeof c ? console.log(a) : ""
    })

    // str.length == 1 ? console.log(str[0]) : "";
    // other.length == 1 ? console.log(other[0]) : "";

    // console.log(str);
    // console.log(other);

  } else {
    console.log("no catch")
  }
};

fish([1, 1, 1, "red herring", 1])// === "red herring");
fish(["red herring", "red herring", "red herring"])// === "no catch");
fish(["red herring", "blue herring", "yellow herring"])// === "no catch");
fish([1, 2, 1, 2])// === "no catch");
fish(["red herring"])// === "no catch");
fish([1, 1, 1, 2])// === "no catch");