// Element du DOM
const btnSimple1 = document.getElementById('btn-sort-simple-1');
const btnSimple2 = document.getElementById('btn-sort-simple-2');
const btnFusion = document.getElementById('btn-sort-fusion');

// Fonction de trie
// - Bulle
function sortByBubbleBubble(array, callback) {
    // Copie du tableau
    const result = [...array];  // Alternative :  array.slice();  || [].concat(array);

    // Trie
    for (let i = 0, k = 0; i < result.length; k++) {

        const v1 = result[k];
        const v2 = result[k + 1];

        if (callback(v1, v2)) {
            result[k] = v2;
            result[k + 1] = v1;
        }

        if (k >= result.length - 2 - i) {
            i++;
            k = -1;
        }
    }

    return result;
}

// - Fusion
function sortByFusion(array, callback) {

    if(array.length === 1) {
        return array;
    }

    const mid = Math.ceil(array.length / 2);

    const arrayPart1 = array.slice(0, mid);
    const arrayPart2 = array.slice(mid);

    console.log('Base : ', array);
    console.log('Part 1 : ', arrayPart1);
    console.log('Part 2 : ', arrayPart2);

    const result = fusionArray(
        sortByFusion(arrayPart1, callback), // [22]
        sortByFusion(arrayPart2, callback), // [2]
        callback
    );
    console.log('Result : ', result);
    return result;
}

function fusionArray(array1, array2, callbackSort) { // array1 : [10, 100, 150]  || array2 : [2, 42]

    const resultFusion = [];

    // Boucle
    let index1 = 0;
    let index2 = 0;
    do
    {
        const v1 = array1[index1];
        const v2 = array2[index2];
        
        if(callbackSort(v1, v2)) {
            resultFusion.push(v2);
            index2++;
        }
        else {
            resultFusion.push(v1);
            index1++;
        }
    }
    while(index1 < array1.length && index2 < array2.length);

    while(index1 < array1.length) {
        resultFusion.push(array1[index1]);
        index1++;
    }

    if(index2 < array2.length) {
        resultFusion.push(...array2.slice(index2));
    }

    return resultFusion;
}


// Event Click
const people = ['Riri', 'Della', 'Zaza', 'Balthazar', 'donald', 'Daisy'];
const numbers = [10, 100, 2, 42, 29, -5, 0, 3.14, 3, 100, 22, 2, 1];

btnSimple1.addEventListener('click', () => {
    const arraySort = sortByBubbleBubble(people, (v1, v2) => v1.localeCompare(v2) > 0);
    alert(`Original : ${people.join(' > ')} \nResultat : ${arraySort.join(' > ')}`);
});

btnSimple2.addEventListener('click', () => {
    const arraySort = sortByBubbleBubble(numbers, (nb1, nb2) => nb1 > nb2);
    alert(`Original : ${numbers.join(' > ')} \nResultat : ${arraySort.join(' > ')}`);
});


btnFusion.addEventListener('click', () => {
    const arraySort = sortByFusion(numbers, (nb1, nb2) => nb1 > nb2);
    alert(`Original : ${numbers.join(' > ')} \nResultat : ${arraySort.join(' > ')}`);
});