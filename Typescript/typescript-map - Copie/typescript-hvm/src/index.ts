import {CurrentAccount, Person} from "./models";

const owner = new Person("Ovyn", "Flavian", { birthDate: new Date("1991-07-19") })
const account = new CurrentAccount("BE12 1234 1234 1234", owner)

