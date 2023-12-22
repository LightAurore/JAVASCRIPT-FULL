'use srict';

const house = {
    nbRoom: 6,
    HasBathRoom: true,

    bedRoom: 3,
    HasKitchen: true
}

house.hasGargen = true;

house.HasKitchen = false;

console.log(house);



/** ------------ Prototype   ---------------- */
function Person(firstName, lastName){
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


  const monFile = new File();
  
  monFile = `./assets/images`;

  console.log(monFile);

  