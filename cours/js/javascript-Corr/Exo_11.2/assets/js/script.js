
// Element du DOM
const inputVal = document.getElementById('input-val');
const btnSearch = document.getElementById('btn-search');
const resultZone = document.getElementById('result-zone');

// Event 'click'
btnSearch.addEventListener('click', () => {
    const val = inputVal.valueAsNumber;

    if (isNaN(val) || val <= 0) {
        resultZone.innerText = `La valeur invalide`;
        return;
    }

    const result = getFibonacciValueOpti(val);
    resultZone.innerText = `La valeur ${val} est ${result}`;
});

// Suite de Fibonacci
let count = 0;

function getFibonacciValue(nb) {
    console.log(`Count ${nb} : `, ++count);

    if(nb <= 2) {
        return nb-1;
    }
    return getFibonacciValue(nb-1) + getFibonacciValue(nb-2);
}


// Suite de Fibonacci (optimisé)
let countOpti = 0; 

const memory = new Map();
memory.set(1, 0);
memory.set(2, 1);

function getFibonacciValueOpti(nb) {

    const resultFinal = processOpti(nb) ;
    console.log(`Final : `, count);
    return resultFinal;
}

function processOpti(nb) {
    ++count;

    if(memory.has(nb)) {
        return memory.get(nb);
    }

    const result = processOpti(nb-1) + processOpti(nb-2);
    memory.set(nb, result);
    return result;
};