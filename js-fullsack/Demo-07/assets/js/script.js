'use strict';

// Element DOM
const btnFilterA = document.getElementById('btn-filter-a');
const btnFilterZ = document.getElementById('btn-filter-z');
const btnFilterUnder4 = document.getElementById('btn-filter-under-4');
const btnFilterUpper6 = document.getElementById('btn-filter-upper-6');
const btnFilterKayak = document.getElementById('btn-filter-kayak');

// Traitement
const names = ['Della', 'Donald', 'Daisy', 'Zaza', 'Riri', 'Kayak', 'Gontran', 'Miss Tick', 'Balthazar', 'Bob'];

function filterNamesByLetter(names, letter) {
    const results = [];

    for (const name of names) {

        if (name.includes(letter)) {
            results.push(name);
        }
    }

    return results;
};

function filterNamesUnderLength(names, length) {
    const results = [];

    for (const name of names) {

        if (name.length <= length) {
            results.push(name);
        }
    }

    return results;
};

function filterNamesReadInTwoSens(names) {
    const results = [];

    for (const name of names) {

        let isPalindrome = true;
        const indexMax = name.length - 1;
        const checkLength = Math.floor(name.length / 2);

        for (let i = 0; isPalindrome && i < checkLength; i++) {

            const beginLetter = name[i].toUpperCase();           // 0 1 2
            const endLetter = name[indexMax - i].toUpperCase();  // 4 3 2

            isPalindrome = (beginLetter === endLetter);
        }

        if (isPalindrome) {
            results.push(name);
        }
    }

    return results;
};

function filterNamesWithCallback(names, callback) {
    // callback => Fonction qui renvoi un booléen

    const results = [];

    for (const name of names) {

        if (callback(name)) {
            results.push(name);
        }
    }

    return results;
};


btnFilterA.addEventListener('click', function () {
    // const data = filterNamesByLetter(names, 'a');
    const data = filterNamesWithCallback(names, function(name) {
        return name.includes('a')
    });
    alert(data.join(' > '));
})

btnFilterZ.addEventListener('click', function () {
    // const data = filterNamesByLetter(names, 'z');
    const data = filterNamesWithCallback(names, (name) => name.includes('z'));
    alert(data.join(' > '));
})

btnFilterUnder4.addEventListener('click', function () {
    // const data = filterNamesUnderLength(names, 4);
    const data = filterNamesWithCallback(names, (name) => name.length <= 4);
    alert(data.join(' > '));
})

btnFilterKayak.addEventListener('click', function () {
    // const data = filterNamesReadInTwoSens(names);
    const data = filterNamesWithCallback(names, detectIfPalindrome);
    alert(data.join(' > '));
})

btnFilterUpper6.addEventListener('click', function() {
    const data= filterNamesWithCallback(names, function(name) {
        return name.length >= 6;
    });
    alert(data.join(' > '));
});

function detectIfPalindrome(name) {
    let isPalindrome = true;
    const indexMax = name.length - 1;
    const checkLength = Math.floor(name.length / 2);

    for (let i = 0; isPalindrome && i < checkLength; i++) {

        const beginLetter = name[i].toUpperCase();           // 0 1 2
        const endLetter = name[indexMax - i].toUpperCase();  // 4 3 2

        isPalindrome = (beginLetter === endLetter);
    }

    return isPalindrome
}