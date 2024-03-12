
type CurrentAccountOptions = Partial<{ balance: number, creditLine: number }>
class CurrentAccount {
    private _iban: string;
    private _balance: number;
    private _creditLine: number = 0;
    private _owner: Person;

    constructor(iban: string, owner: Person, options?: CurrentAccountOptions) {
        this._iban = iban
        this._owner = owner
        this._balance = options && options.balance || 0
        this._creditLine = options && options.creditLine || 0
    }

    get Iban(): string {
        return this._iban
    }
    get Balance(): number {
        return this._balance
    }
    get Owner(): Person {
        return this._owner
    }
    set CreditLine(creditLine: number) {
        if (creditLine < 0) {
            this._creditLine = 0;
            return
        }
        this._creditLine = creditLine;
    }
    get CreditLine(): number {
        return this._creditLine
    }

    deposit(amount: number) {
        if (amount <= 0) return;

        this._balance += amount;
    }
    withDraw(amount: number) {
        if (amount <= 0) return;
        if (this._balance - amount <= -this._creditLine) return;

        this._balance -= amount;
    }
}

const a = new CurrentAccount("", new Person(), {creditLine: 42, balance: 42})
