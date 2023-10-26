



// a string variable storing JSON data
// coming from an API response
const apiResponse = `{"id":5, "firstName": "Maria", "lastName": "Williams", "age":34, "email": "m.williams@example.com", "address" :{ "streetAddress": "123 Main St", "city": "Anytown", "state": "US", "postalCode": "12345"}, "phoneNumbers":[{"type": "home", "number": "555-555-5554"},{"type": "work", "number": "555-555-5555"}]}`;

// converting JSON to JavaScript
const user1 = JSON.parse(apiResponse);

console.log(user1);

// defining a JavaScript object
const user = {
  id: 5,
  firstName: "Maria",
  lastName: "Williams",
  age: 34,
  email: "m.williams@example.com",
  address: {
    streetAddress: "123 Main St",
    city: "Anytown",
    state: "US",
    postalCode: "12345",
  },
  phoneNumbers: [
    {
      type: "home",
      number: "555-555-5554",
    },
    {
      type: "work",
      number: "555-555-5555",
    },
  ],
};

// converting user to JSON
const userJSON = JSON.stringify(user);
console.log(userJSON);

/* # Lire */
var f = File.new()
f.open("data.json", File.READ)
var json = JSON.parse(f.get_as_text())
f.close()
var data = json.result

/* # Modifier */
data["year"] = 2012

/* # Ecrire */
f = File.new()
f.open("data.json", File.WRITE)
f.store_string(JSON.print(data, "  ", true))
f.close()