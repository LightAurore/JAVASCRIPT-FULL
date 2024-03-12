"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(lastName, firstName, options) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.birthDate = options && options.birthDate || new Date("1900-01-01");
    }
}
exports.Person = Person;
