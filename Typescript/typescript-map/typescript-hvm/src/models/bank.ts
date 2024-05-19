import {CurrentAccount} from "./account.model";
import {Person} from "./person.model";

export class Bank {
    private name: string;
    private accounts: Map<string, CurrentAccount>;

    constructor(name: string, ...accounts: CurrentAccount[]) {
        this.name = name;
        this.accounts = new Map<string, CurrentAccount>(accounts.map((it) => [it.Iban, it]))

        // Alternative
        // this.accounts = new Map()
        // accounts.forEach((it) => this.accounts.set(it.Iban, it))
    }


    get Name(): string {
        return this.name;
    }

    get Accounts(): Array<CurrentAccount> {
        return [...this.accounts.values()];
    }

    add(account: CurrentAccount) {
        if (this.accounts.has(account.Iban)) return;
        this.accounts.set(account.Iban, account)
    }

    remove(account: CurrentAccount | string) {
        let iban;
        if (account instanceof CurrentAccount) {
            iban = account.Iban
        } else {
            iban = account
        }

        if (!this.accounts.has(iban)) return;
        this.accounts.delete(iban)
    }

    get(iban: string): CurrentAccount | undefined {
        return this.accounts.get(iban)
    }

    totalAccountByOwner(owner: Person) {
        return this.Accounts
            .filter(({Owner}) => Owner.lastName == owner.lastName && Owner.firstName == owner.firstName)
            .reduce((total, cv) => total + cv.Balance, 0)
    }
}
