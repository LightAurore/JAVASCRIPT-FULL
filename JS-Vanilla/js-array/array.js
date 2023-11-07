const colors = ["red", "green", "blue"];
const [first, second] = colors;

console.log(first);
console.log(second);

const profile = {
  name: "codecrumbs",
  language: "javascript",
};

const { name, language } = profile;

console.log(name);
console.log(language);

const student = {
  name1: "Code",
  scores: {
    math: 90,
    science: 85,
  },
};

const {
  name1,
  scores: { math },
} = student;

console.log(name1);
console.log(math);

function introduce({ name }) {
  console.log(`My name is ${name}`);
}

introduce(profile);

let names = [
  { id: 1, name: "hanzala" },
  { id: 2, name: "wosqa" },
  { id: 3, name: "ikrama" },
];

let hanzala = names.find((item) => {
  return item.name === "hanzala";
});

console.log(hanzala);
