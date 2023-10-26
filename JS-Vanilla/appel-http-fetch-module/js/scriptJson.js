const obj = {
  a: 12,
  b: 23,
  c: 36,
  d: 69,
  c: 98,
  d: 87,
  e: 74,
  f: 41,
};

const objJsonToString = JSON.stringify(
  obj,
  (prop, val) => {
    if (val > 50) {
      return undefined;
    }
    return val;
  },
  3
);
console.log(objJsonToString);

const JsonToJs = JSON.parse(objJsonToString, (prop, val) => {
  if (val < 50) {
    console.log(`${prop} est inférieur à 50.`);
  }
  return val;
});
console.log(JsonToJs);
