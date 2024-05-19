// Récuperation des balises des DOM
const inputNb1 = document.getElementById('input-nb1');
const inputNb2 = document.getElementById('input-nb2');
const history = document.getElementById('history');

// Event Click
document.getElementById('btn-add').addEventListener('click', function() {

    // Obtenir les valeurs
    const nb1 = inputNb1.valueAsNumber;
    const nb2 = inputNb2.valueAsNumber;

    // Traitement
    const res = nb1 + nb2;

    // Modification de l'affichage
    inputNb1.value = res;
    inputNb2.value = '';

    // Ajout dans l'historique
    history.innerHTML += nb1 + ' + ' + nb2 + ' = ' + res + '<br>';
});

document.getElementById('btn-sub').addEventListener('click', function() {

    // Obtenir les valeurs
    const nb1 = inputNb1.valueAsNumber;
    const nb2 = inputNb2.valueAsNumber;

    // Traitement
    const res = nb1 - nb2;

    // Modification de l'affichage
    inputNb1.value = res;
    inputNb2.value = '';
    
    // Ajout dans l'historique
    history.innerHTML += nb1 + ' - ' + nb2 + ' = ' + res + '<br>';
});

document.getElementById('btn-mul').addEventListener('click', function() {

    // Obtenir les valeurs
    const nb1 = inputNb1.valueAsNumber;
    const nb2 = inputNb2.valueAsNumber;

    // Traitement
    const res = nb1 * nb2;

    // Modification de l'affichage
    inputNb1.value = res;
    inputNb2.value = '';
    
    // Ajout dans l'historique
    history.innerHTML += nb1 + ' * ' + nb2 + ' = ' + res + '<br>';
});

document.getElementById('btn-pow').addEventListener('click', function() {

    // Obtenir les valeurs
    const nb1 = inputNb1.valueAsNumber;
    const nb2 = inputNb2.valueAsNumber;

    // Traitement
    const res1 = nb1 ** nb2;
    const res2 = Math.pow(nb1, nb2);

    // Modification de l'affichage
    inputNb1.value = res1;
    inputNb2.value = '';
    
    // Ajout dans l'historique
    history.innerHTML += nb1 + ' ^ ' + nb2 + ' = ' + res1 + '<br>';
});

document.getElementById('btn-sqr').addEventListener('click', function() {

    // Obtenir les valeurs
    const nb1 = inputNb1.valueAsNumber;
    const nb2 = inputNb2.valueAsNumber;

    // Traitement
    const res1 = nb1 ** (1/nb2);
    const res2 = Math.pow(nb1, 1/nb2);

    // Modification de l'affichage
    inputNb1.value = res1;
    inputNb2.value = '';
    
    // Ajout dans l'historique
    history.innerHTML += nb2 + '√ ' + nb1 + ' = ' + res1 + '<br>';
});

document.getElementById('btn-div-real').addEventListener('click', function() {

    // Obtenir les valeurs
    const nb1 = inputNb1.valueAsNumber;
    const nb2 = inputNb2.valueAsNumber;

    // Traitement
    const res = nb1 / nb2;

    // Modification de l'affichage
    inputNb1.value = res;
    inputNb2.value = '';
    
    // Ajout dans l'historique
    history.innerHTML += nb1 + ' / ' + nb2 + ' = ' + res + '<br>';
});

document.getElementById('btn-div-int').addEventListener('click', function() {

    // Obtenir les valeurs
    const nb1 = inputNb1.valueAsNumber;
    const nb2 = inputNb2.valueAsNumber;

    // Traitement
    const res1 = parseInt(nb1 / nb2);

    const mod = nb1 % nb2;
    const res2 = (nb1 - mod) / nb2;

    // Modification de l'affichage
    inputNb1.value = res2;
    inputNb2.value = '';
    
    // Ajout dans l'historique
    history.innerHTML += nb1 + ' DIV ' + nb2 + ' = ' + res + '<br>';
});


document.getElementById('btn-modulo').addEventListener('click', function() {

    // Obtenir les valeurs
    const nb1 = inputNb1.valueAsNumber;
    const nb2 = inputNb2.valueAsNumber;

    // Traitement
    const res = nb1 % nb2;

    // Modification de l'affichage
    inputNb1.value = res;
    inputNb2.value = '';
    
    // Ajout dans l'historique
    history.innerHTML += nb1 + ' MOD ' + nb2 + ' = ' + res + '<br>';
});