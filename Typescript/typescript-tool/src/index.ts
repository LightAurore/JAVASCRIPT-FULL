import {Person} from "./models/person.model";

import {CurrentAccount} from './models/account.model';


const owner = new Person("Ovyn", "Flavian", { birthDate: new Date("1991-07-19") })
const account = new CurrentAccount("BE12 1234 1234 1234", owner)

console.log(owner)
console.log(account)

account.deposit(50)
console.log(account)

