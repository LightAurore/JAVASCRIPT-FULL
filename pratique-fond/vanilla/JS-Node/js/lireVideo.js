/* 
import { readFile, writeFile } from "node:fs/promises";

const content = await readFile("./assets/video/boxing_stigram.mp4");
await writeFile("./assets/video/boxing_stigram-copy.mp4", content);
 */

import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";

const stream = createReadStream("./assets/video/boxing_stigram.mp4");

const { size } = await stat("./assets/video/boxing_stigram.mp4");
let read = 0;

stream.on("data", (chunk) => {
  console.log(chunk.length);
  console.log(Math.round((100 * read) / size));
});
stream.on("close", () => {
  console.log("close");
});

/* 
import { createReadStream, createWriteStream } from "node:fs";

const stream = createReadStream("./assets/video/boxing_stigram.mp4");
const writeStream = createWriteStream(
  "./assets/video/boxing_stigram-copy3.mp4"
);
stream.pipe(writeStream);
 */
