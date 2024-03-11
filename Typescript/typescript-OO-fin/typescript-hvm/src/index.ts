import {CurrentAccount, Person, SavingAccount} from "./models";
import {Bank} from "./models/bank";

const owner = new Person("Ovyn", "Flavian", { birthDate: new Date("1991-07-19") })
const account = new CurrentAccount("BE12 1234 1234 1234", owner)
const bank = new Bank("Picsou", account)
const saving = new SavingAccount("BE12 1234 1234 1235", owner, {balance: 50})
bank.add(saving)

const a = bank.get("BE12 1234 1234 1234")!

