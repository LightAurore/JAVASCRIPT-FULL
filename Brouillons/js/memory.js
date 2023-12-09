let obj = {
  name: "John",
};

console.log(obj);
obj = null;
console.log(obj);

// Management strerams

const fs = require("fs");

console.log(fs);

const readStream = fs.createReadStream("./largeFile.text");

readStream.on("end", (chunk) => {});
readStream.close("end", () => {
  readStream.close();
});
readStream.on("error", (err) => {});

// Leaks
function createClosure() {
  const data = "Sensitive data";
  return function () {
    console.log(data);
  };
}

const leakedFunction = createClosure();
