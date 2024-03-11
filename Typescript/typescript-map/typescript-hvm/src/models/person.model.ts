type PersonOptions = Partial<{ birthDate: Date }>

export class Person {
    private _lastName: string;
    private _firstName: string;
    private _birthDate: Date;
    
    constructor(lastName: string, firstName: string, options?: PersonOptions) {
        this._lastName = lastName;
        this._firstName = firstName;
        this._birthDate = options && options.birthDate || new Date("1900-01-01")
    }


    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    get birthDate(): Date {
        return this._birthDate;
    }

    set birthDate(value: Date) {
        this._birthDate = value;
    }
}
