console.log([] == ![]);

let arr = [1, 2, 2, 3, 1, 4, 5];

console.log(arr == !arr);

let tab = {
  nom: "John",
  prenom: "Doe",
  age: 25,
  job: "Dev web",
  hobbies: ["sport", "voyage", "culture", "cuisine"],
};

console.log({} == !{});
console.log(tab == !tab);
console.log(!tab);
console.table(tab);
