/**
 * A team
 * @typedef {object} TeamDTO
 * @property {string} teamname
 * @property {string} sport
 * @property {string} periods
 */

export class TeamDTO {

    constructor({teamname, sport, periods}){
        this.teamname = teamname;
        this.sport = sport;
        this.periods= periods
    }
}