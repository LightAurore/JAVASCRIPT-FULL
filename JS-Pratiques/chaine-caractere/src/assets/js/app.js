'use strict';

const monPara = document.getElementById("paragraphe");

const str = "Développeur Fullstack Javascript à DigitalCity !";

// console.log(monPara);

monPara.innerText = str;

const last_a = str.lastIndexOf('a');
console.log(last_a);

const index_java = str.indexOf("Java");
console.log(index_java + 1);

const str_copy = str.replace('DigitalCity', 'Bruxelles Formation');
console.log(str_copy);

const supp_script = str.replace('script','');
console.log(supp_script);

const sans_excl = str.replace('! ','');

// const sans_a = sans_excl.replace('à ','').split(' ',4);

const sans_a = sans_excl.replace(/ [à!]/g,'').split(' ');
console.log(sans_a);


const inversion_str = str.split("").reverse().join("");

console.log(inversion_str);




