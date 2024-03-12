'use strict'

const Person = (function(): void {
    this.firstName = "John";
    this.lastName = "Doe";
})


Person.prototype.sayHello = function(): void {
    console.log(this);
    console.log(`${this.firstName} ${this.lastName}`);
}

const p : Person = new Person();

p.sayHello();

console.log(p);

class Person_2{

    constructor(firstName : string, lastName : string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    sayHello(){
        console.log(`${this.firstName} ${this.lastName}`);
    }
}