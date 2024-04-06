// 
var message;
// Différents types de données :
//? entier / reel
var v1_1 = 42;
var v1_2 = 3.14;
var v1_3 = 8; // coder en binaire
var v1_4 = 511; // coder en octal
//? caractères
var v2_1 = 'Hello, world';
var v2_2 = "La valeur de Pi est de ".concat(v1_2);
//? booleen
var v3_1 = true;
var v3_2 = false;
//? tableau
var v4_1 = [1, 2, 3];
var v4_2 = [1, 2, 3, 4, 5];
var v4_3 = ['Della', 'Didi', 'Zaza'];
var v4_4 = ["Tot", "Baba", "Tara"];
//? Dynamique 
var v5_1;
v5_1 = 42;
v5_1 = 'Hello, world';
//? Object (sans prototype)
var person1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    birthDate: new Date(1988, 11, 6)
};
//? Valeur nullable
var v6;
v6 = 'Hello, world';
v6 = null;
var v7;
v7 = 'Hello, world';
v7 = undefined;
var house = {
    nbRoom: 4
};
//? Enumeration (Object)
var DirectionEnum;
(function (DirectionEnum) {
    DirectionEnum[DirectionEnum["LEFT"] = 0] = "LEFT";
    DirectionEnum[DirectionEnum["RIGHT"] = 1] = "RIGHT";
})(DirectionEnum || (DirectionEnum = {}));
var d1 = DirectionEnum.LEFT;
(1);
var StopLightEnum;
(function (StopLightEnum) {
    StopLightEnum[StopLightEnum["GREEN"] = 10] = "GREEN";
    StopLightEnum[StopLightEnum["ORANGE"] = 15] = "ORANGE";
    StopLightEnum[StopLightEnum["RED"] = 20] = "RED";
})(StopLightEnum || (StopLightEnum = {}));
var d2 = StopLightEnum.GREEN;
// Type
//? Union
var v8_1;
v8_1 = 42;
v8_1 = 'lala';
var person2 = {
    firstName: 'Bonheur',
    lastName: 'Joie',
    age: 42,
    gender: 'M'
};
var inter_prof = {
    firstName: ['Jonas'],
    lastName: 'Doe',
    email: '<EMAIL>',
    course: ['Maths', 'Science']
};
var inter_student = {
    firstName: 'Pavos',
    lastName: 'Doe',
    matricule: '12345',
    email: '<EMAIL>',
    yearResult: 10
};
var inter_assistant = {
    firstName: ['Matthieu'],
    lastName: 'Louis',
    email: '<EMAIL>',
    matricule: '123456789',
    yearResult: 100,
    course: ['Javascript', 'Sql', 'Html']
};
// Typage des méthodes
//? Fonction
function addition(nb1, nb2) {
    var result = nb1 + nb2;
    return result;
}
//? Procedure
function sayHello(person) {
    if (person.lastName === 'Gripsou') {
        return;
    }
    console.log("Bonjours ".concat(person.firstName, " ").concat(person.lastName));
}
//? Callback
function tabFilter(tab, filterB) {
    var result = [];
    for (var _i = 0, tab_1 = tab; _i < tab_1.length; _i++) {
        var elem = tab_1[_i];
        if (filterB(elem)) {
            result;
        }
    }
}
var names = ['Tom', 'Mike', 'Musa', 'Sookie'];
var res = tabFilter(names, function (name) { return name.includes('i'); });
var car1 = {
    brand: 'VW',
    model: 'Golf',
    engine: '180ch'
};
var car2 = {
    brand: 'Mercedes',
    model: 'S-Class',
    engine: '240ch'
};
var car3 = {
    brand: 'Citroën',
    model: 'DS',
    color: 'white'
};
