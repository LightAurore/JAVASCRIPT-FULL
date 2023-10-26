// HOF  fonction d'ordre supérieur
const values = [30, 10, 50, 80, 74, 44, 201, 1000, 1056];
function customFilter(arr, foo) {
  const filtered = [];

  for (const element of arr) {
    if (foo(element)) {
      filtered.push(element);
    }
  }
  return filtered;
}

console.log(customFilter(values, (el) => el < 100));
console.log(customFilter(values, (el) => el > 101));
console.log(customFilter(values, (el) => el > 150));
console.log(customFilter(values, (el) => el == 1000));

const string = "Mardi mercredi dimanche ...";
function occurences(str, bar) {
  let nbOfOccurences = 0;

  for (const character of str) {
    if (bar(character)) {
      nbOfOccurences++;
    }
  }

  return nbOfOccurences;
}

console.log(occurences(string, (el) => el === "a"));
console.log(occurences(string, (el) => el === "i"));
console.log(occurences(string, (el) => el === "o"));
