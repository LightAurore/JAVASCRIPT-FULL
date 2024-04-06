// 
let message : string;


// Différents types de données :
//? entier / reel
const v1_1: number = 42;
const v1_2 = 3.14;
const v1_3 = 0b1000; // coder en binaire
const v1_4 = 0o777; // coder en octal

//? caractères
const v2_1: string = 'Hello, world';
const v2_2: string = `La valeur de Pi est de ${v1_2}`;

//? booleen
const v3_1: boolean = true;
const v3_2: boolean = false;

//? tableau
const v4_1: number[] = [1, 2, 3];
const v4_2: number[] = [1, 2, 3, 4, 5];
const v4_3: string[] = ['Della','Didi', 'Zaza'];
const v4_4: Array<string> = ["Tot", "Baba", "Tara"];

//? Dynamique 

let v5_1: any;
v5_1 = 42;
v5_1 = 'Hello, world';

//? Object (sans prototype)
const person1 : {
    firstName: string,
    lastName: string,
    age: number,
    birthDate: Date
} = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    birthDate: new Date(1988, 11, 6)
};

//? Valeur nullable
let v6: string|null;

v6 = 'Hello, world';
v6 = null;

let v7: string|undefined;

v7 = 'Hello, world';
v7 = undefined;

const house : {
    nbRoom: number,
    garden? : number,  // Optionnel (valeur undefined)

} = {
    nbRoom: 4
}

//? Enumeration (Object)
enum DirectionEnum {
    LEFT, 
    RIGHT
}

const d1: DirectionEnum = DirectionEnum.LEFT; (1)

enum StopLightEnum {
    GREEN = 10,
    ORANGE = 15,
    RED = 20
}


const d2: StopLightEnum = StopLightEnum.GREEN;

// Type

//? Union
let v8_1 : string|number;
v8_1 = 42;
v8_1 = 'lala';

//?
type Person = {
    firstName: string,
    lastName: string,
    age: number,
    birthDate? : Date,
    gender? : 'F'|'M'|'M'
}



const person2: Person = {
    firstName: 'Bonheur',
    lastName: 'Joie',
    age: 42,
    gender: 'M'
}

//? Intersection
type Professor = {
    firstName: string[],
    lastName: string,
    email?: string,
    course : string[]
}

type Student = {
    firstName: string,
    lastName: string,
    matricule: string,
    email: string,
    yearResult? : number
}

type Assistant = Student & Professor;

const inter_prof : Professor = {
    firstName: ['Jonas'],
    lastName: 'Doe',
    email: '<EMAIL>',
    course: ['Maths', 'Science']
}
const inter_student : Student = {
    firstName: 'Pavos',
    lastName: 'Doe',
    matricule: '12345',
    email: '<EMAIL>',
    yearResult: 10
}

const inter_assistant : Assistant = {
    firstName : ['Matthieu'],
    lastName : 'Louis',
    email : '<EMAIL>',
    matricule : '123456789',
    yearResult : 100,
    course : ['Javascript', 'Sql', 'Html']
}

// Typage des méthodes
//? Fonction
function addition(nb1: number, nb2: number) : number {
    const result: number = nb1 + nb2;
    return result;
}


//? Procedure
function sayHello(person: Person) : void {
    if(person.lastName === 'Gripsou'){
        return
    }
    console.log(`Bonjours ${person.firstName} ${person.lastName}`);
    
}

//? Callback
function tabFilter(tab:string[], filterB: (elem: string) => boolean) : string[]{
    const result : string = [];

    for(const elem of tab){
        if(filterB(elem)){
            result
        }
    }
}

const names = ['Tom', 'Mike', 'Musa', 'Sookie'];

const res = tabFilter(names, (name)=> name.includes('i'));


// Interface
interface Car {
    model: string,
    brand: string,
    engine: string
}

interface FlyingCar extends Car {
    color: string
}

const car1: Car = {
    brand: 'VW',
    model: 'Golf',
    engine: '180ch'
}

const car2: Car = {
    brand: 'Mercedes',
    model: 'S-Class',
    engine: '240ch'
}

const car3: FlyingCar = {
    brand: 'Citroën',
    model: 'DS',
    color: 'white'
}