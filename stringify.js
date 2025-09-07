const person = {
  name: "selim",
  fruit: "dalim",
  dish: "halim",
  friends: ["alim", "kolim", "lamim"],
  isRich: false,
  money: 34000,
};

console.log(person, typeof person); 

const personJSON = JSON.stringify(person);
console.log(personJSON, typeof personJSON);
