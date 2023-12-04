'use strict'

const baliseText1 = document.getElementById("text-01");
const baliseText2 = document.getElementById("text-02");
const baliseText3 = document.getElementById("text-03");

console.warn("innerHTML");
console.log(baliseText1.innerHTML);
console.log(baliseText2.innerHTML);
console.log(baliseText3.innerHTML);

console.warn("innerText");
console.log(baliseText1.innerText);
console.log(baliseText2.innerText);
console.log(baliseText3.innerText);

console.warn("textContent");
console.log(baliseText1.textContent);
console.log(baliseText2.textContent);
console.log(baliseText3.textContent);

console.warn("outerHTML");
console.log(baliseText1.outerHTML);
console.log(baliseText2.outerHTML);
console.log(baliseText3.outerHTML);
