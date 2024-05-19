// Une fonction qui renvoi un nombre
function methodeTom() {
    return 42;
}

// Une fonction qui fonction comme une procedure
function procedureYanis() {
    console.log('Pause à 10h ?');
}

// Appeler une fonction / procedure
methodeTom();

// Fonction avec parametre
function methodeMussa(nb1, nb2) {
    const result = nb1 + nb2;
    return result;
}

const val1 = 2;
const r1 = methodeMussa(val1, 40);

// Fonction avec le parametre "rest"
function methodeMike(separator, ...names) {
    const result = names.join(' ' + separator + ' ');
    return result;
}

methodeMike('>', 'Riri', 'Zaza', 'Della', 'Etc');