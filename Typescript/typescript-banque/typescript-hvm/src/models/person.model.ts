type PersonOptions = Partial<{ birthDate: Date }>

export class Person {
    private lastName: string;
    private firstName: string;
    private birthDate: Date;
    
    constructor(lastName: string, firstName: string, options?: PersonOptions) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.birthDate = options && options.birthDate || new Date("1900-01-01")
    }
}
