/* Methode 1 */

/* // importing the fs module
const fs = require("fs");

// initializing a JavaScript object
const user = {
  id: 1,
  completeName: "Jennifer Jones",
  age: 20,
};

// converting the JSON object to a string
const data = JSON.stringify(user);

// writing the JSON string content to a file
fs.writeFile("monJson.json", data, (error) => {
  // throwing the error
  // in case of a writing problem
  if (error) {
    // logging the error
    console.error(error);

    throw error;
  }

  console.log("data.json written correctly");
}); */

/* Methode 2 */

function saveTextToFile() {
  const saveText = "tmp";
  // const apiResponse = `{"id":5, "firstName": "Maria", "lastName": "Williams", "age":34, "email": "m.williams@example.com", "address" :{ "streetAddress": "123 Main St", "city": "Anytown", "state": "US", "postalCode": "12345"}, "phoneNumbers":[{"type": "home", "number": "555-555-5554"},{"type": "work", "number": "555-555-5555"}]}`;

  // file setting
  const text = saveText;
  const name = "sample.json";
  const type = "text/plain";

  // create file
  const a = document.createElement("a");
  const file = new Blob([text], { type: type });
  a.href = URL.createObjectURL(file);
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

function saveJsonObjToFile() {
  const saveObj = { a: 3 }; // tmp

  // file setting
  const text = JSON.stringify(saveObj);
  const name = "sample.json";
  const type = "text/plain";

  // create file
  const a = document.createElement("a");
  const file = new Blob([text], { type: type });
  a.href = URL.createObjectURL(file);
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
}
