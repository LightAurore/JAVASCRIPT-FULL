let nb_values;

do {
    nb_values = parseInt(prompt("Combien de valeurs ?"));
} while (isNaN(nb_values) || nb_values < 2);

let values = [];

for (let i = 0; i < nb_values; i++) {
    do {
        values[i] = parseFloat(prompt(`Quel est la valeur ${i + 1} :`))
    } while (isNaN(values[i]));    
}

let sum = 0;

for (let i = 0; i < values.length; i++) {
    sum += values[i];
}

alert(`La moyenne de nos valeurs est ${sum/values.length}.`);