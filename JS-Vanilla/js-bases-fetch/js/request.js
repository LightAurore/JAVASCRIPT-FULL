/*  */

const request = new Request("http://127.0.0.1:5500/user.json", {
  method: "POST",
  body: '{"foo": "bar"}',
});

const URL = request.url;
const method = request.method;
const credentials = request.credentials;
const bodyUsed = request.bodyUsed;
const body = request.body;
console.log(body);

const myRequest = new Request("./assets/images/flower.jpg");
const newRequest = myRequest.clone(); // a copy of the request is now stored in newRequest

console.log("request ", myRequest);

const imgRequest = document.getElementById("imgRequest");

fetch(myRequest)
  .then((response) => {
    response.blob();
    // throw Error("image non chargée");
  })
  .then((blob) => {
    const objectURL = URL.createObjectURL(blob);
    console.log("Blob", blob); // , blob.type, blob.size
    imgRequest.src = objectURL;
    imgRequest.id = "flower";
  })
  .catch((err) => console.log(err));
