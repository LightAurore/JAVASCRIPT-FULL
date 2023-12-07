/* Blob 1 */
const myImage = document.querySelector("#imgD");

const myRequest = new Request("./assets/images/flower.jpg");

fetch(myRequest)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.blob();
  })
  .then((response) => {
    myImage.src = URL.createObjectURL(response);
  });

/* Blob 2 */

const monImage = document.querySelector("#imgDz");

const monHeaders = new Headers();
monHeaders.append("Accept", "image/jpeg");

const myInit = {
  method: "GET",
  headers: monHeaders,
  mode: "cors",
  cache: "default",
};

const monRequest = new Request("./assets/images/flower.jpg");

fetch(monRequest, myInit)
  .then((response) => {
    return response.blob();
  })
  .then((blob) => {
    monImage.src = URL.createObjectURL(blob);
  });
