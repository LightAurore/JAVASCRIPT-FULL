//! Introduction à l'orienté objet prototypé de JS

// Création de nouveau type de donnée via une "class"

// Encapsulation
// - Protéger les attributs de l'objet
// - Méthode d'acces controller (Getter / Setter)

class Person {

    // Définition des propriétés (optionnel)
    // -> Possibilité de les rendre privées via un « # »
    // -> Génération d'un erreur si on essai d'y acceder
    #firstname;
    #lastname;

    // Constructeur -> Permet de créer les objets
    constructor(firstname, lastname) {
        console.log('Utilisation du constructeur');
        this.#firstname = firstname;
        this.#lastname = lastname; 
    }

    // Encapsulation
    // -> Via des propriétés créer avec les mots clefs "get" et "set"
    get firstname() {
        console.log('Utilisation du getter');
        return this.#firstname;
    }

    set firstname(value) {
        console.log('Utilisation du setter');
        this.#firstname = value;
    }

    get lastname() {
        return this.#lastname;
    }

    set lastname(lastname) {
        this.#lastname = lastname;
    }

    get fullname() {
        return this.firstname + ' ' + this.lastname;
    }
    
    // Méthodes
    sayHello(person) {
        // Vérification que le type de la variable est de type « person »
        // - Soit via le nom du ctor :       person.constructor.name
        // - Soit via le type d'instance :   person instanceof Person 

        if(!(person instanceof Person)) {
            throw new TypeError('Le parametre "person" doit être de type "Person"');
        }

        console.log(`${this.firstname} dit bonjour à ${person.firstname}`);
    }
}

// Mécanisme de l'heritage
// - Créer une classe qui se base sur une autre classe

class Student extends Person {

    // Propriétées
    // - Dans le cas de héritage -> On n'a pas acces au élément privé du parent
    #yearResult;

    // Constructeur
    // - Dans le cas de héritage -> Il est necessaire d'appeler le ctor parent
    constructor(firstname, lastname, yearResult) {
        super(firstname, lastname);
        this.yearResult = yearResult;

        // Dans le ctor, pour la validation de donnée : 
        // - Soit faire un test avec l'affectation
        // - Soit utiliser les setters 
    }    

    // Encapsulation
    get yearResult() {
        return this.#yearResult;
    }

    set yearResult(result) {
        if(result < 0 || result > 20) {
            throw new Error('Le resultat doit être entre 0 et 20.');
        }

        this.#yearResult = result;
    }

    // Méthodes 
    getResultWithName() {
        return this.firstname + ' > ' + this.yearResult;
    }
}