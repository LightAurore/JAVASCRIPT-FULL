

export class actorDTO {
    constructor({id,firstname, lastname,birthdate}){
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthdate = birthdate;
    }
}


export class actorListDTO {
    constructor({id,firstname, lastname}){
        this.id = id;
        this.name = firstname + ' ' + lastname;
    }
}

