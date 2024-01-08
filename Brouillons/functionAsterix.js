'use strict'

const names = [
    "Martin ",
"Bernard",
"Thomas",
"Petit",
"Robert",
"Richard",
"Durand",
"Dubois",
"Moreau",
"Laurent" ,
"Simon",
"Michel",
"Lefebvre", 
"Leroy",
"Roux",
"David",
"Bertrand", 
"Morel",
"Fournier",
"Girard",
"Bonnet",
"Dupont",
"Lambert",
"Fontaine", 
"Rousseau", 
"Vincent ",
"Muller",
"Lefevre",
"Faure",
"Andre ",
"Mercier",
"Blanc",
"Guerin",
"Boyer",
"Garnier ",
"Chevalier",
"Francois",
"Legrand ",
"Gauthier",
"Garcia ",
"Perrin",
"Robin",
"Clement",
"Morin",
"Nicolas",
"Henry",
"Roussel",
"Mathieu",
"Gautier",
"Masson",
"Marchand", 
"Duval",
"Denis",
"Dumont",
"Marie",
"Lemaire",
]

const filterName = (array) => {
    return array.filter(elt => elt.includes("a"));
}

console.log(filterName(names));

names.push("Rachelle");

console.log(filterName(names));
console.log(filterName(names).length);

function* generator(i, array) {
    for (let j = 0; j < i; j++) {
        yield array[j]
        
    }
  }
  
  const gen = generator(filterName(names).length, filterName(names));
  
  
  console.log(gen.next().value);
  console.log(gen.next().value);
  