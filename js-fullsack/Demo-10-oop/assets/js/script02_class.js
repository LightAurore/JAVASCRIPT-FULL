//! Demo - Création d'un objet via l'ecriture par class

// Ce n'est que du sucre syntaxique
// -> En interne, c'est la même chose que les prototypes
// -> Objectif : Amélioré la lisibilité du code

class Person {
    // Définir les propriétés de la classe "Person"
    firstname;
    lastname;

    // Définir la méthode qui permet d'initialisé l'objet
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    getFullname() {
        return this.firstname + ' ' + this.lastname;
    }

    getInitial() {
        return this.firstname[0] + this.lastname[0];
    }
}
