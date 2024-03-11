"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentAccount = void 0;
class CurrentAccount {
    // constructor(iban: string, owner: Person, balance: number = 0, creditLine: number = 0){
    constructor(iban, owner, options) {
        this._creditLine = 0;
        this._iban = iban;
        this._owner = owner;
        this._balance = options && options.balance || 0;
        this._creditLine = options && options.creditLine || 0;
    }
    // Accesseur
    get Iban() {
        return this._iban;
    }
    get Balance() {
        return this._balance;
    }
    get CreditLine() {
        return this._creditLine;
    }
    // Mutateur
    set CreditLine(creditLine) {
        if (creditLine < 0) {
            this._creditLine = 0;
            return;
        }
        this._creditLine = creditLine;
    }
    deposit(amount) {
        if (amount <= 0)
            return;
        this._balance += amount;
    }
    updateCreditLine(creditLine) {
        if (creditLine < 0) {
            this._creditLine = 0;
            return;
        }
    }
    withDraw(amount) {
        if (amount <= 0)
            return;
        if (this._balance - amount <= -this._creditLine)
            return;
        this._balance -= amount;
    }
}
exports.CurrentAccount = CurrentAccount;
// const a = new CurrentAccount("", new Person() , {creditLine: 42, balance: 42});
// a.CreditLine = 42;
// console.log(a.CreditLine);
