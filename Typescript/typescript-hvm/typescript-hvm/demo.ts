class Person {
    lastName = ""
    firstName = ""
}
class CurrentAccount {
    private balance: number = 0
    private creditLine: number = 0
    private iban: string = ""
    private owner: Person = new Person()

    deposit(amount: number) {}
    withdraw(amount: number) {}
}
