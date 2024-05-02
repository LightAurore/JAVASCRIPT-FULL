"use strict";
// Typage des variables : « nature variableName : type »
let message;
// Différents type de données :
//? Nombre (Entier / Réel)
const v1_1 = 42;
const v1_2 = 3.14;
const v1_3 = 0b0101;
//? Chaine de caractere
const v2_1 = 'Hello World';
const v2_2 = `La valeur de PI est de ${v1_2}`;
//? Booléen
let v3_1 = false;
//? Collection
const v4_1 = ['Della', 'Donald', 'Zaza'];
const v4_2 = ['Yanis', 'Fred'];
//? Dynamique
let v5;
v5 = 42;
v5 = 'Test';
//? Object (sans prototype)
const person1 = {
    firstname: 'Della',
    lastname: 'Duck',
    birthdate: new Date(1988, 11, 6)
};
//? Valeur nullable
let v6;
v6 = 'Mike';
v6 = null;
const house = {
    nbRoom: 6,
};
//? Enumeration
var DirectionEnum;
(function (DirectionEnum) {
    DirectionEnum[DirectionEnum["LEFT"] = 0] = "LEFT";
    DirectionEnum[DirectionEnum["RIGHT"] = 1] = "RIGHT";
})(DirectionEnum || (DirectionEnum = {}));
const v7_1 = DirectionEnum.RIGHT;
var StopLightEnum;
(function (StopLightEnum) {
    StopLightEnum[StopLightEnum["GREEN"] = 10] = "GREEN";
    StopLightEnum[StopLightEnum["ORANGE"] = 15] = "ORANGE";
    StopLightEnum[StopLightEnum["RED"] = 20] = "RED";
})(StopLightEnum || (StopLightEnum = {}));
;
const v7_2 = StopLightEnum.ORANGE;
// Les types complexes
//? Union
let v8_1;
v8_1 = 42;
v8_1 = 'Test';
const person2 = {
    firstname: 'Gontran',
    lastname: 'Bonheur',
    gender: 'M'
};
const inter_prof = {
    firstname: 'Baltazar',
    lastname: 'Picsou',
    courses: ['Economie', 'Stats']
};
const inter_student = {
    firstname: 'Zaza',
    lastname: 'Vanderquack',
    email: 'zaza.vanderquack@gmail.com',
    matricule: 'zavand24'
};
const inter_assistant = {
    firstname: 'Della',
    lastname: 'Duck',
    email: 'della.duck@hotmail.be',
    matricule: 'delduck20',
    courses: ['JavaScript', 'Sql']
};
// Typage des méthodes
//? Fonction
function addition(nb1, nb2) {
    const result = nb1 + nb2;
    return result;
}
//? Procedure
function sayHello(person) {
    if (person.lastname === 'Gripsou') {
        return;
    }
    console.log(`Bonjour ${person.firstname} ${person.lastname}`);
}
//? Callback
function tabFilter(tab, filterCB) {
    const result = [];
    for (const elem of tab) {
        if (filterCB(elem)) {
            result.push(elem);
        }
    }
    return result;
}
const names = ['Tom', 'Mike', 'Musa', 'Sookie'];
const res = tabFilter(names, (name) => name.includes('i'));
;
const car1 = {
    brand: 'VW',
    model: 'Polo',
    engine: '90ch'
};
const car2 = {
    brand: 'Skoda',
    model: 'Fabia',
    engine: '68ch'
};
const car3 = {
    brand: 'Citroën',
    model: 'DS',
    color: 'blanc'
};
