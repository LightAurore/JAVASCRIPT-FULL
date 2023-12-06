//Définition de la fonction :
//Une fonction doit être définie au début, avant tout utilisation
//Les données extérieurs (les inconnues) définiront les paramètres
// Si besoin d'un résultat final (opérations, modifications , etc., ...) alors définissons un return

function inverser(message) {
    let result = message.split('').reverse().join('');
    return result;
}

console.log(inverser('Salut!'));

console.log(inverser(prompt('Que voulez-vous dire?')));

