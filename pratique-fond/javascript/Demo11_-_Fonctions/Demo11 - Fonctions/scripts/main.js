function carreDe(nb){
    return nb * nb;
}

console.log(`Le carré de 3 est ${carreDe(3)}!`);

//Fonction anonyme

console.log(`Le carré de 3 est ${(function (nb) {
    return nb * nb;
})(3)}!`);

//Fonction anonyme dans une variable

const carreDe_var = function (nb) {
    return nb * nb;
}

console.log(`Le carré de 4 est ${carreDe_var(4)}!`);
