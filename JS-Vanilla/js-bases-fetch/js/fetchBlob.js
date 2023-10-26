const imgRequest = document.getElementById("imgRequest");
const imgRequest2 = document.getElementById("imgRequest2");
const fileElement = document.querySelector("input[type=file]");
let imgUrl = "./assets/images/flower.jpg";

fetch(imgUrl)
  .then((response) => {
    return response.blob();
  })
  .then((blob) => {
    console.log(blob); // , blob.type, blob.size
    const objectURL = URL.createObjectURL(blob);
    imgRequest.src = objectURL;
  })
  .catch((err) => console.log(err));

fileElement.addEventListener("change", (e) => {
  const fileBlob = e.target.files[0];
  const url = URL.createObjectURL(fileBlob);
  imgRequest2.src = url;
});
