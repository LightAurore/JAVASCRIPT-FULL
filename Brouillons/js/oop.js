"use srict";

const house = {
  nbRoom: 6,
  HasBathRoom: true,

  bedRoom: 3,
  HasKitchen: true,
};

house.hasGargen = true;

house.HasKitchen = false;

console.log(house);

/** ------------ Prototype   ---------------- */
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

let personnage = new Person("della", "duck");
console.log(personnage.firstName, Person);

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
  *getSides() {
    yield this.height;
    yield this.width;
    yield this.height;
    yield this.width;
  }
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100
console.log([...square.getSides()]); // [10, 10, 10, 10]

/* 
  const monFile = new File();
  
  monFile = `./assets/images`;

  console.log(monFile);

 */

class Car {
  constructor(brand) {
    this._carname = brand;
  }
  set carname(x) {
    this._carname = x;
  }
  get carname() {
    return this._carname;
  }
}

const ob = {
  marque: "mercedes",
  modele: "class E",
  porte: 4,
  annee: 2020,
  proprietaire: ["Alex", "Alix", "Algue", "Alien"],
};

const ar = ["bmw", "vw", "mini", "kia"];

//Now you can use the class:
const myCar = new Car(ar);
console.log(myCar.carname);

//Now you can use the class:
const myCar1 = new Car(ob);
console.log(myCar1.carname);
