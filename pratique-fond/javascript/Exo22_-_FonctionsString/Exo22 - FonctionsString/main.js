let phrase = "ma formation javascript";

//position de 'ma'
console.log(phrase.indexOf('ma'));
console.log(phrase.lastIndexOf('ma'));

//Indice de la lettre 'p'
console.log(phrase.indexOf('p'));
console.log(phrase.lastIndexOf('p'));
console.log(phrase.search(/p/));

//Lettre en indice 21
console.log(phrase.charAt(21));
console.log(phrase[21]);

//Remplacer 'javascript' par 'Java'
console.log(phrase.replace('javascript','Java'));

//Délimitteur espace
console.log(phrase.split(' '));

//Inversion de la phrase
let phrase_inverse = phrase.split('').reverse().join('');
// OU
// let phrase_inverse = phrase.split('').reverse().toString().replaceAll(',','');
console.log(phrase_inverse);
