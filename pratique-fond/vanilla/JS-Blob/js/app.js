let s_prim = "toto";

let s_obj = new String(s_prim);

console.log(typeof s_prim); // affiche "string"
console.log(s_obj);
console.log(typeof s_obj.normalize());
console.log(s_obj.normalize());
console.log(s_obj.replaceAll("o", "a"));
console.log(s_obj.strike());

// Un tableau qui contient une seule DOMString
var aFileParts = ['<a id="a"><b id="b">Coucou mon ❤️ !</b></a>'];

// Le blob
var oMyBlob = new Blob(aFileParts, { type: "text/html" });

console.log(oMyBlob);
console.log(aFileParts);

// document.getElementById("monBlob").innerHTML = aFileParts[0];

// ArrayBuffer
// const buffer = new ArrayBuffer(8);
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });
const view = new Int32Array(buffer);
// const float32 = new Float32Array(buffer);
const float32 = new Float32Array(buffer, 0, 2).byteLength;

buffer.resize(12);
// var oMyBlob2 = new Blob(buffer, { type: "image/png" });
/* var oMyBlob2 = new Blob(buffer);
console.log(oMyBlob2); */

/* Tableau typé */
function GetTheTypedArraySomehow() {
  return new Uint8ClampedArray(8, { maxByteLength: 16 });
}
var typedArray = GetTheTypedArraySomehow();

// On ajoute un type MIME pertinent
var blob1 = new Blob([typedArray], { type: "application/octet-binary" });
var url1 = URL.createObjectURL(blob1);

console.log("clamped", url1);
const monHyp = document.getElementById("monLien");
monHyp.href = url1;
// monHyp.download = "hyp.json";
// document.body.appendChild(monHyp);
// monHyp.click();
// monHyp.remove();
// monHyp.strike();

var reader = new FileReader();
reader.addEventListener("loadend", function () {
  // reader.result contient le contenu du
  // blob sous la forme d'un tableau typé
});
reader.readAsArrayBuffer(blob1);

//

var oMyBlob3 = new Blob(view, { type: "application/zip" });
console.log(oMyBlob3);

let int32View = new Int32Array(buffer);

for (let i = 0; i < int32View.length; i++) {
  int32View[i] = i * 2;
  console.log(int32View[i]);
}

// Array
var debug = { coucou: "monde" };
var blob = new Blob([JSON.stringify(debug, null, 2)], {
  type: "application/json",
});

console.log("blob array", blob);
var url = URL.createObjectURL(blob);
console.log(url);
