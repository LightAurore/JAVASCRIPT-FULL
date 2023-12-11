// Les Dates !
// ***********

// - Déclaration

// Maintenant
const d1 = new Date();
// → Date Thu Dec 07 2023 15:13:28 GMT+0100 (heure normale d’Europe centrale)

// Via un timestamp (en millisecondes)
const d2 = new Date(1654452062000)
// → Date Sun Jun 05 2022 20:01:02 GMT+0200 (heure d’été d’Europe centrale)

// Via le jour, mois, année,...
const d3 = new Date(2022, 5, 5, 20, 1, 2)
//! Attention, la valeur du mois est de 0 à 11 !!! (* ￣︿￣)
// → Date Sun Jun 05 2022 20:01:02 GMT+0200 (heure d’été d’Europe centrale)

// Via une chaine de charactere en format ISO
const d4 = new Date('2023-12-07T14:28:23.394Z');



// - Méthode pour extraire des informations

// Année complete
d1.getFullYear()    // 2023

// Mois (de 0 à 11)
d1.getMonth()       // 11 

// Jour du mois (de 1 à 31)
d1.getDate()        // 7

// Jour de la semaine (de 0 à 7)
d1.getDay()         // 4

// Heure (de 0 à 23)
d1.getHours()       // 15

// Minutes (de 0 à 59)
d1.getMinutes()     // 13

// Secondes (de 0 à 59)
d1.getSeconds()     // 28 

// Millisecondes
d1.getTime();       // 1701959303394 



// - Méthode pour modifier une date
const d5 = new Date();
d1.setFullYear(2023)
d1.setMonth(2) 
d1.setDate(6)
d1.setDay(5)
d1.setHours(10)
d1.setMinutes(9)
d1.setSeconds(42) 



// - Formattage de la date en chaine de charactere

// ISO
d1.toISOString()
"2023-12-07T14:28:23.394Z"

// Date avec une locale
d1.toLocaleDateString()             // Locale du navigateur
d1.toLocaleDateString('fr-be')      // "07/12/2023"
d1.toLocaleDateString('fr-ca')      // "2023-12-07"

// Heure avec une locale
d1.toLocaleTimeString()             // Locale du navigateur
d1.toLocaleTimeString('fr-be')      // "15:28:23"

// Date et heure en francais
d1.toLocaleString()                 // Locale du navigateur
d1.toLocaleString('fr-be')          // "07/12/2023 15:28:23"
d1.toLocaleString('jpn')            // "2023/12/7 15:28:23"
d1.toLocaleString('en-us')          // "12/7/2023, 3:28:23 PM"

// Date avec un formattage customiser
d1.toLocaleString('fr-be', {
    year: '2-digit',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
})
"jeudi 7 décembre 23" 