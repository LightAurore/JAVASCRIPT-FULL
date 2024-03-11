import { CurrentAccount } from "./account.model";

export class Bank {
    private name: string;
    private accounts: Map<string,CurrentAccount>;

    constructor(name: string, ...accounts: CurrentAccount[]){
        this.name = name;
        this.accounts = new Map<string, CurrentAccount>(accounts.map((it : CurrentAccount) => [it.Iban, it]));

        // Alternative
        // 
    }

    // Accesser
    get accounts(){
        return this._accounts;
    }
    get accounts(): Array<CurrentAccount>{
        return [...this._accounts.values()];
    }

    // Mutateur
    add(account: CurrentAccount): void {
        if(this._accounts.has(account.Iban)) return;
    }

    remove(account: CurrentAccount){

    }
    get(Iban: string)|(account: CurrentAccount){
        if(this._accounts.has(Iban)) {

        }
        return this._accounts.get(Iban);
    }

}