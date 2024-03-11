class Person{

    firstName:string ="";
    lastName:string = "";

    // constructor(firstName : string, lastName : string){
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    // }
    // sayHello(){
    //     console.log(`${this.firstName} ${this.lastName}`);
    // }
}

class CurrentAccount {
    private balance: number = 0;
    private creditLine: number = 0;
    iban: string = "BE12 1234 7896 3214";
    owner: Person = new Person();

    deposit(amount): void {}
    
    withdraw(amount): void {}
}