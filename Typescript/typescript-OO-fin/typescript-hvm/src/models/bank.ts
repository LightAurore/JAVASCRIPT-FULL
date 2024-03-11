import {Account} from "./account.model";
import {Person} from "./person.model";

export class Bank {
    private name: string;
    private accounts: Map<string, Account>;

    constructor(name: string, ...accounts: Account[]) {
        this.name = name;
        this.accounts = new Map<string, Account>(accounts.map((it) => [it.Iban, it]))

        // Alternative
        // this.accounts = new Map()
        // accounts.forEach((it) => this.accounts.set(it.Iban, it))
    }


    get Name(): string {
        return this.name;
    }

    get Accounts(): Array<Account> {
        return [...this.accounts.values()];
    }

    add(account: Account) {
        if (this.accounts.has(account.Iban)) return;
        this.accounts.set(account.Iban, account)
    }

    remove(account: Account | string) {
        let iban;
        if (account instanceof Account) {
            iban = account.Iban
        } else {
            iban = account
        }

        if (!this.accounts.has(iban)) return;
        this.accounts.delete(iban)
    }

    get(iban: string): Account | undefined {
        return this.accounts.get(iban)
    }

    totalAccountByOwner(owner: Person) {
        return this.Accounts
            .filter(({Owner}) => Owner.lastName == owner.lastName && Owner.firstName == owner.firstName)
            .reduce((total, cv) => total + cv.Balance, 0)
    }
}
