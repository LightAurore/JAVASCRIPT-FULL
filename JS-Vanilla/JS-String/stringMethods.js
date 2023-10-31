var str = " Hello ";

console.log(str.charAt(4));

console.log(str.concat("", "world"));

console.log(str.startsWith("H"));

console.log(str.endsWith("o"));

console.log(str.includes("x"));

console.log(str.indexOf("l"));

console.log(str.lastIndexOf("l"));

console.log(str.match(/[A-Z]/g));

console.log(str.padStart(6, "?"));

console.log(str.padEnd(6, "?"));

console.log(str.repeat(3));

console.log(str.replace("llo", "y"));

console.log(str.search("e"));

console.log(str.slice(1, 3));

console.log(str.split(""));

console.log(str.substring(2, 4));

console.log(str.toLowerCase());

console.log(str.toUpperCase());

console.log(str.trim());

console.log(str.trimStart());

console.log(str.trimEnd());

const fruits = ["🥭", "🍎", "🍓", "🍒", "🍑", "🍐", "🍅", "🍏"];

let str1 = fruits.toString();
console.log(str1);

let ajout = fruits.push("🍍");
console.log(ajout);

let retrait = fruits.pop();
console.log(retrait);

let contient = fruits.includes("🍌");
console.log(contient);

let index = fruits.indexOf("🍒");
console.log(index);

let clone = fruits.copyWithin();
console.log(clone);
console.log(clone.join("+"));
console.log(clone.slice(1, 4));
console.log(clone.splice(0, 6, ["🍌", "🍍"]));
