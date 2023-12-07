import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const dir = dirname(fileURLToPath(import.meta.url));

// const filename = join("/a/b", "../data/donnees.txt");
const filename = join("./data/donnees.txt");
// console.log(__dirname);
console.log(dir);

console.log(await readFile(filename, { encoding: "utf8" }));
