import { time } from "node:console";
import { readdir, stat } from "node:fs/promises";
const wait = (duration) => {
  new Promise((resolve) => setTimeout(resolve, duration));
};

console.time("time");
const files = await readdir("./", { withFileTypes: true });

files.encoding = "utf8";

await Promise.allSettled(
  files.map(async (file) => {
    const parts = [file.isDirectory() ? "D" : "F", file.name];
    if (!file.isDirectory()) {
      const { size } = await stat(file.name);
      // const size = await wait(1000);
      parts.push(`${size}o`);
    }
    console.log(parts.join(" - "));
  })
);

/* files.forEach(async (file) => {
  const parts = [file.isDirectory() ? "D" : "F", file.name];
  if (!file.isDirectory()) {
    // const { size } = await stat(file.name);
    const size = await wait(1000);
    parts.push(`${size}o`);
  }
  console.log(parts.join(" - "));
}); */

/* for (const file of files) {
  const parts = [file.isDirectory() ? "D" : "F", file.name];
  if (!file.isDirectory()) {
    // const { size } = await stat(file.name);
    const size = await wait(1000);
    parts.push(`${size}o`);
  }
  /* const { size } = await stat(file.name);
  console.log(`${file.isDirectory() ? "D" : "F"} - ${file.name} - ${size}o`); .*
  console.log(parts.join(" - "));
} */
console.timeEnd("time");
