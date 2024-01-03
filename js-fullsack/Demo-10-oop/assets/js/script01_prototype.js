//! Demo - Création d'un objet via l'ecriture par prototype
function Person(firstname, lastname) {

    if (!(this instanceof Person)) {
        throw new Error('Person doit être utilisé avec l\'operateur "new"! ');
    }

    this.firstname = firstname;
    this.lastname = lastname;
}
Person.prototype.getFullname = function () {
    return this.firstname + ' ' + this.lastname;
}

const p1 = new Person('Della', 'Duck');
// Object { firstname: "Della", lastname: "Duck" }

p1.firstname        // "Della"
p1.lastname         // "Duck"
p1.getFullname();   // "Della Duck"

Person.prototype.getInitial = function () {
    return this.firstname[0] + this.lastname[0];
}

const p2 = new Person('Zaza', 'Vanderquack');
p2.getInitial();    // "ZV"
p1.getInitial();    // "DD" 