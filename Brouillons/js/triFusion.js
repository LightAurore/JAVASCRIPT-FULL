"use strict";


// Nombre
const nombre_untill_100 = new Array();
const chiffres = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const suite_fibo = [];

// String
const mots = ['abeille','bateau','cactus','danse','école','fée','gare','hibou','igloo','jardin','koala','lune','magie','nuage','oiseau','piano','quiche','rire','savon','tigre','union','vase','wagon','xylophone','yoga','zèbre','alpage','bougie','cadeau','dragon','étoile','fleur','gomme','harpe','jasmin','kiwi','livre','miroir','neige','orange','perle','quiz','robot','souris','tomate','utile','verre','yoyo','zodiaque','avion','brique','camion','dent','éponge','four','gant','hache','iguane','jonquille','kangourou','loup','maison','nappe','oignon','plume','ruche','sel','trèfle','usine','vache','xylophore','yack','arbre','balle','canard','doigt','échelle','fruit','guitare','hérisson','image','jupe','mouton','noix','ombre','porte','queue','rose','sable','table','uniforme','vent','yaourt','zigzag','ananas','biberon','chapeau','éclair','épice','feu','glace','horloge','insecte','kayak','lion','métro','oeil','poire','quinze','stylo','tasse','vague','xérès','yogi','zeste','arc','bain','carte','domino','écran','flèche','gâteau','hôtel','îlot','kiosque','luge','mouche','note','oeuf','pince','radio','sac','tente','utérus','ver','zoo','zut','agneau','bouchon','cerise','dé','foin','grue','île','jambon','lama','moto','nez','pelle','quai','riz','salade','thé','urne','veste','xylène','yucca','zorro','azur','coeur','dune','fromage','gorille','jet','lac','mur','nuit','or','pomme','quatuor','roi','terre','un','vin','zéro'];

let a = 0,
  b = 1;

for (let i = 0; i < 1000; i++) {
  suite_fibo.push(a);
  [a, b] = [b, a + b];
}

const PHI = b / a;

console.log(suite_fibo, PHI);

for (let i = 0; i <= 100; i++) {
  nombre_untill_100.push(i);
}

console.log(nombre_untill_100);

console.log("ab".charCodeAt());
console.log("b".codePointAt());

const alpha_ascii = new Map();
for (let index = 97; index < 123; index++) {
  alpha_ascii.set(`${String.fromCodePoint(index)}`, index);
}

console.log(alpha_ascii);

function isIndexFibo(mot) {
  let code_chars = 0;

  mot.split("").forEach((char) => {
    code_chars += char.charCodeAt();
  });

  let j = 0;
  suite_fibo.map((nb) => {
    if (nb % code_chars == 0) {
      j++;
    }
  });
  console.log(j);

  return suite_fibo.includes(code_chars) || j % 3 == 0 ? true : false;
}

console.log(isIndexFibo("Nzo"));




/**
 * 
 * @param {string} strA 
 * @param {string} strB 
 * @returns {true}
 */

function TriParLettre(strA, strB){
  let a = strA.split(); // copy et spliter
  let b = strB.split();
  let _isOrderAlpha = true;

  console.log(a,b);
  let i = 0;
  do{
    if(a[i] > b[i]){
      _isOrderAlpha = false;
    }else if(a[i] < b[i]){
      _isOrderAlpha = true;
    }
    i++;
  }while(i < (a.length >= b.length) ? b.length : a.length && (a[i] == b[i])) 

  return _isOrderAlpha;
}



function TriAZ(array){
  const result = [...array]; // copy
  for(let i = 0; i < result.length; i++){
    let j = 0;
    let a = result[i];
    let b = result[i + 1];

    if(TriParLettre(a, b) == false){
      [result[i], result[i + 1]] = [ b, a]
    }
    
  }
  return result;
}

TriParLettre('strA', 'strB');
TriAZ(mots);