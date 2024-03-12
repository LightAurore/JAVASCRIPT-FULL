"use strict";


// Object.defineProperty(exports, "__esModule", { value: true });

const person_model_1 = require("./models/person.model");
const account_model_1 = require("./models/account.model");
const owner = new person_model_1.Person("Ovyn", "Flavian", { birthDate: new Date("1991-07-19") });
const account = new account_model_1.CurrentAccount("BE12 1234 1234 1234", owner);
console.log(owner);
console.log(account);
account.deposit(50);
console.log(account);
