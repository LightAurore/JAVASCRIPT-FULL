import {Person} from "./person.model";

type CurrentAccountOptions = Partial<{ balance: number, creditLine: number }>

export class CurrentAccount {
    private iban: string;
    private balance: number;
    private creditLine: number = 0;
    private owner: Person;

    constructor(iban: string, owner: Person, options?: CurrentAccountOptions) {
        this.iban = iban
        this.owner = owner
        this.balance = options && options.balance || 0
        this.creditLine = options && options.creditLine || 0
    }

    get Iban(): string {
        return this.iban
    }
    get Balance(): number {
        return this.balance
    }
    get Owner(): Person {
        return this.owner
    }
    set CreditLine(creditLine: number) {
        if (creditLine < 0) {
            this.creditLine = 0;
            return
        }
        this.creditLine = creditLine;
    }
    get CreditLine(): number {
        return this.creditLine
    }

    deposit(amount: number) {
        if (amount <= 0) return;

        this.balance += amount;
    }
    withDraw(amount: number) {
        if (amount <= 0) return;
        if (this.balance - amount <= -this.creditLine) return;

        this.balance -= amount;
    }
}
