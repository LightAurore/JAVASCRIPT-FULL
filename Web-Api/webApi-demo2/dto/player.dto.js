
/**
 * A player
 * @typedef {object} PlayerDTO
 * @property {string} firstname
 * @property {string} lastname
 */

export class PlayerDTO {

    constructor({firstname, lastname}){
        this.firstname = firstname;
        this.lastname = lastname;
    }
}

