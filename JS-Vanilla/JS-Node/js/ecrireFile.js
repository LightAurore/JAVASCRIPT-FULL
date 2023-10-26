/* fs */
// import fs from "node:fs";

/* Promesse */
// import { writeFile } from "node:fs/promises";

/* synchrone */
/* const content = fs.readFileSync("./data/legendes.txt", { encoding: "utf8" });

console.log(content);

/* Asynchrone */

await writeFile("./data/donnees.txt", "Mbi bhra azi kwè", { encoding: "utf8" });

const articles = {
  titre: "Ma maison dans la prairie",
  auteur: "Khrisna Murti",
  edition: "La voie célèste",
  annee_edition: "3000 annnées brahman",
  id_code: 123654789,
  resume: "Blablablabla blabla blablabla bla blablkablablabla",
};

await writeFile("./data/articles.json", JSON.stringify(articles), {
  encoding: "utf8",
  flag: "a",
});
await writeFile(
  "./data/articles.json",
  JSON.stringify({ start: 90, end: 99 }),
  {
    encoding: "utf8",
    flag: "a",
  }
);

await writeFile("./data/donnees.txt", "\nton ga na nyè", {
  encoding: "utf8",
  flag: "a",
});
