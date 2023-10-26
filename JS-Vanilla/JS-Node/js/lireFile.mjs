/* fs */
// import fs from "node:fs";

/* Promesse */
import { readFile } from "node:fs/promises";

/* synchrone */
/* const content = fs.readFileSync("./data/legendes.txt", { encoding: "utf8" });

console.log(content); */

/* Asynchrone */
/* 
const content = fs.readFile(
  "./data/legendes.txt",
  { encoding: "utf8" },
  (err, content) => {
    console.log(content);
  }
);

console.log("hello"); */

/* Promesse */
const content = await readFile("./data/legendes.txt", { encoding: "utf8" });
// console.log(content);

const contenu = await Promise.all([
  readFile("./data/legendes.txt", { encoding: "utf8" }),
  readFile("./js/lireFile.mjs", { encoding: "utf8" }),
]);

// json ne fonctionne pas
/* 
const contenu = await Promise.all([
  readFile("./data/legendes.txt", { encoding: "utf8" }),
  readFile("./data/user.json", { encoding: "utf8" }),
]);
 */
console.log(contenu);



