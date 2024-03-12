import {Person} from "./person.model";

export type CurrentAccountOptions = Partial<{ balance: number, creditLine: number }>
export type SavingAccountOptions = Partial<{ balance: number }>

export abstract class Account {
    private iban: string
    private balance: number
    private owner: Person

    constructor(iban: string, owner: Person, balance: number) {
        this.iban = iban;
        this.owner = owner
        this.balance = balance;
    }

    get Iban(): string { return this.iban }
    get Balance(): number { return this.balance }
    get Owner(): Person { return this.owner }

    deposit(amount: number) {
        if (amount <= 0) return;

        this.balance += amount;
    }
    withDraw(amount: number) {
        if (amount <= 0) return;

        this.balance -= amount;
    }
}
export class CurrentAccount extends Account {
    private creditLine: number;

    constructor(iban: string, owner: Person, options?: CurrentAccountOptions) {
        super(iban, owner, options && options.balance || 0);
        this.creditLine = options && options.creditLine || 0;
    }

    withDraw(amount: number) {
        if ((this.Balance - amount) < -(this.creditLine)) return

        super.withDraw(amount)
    }
}
export class SavingAccount extends Account {
    private lastWithdrawDate?: Date;

    constructor(iban: string, owner: Person, options?: SavingAccountOptions) {
        super(iban, owner, options && options.balance || 0);
    }
    withDraw(amount: number) {
        if (this.Balance - amount < 0) return

        super.withDraw(amount)
        this.lastWithdrawDate = new Date()
    }
}
