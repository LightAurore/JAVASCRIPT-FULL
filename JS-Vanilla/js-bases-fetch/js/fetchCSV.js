// const csvRequest = new Request("myCsv.csv");

fetch("./myCsv.csv")
  .then((response) => {
    response.blob();
    // throw Error("image non chargée");
  })
  .then((blob) => {
    // const objectURL = URL.createObjectURL(blob);
    const file = new File([blob], "jpg", { type: blob.type });
    readFile1(file);
    console.log(file); // , blob.type, blob.size
  })
  .catch((err) => console.log(err));

//
function readFile(input) {
  const fr = new FileReader();

  fr.readAsText(input);

  fr.addEventListener("load", () => {
    const res = fr.result;
    console.log(res);
  });
}
