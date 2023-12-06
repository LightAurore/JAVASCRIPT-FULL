// Récuperation des elements du DOM
const inputNb1 = document.getElementById('input-nb1');
const inputNb2 = document.getElementById('input-nb2');
const inputRes = document.getElementById('input-res');

const btnAdd = document.querySelector('#btn-add');
const btnSub = document.querySelector('#btn-sub');
const btnMul = document.querySelector('#btn-mul');
const btnDiv = document.querySelector('#btn-div');

// Event on click
btnAdd.addEventListener('click', function() {

    // Lecture des valeurs des inputs et conversion avec un parseFloat
    const nb1 = parseFloat(inputNb1.value);
    const nb2 = parseFloat(inputNb2.value);

    const result = nb1 + nb2;
    inputRes.value = result;
});

btnSub.addEventListener('click', function() {

    // Lecture des valeurs converties des inputs
    const nb1 = inputNb1.valueAsNumber;
    const nb2 = inputNb2.valueAsNumber;

    const result = nb1 - nb2;
    inputRes.value = result;
});

btnMul.addEventListener('click', function() {

    // Lecture des valeurs converties des inputs
    const nb1 = inputNb1.valueAsNumber;
    const nb2 = inputNb2.valueAsNumber;

    inputRes.value = nb1 * nb2;
});

btnDiv.addEventListener('click', function() {

    // Lecture des valeurs converties des inputs
    const nb1 = inputNb1.valueAsNumber;
    const nb2 = inputNb2.valueAsNumber;

    inputRes.value = nb1 / nb2;
});