// Import module
const fs = require("fs");

// Reading a file
const readData = fs.readFile("fichierAlire.txt", "utf8", function (err, data) {
  // Display the file content
  if (err) throw err;
  console.log("Asynchronous Read : ", data);
  console.log(err);

  // Writing to a file
  const newData = "This is a new data to be written";
  fs.writeFile("newFichierAlire.txt", newData, "utf8", (err) => {
    if (err) console.log(err);
    else {
      console.log("File written successfully\n");
      console.log("The written has the following contents:");
      console.log(fs.readFileSync("newFichierAlire.txt", "utf8"));
    }
  });

  return data;
});

console.log("Read : ", readData);
