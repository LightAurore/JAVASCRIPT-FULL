// Object.methode

//	Object.assign()
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
/*-----------------------------------------------------------------------------------
// Object.create()
const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};

const me = Object.create(person);

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // Inherited properties can be overwritten

me.printIntroduction();
// Expected output: "My name is Matthew. Am I human? true"

const you = person;
you.name = 'Lorenzo';
you.isHuman = true;

you.printIntroduction();*/

/*-----------------------------------------------------------------------------------
// Object.defineProperties()
const object1 = {};

Object.defineProperties(object1, {
  property1: {
    value: 42,
    writable: true,
  },
  property2: {},
});

console.log(object1.property1);
// Expected output: 42
*/

/*-----------------------------------------------------------------------------------
// Object.defineProperty()
const object1 = {};

Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false,
});

object1.property1 = 77;
// Throws an error in strict mode

console.log(object1.property1);
// Expected output: 42

Object.defineProperty(obj, "key2", {
  enumerable: false,
  configurable: false,
  writable: false,
  value: "static",
});*/

/*-----------------------------------------------------------------------------------
// Object.entries()
const object1 = {
  a: 'somestring',
  b: 42,
};

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

// Expected output:
// "a: somestring"
// "b: 42"
// 

// Using for...of loop
const obj = { a: 5, b: 7, c: 9 };
for (const [key, value] of Object.entries(obj)) {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
}

// Using array methods
Object.entries(obj).forEach(([key, value]) => {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
});
*/

/*-----------------------------------------------------------------------------------*/
//	Object.freeze()
const obj = {
  prop: 42,
};

Object.freeze(obj);

obj.prop = 33;
// Throws an error in strict mode

console.log(obj.prop);
// Expected output: 42



/*-----------------------------------------------------------------------------------*/
//



/*-----------------------------------------------------------------------------------*/
//



/*-----------------------------------------------------------------------------------*/
//



/*-----------------------------------------------------------------------------------*/
//




/*-----------------------------------------------------------------------------------*/
//



/*-----------------------------------------------------------------------------------*/
//



/*-----------------------------------------------------------------------------------*/
//
