const items = {
  first: new Date(),
  second: 2,
  third: "test",
};

const legumes = ["tomate", "épinards", "choux", "haricots"];

legumes.map((item) => {
  console.log(item);
});
Object.values(items).map((item) => {
  console.log(item);
});

Object.values(items).forEach((item) => {
  console.log(item);
});

for (const item of Object.values(items)) {
  console.log(item);
}

/* for...in Loop */
const user = {
  name: "John Doe",

  email: "john.doe@example.com",

  age: 25,

  dob: "08/02/1989",

  active: true,
};

// iterate over the user object

for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}

for (const key in user) {
  if (user.hasOwnProperty(key)) {
    console.log(`${key}: ${user[key]}`);
  }
}

/*  Object.keys() Method*/
const courses = {
  java: 10,

  javascript: 55,

  nodejs: 5,

  php: 15,
};

// convert object to key's array

const keys = Object.keys(courses);

// print all keys

console.log(keys);

// [ 'java', 'javascript', 'nodejs', 'php' ]

// iterate over object

keys.forEach((key, index) => {
  console.log(`${key}: ${courses[key]}`);
});

/* Object.values() Method */
const animals = {
  tiger: 1,
  cat: 2,
  monkey: 3,
  elephant: 4,
};

// iterate over object values

Object.values(animals).forEach((val) => console.log(val));

/* Object.entries() Method */
const entries = Object.entries(animals);
console.log(entries);

/* Object.values() Method */
// `for...of` loop
for (const [key, value] of Object.entries(animals)) {
  console.log(`${key}: ${value}`);
}

// `forEach()` method

Object.entries(animals).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
