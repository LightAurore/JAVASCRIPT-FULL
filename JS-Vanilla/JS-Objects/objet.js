const person = {
  name: "Toto",
  age: 25,
  gender: "male",
};

const jobObject = {
  job: "developpeur web",
  salary: 3500,
};

console.log(Object.values(person));
console.log(Object.keys(person));
console.log(Object.entries(person));
//
const presentation = {
  fullName: function () {
    return `${this.name}, un ${this.gender} agé de ${this.age} an${
      this.age > 1 ? "s" : ""
    }`;
  },
};
console.log(Object.apply(jobObject));
console.log(presentation.fullName.apply(person));
//
const member = {
  name: "Tata",
  age: 27,
  gender: "female",
};
//
const presentation2 = {
  name: "dodo",
  age: 20,
  gender: "female",
  fullName: function () {
    return `${this.name}, un ${this.gender} agé de ${this.age} an${
      this.age > 1 ? "s" : ""
    }`;
  },
};
console.log(presentation2.fullName());
let nomComplet = presentation2.fullName.bind(member); // une fonction
console.log(nomComplet());

console.log(presentation.fullName.call(member));

let myString = JSON.stringify(person);
console.log(myString);

console.log(Object.assign(person, jobObject));
