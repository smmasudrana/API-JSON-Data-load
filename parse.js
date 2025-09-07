const person = {
  name: "selim",
  fruit: "dalim",
  dish: "halim",
  friends: ["alim", "kolim", "lamim"],
  isRich: false,
  money: 34000,
};


// 1. Stringify (object → string)
const personString = JSON.stringify(person);
console.log(personString, typeof personString);

// 2. Parse (string → object)
const personJSON = JSON.parse(personString);
console.log(personJSON, typeof personJSON);
