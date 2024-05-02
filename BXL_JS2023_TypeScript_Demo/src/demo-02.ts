// Typage des variables : « nature variableName : type »
let message: string;


// Différents type de données :
//? Nombre (Entier / Réel)
const v1_1: number = 42;
const v1_2 = 3.14;
const v1_3 = 0b0101;

//? Chaine de caractere
const v2_1: string = 'Hello World';
const v2_2 = `La valeur de PI est de ${v1_2}`;

//? Booléen
let v3_1: boolean = false;

//? Collection
const v4_1: string[] = ['Della', 'Donald', 'Zaza'];
const v4_2: Array<string> = ['Yanis', 'Fred'];

//? Dynamique
let v5: any;
v5 = 42;
v5 = 'Test';

//? Object (sans prototype)
const person1: {
    firstname: string,
    lastname: string,
    birthdate: Date
} = {
    firstname: 'Della',
    lastname: 'Duck',
    birthdate: new Date(1988, 11, 6)
};

//? Valeur nullable
let v6: string | null;
v6 = 'Mike';
v6 = null;

const house: {
    nbRoom: number,
    garden?: number
} = {
    nbRoom: 6,
};

//? Enumeration
enum DirectionEnum {
    LEFT,
    RIGHT
}
const v7_1: DirectionEnum = DirectionEnum.RIGHT;

enum StopLightEnum {
    GREEN = 10,
    ORANGE = 15,
    RED = 20
};
const v7_2: StopLightEnum = StopLightEnum.ORANGE;


// Les types complexes

//? Union
let v8_1 : string|number;
v8_1 = 42;
v8_1 = 'Test';

//? Définir un nouveau type
type StringOrNumber = string|number;

type Person = {
    firstname: string,
    lastname: string,
    birthdate? : Date,
    gender?: 'F'|'M'|'X'
};

const person2: Person = {
    firstname: 'Gontran',
    lastname: 'Bonheur',
    gender: 'M'
};

//? Intersection
type Professor = {
    firstname: string,
    lastname: string,
    email?: string,
    courses: string[]
}

type Student = {
    firstname: string,
    lastname: string,
    matricule: string
    email: string,
    yearResult?: number
};

type Assistant = Student & Professor;


const inter_prof : Professor = {
    firstname: 'Baltazar',
    lastname: 'Picsou',
    courses: ['Economie', 'Stats']
} 

const inter_student : Student = {
    firstname: 'Zaza',
    lastname: 'Vanderquack',
    email: 'zaza.vanderquack@gmail.com',
    matricule: 'zavand24'
}

const inter_assistant : Assistant = {
    firstname: 'Della',
    lastname: 'Duck',
    email: 'della.duck@hotmail.be',
    matricule: 'delduck20',
    courses: ['JavaScript', 'Sql']
};


// Typage des méthodes
//? Fonction
function addition(nb1: number, nb2: number) : number {
    const result: number = nb1 + nb2;
    return result;
}

//? Procedure
function sayHello(person: Person) : void {
    if(person.lastname === 'Gripsou') {
        return;
    }

    console.log(`Bonjour ${person.firstname} ${person.lastname}`);
}

//? Callback
function tabFilter(tab: string[], filterCB: (elem: string) => boolean) : string[] {

    const result: string[] = [];

    for (const elem of tab) {
        if(filterCB(elem)) {
            result.push(elem);
        }
    }

    return result;
}

const names = ['Tom', 'Mike', 'Musa', 'Sookie'];

const res = tabFilter(names, (name) => name.includes('i'));


// Interfaces
interface Car {
    model: string,
    brand: string,
    engine?: string
};

interface FlyingCar extends Car {
    color: string
}

const car1 : Car = {
    brand: 'VW',
    model: 'Polo',
    engine: '90ch'
}

const car2 : Car = {
    brand: 'Skoda',
    model: 'Fabia',
    engine: '68ch'
}

const car3 : FlyingCar = {
    brand: 'Citroën',
    model: 'DS',
    color: 'blanc'
}