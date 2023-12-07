import { open } from "node:fs/promises";

const file = await open("./data/donnees.txt", "a");

file.write("\nWa tà hali");
file.close();
