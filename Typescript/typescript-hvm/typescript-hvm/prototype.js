const Person = (function() {
    this.firstName = "Flavian";
    this.lastName = "Ovyn";
});

Person.prototype.sayHello = function() {
    console.log(this)
    console.log(`${this.firstName} ${this.lastName}`)
}

const p = new Person();
console.log(p)
p.sayHello()


class Person2 {

    constructor() {
        this.lastName = "Ovyn";
        this.firstName = "Flavian"
    }

    sayHello() {
        console.log(this)
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

const p2 = new Person2();
console.log(p2)
p2.sayHello()
