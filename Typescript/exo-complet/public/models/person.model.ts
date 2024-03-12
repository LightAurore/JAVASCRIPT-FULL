type PersonOptions = Partial<{
    surname: string,
    role: string,


}>

export class Person {
    private _surname: string;
    private _family: string;
    private _order: string;
    private _role: string;
    private _classe: string;
    private _level: number;
    private _grade: string;
    private _endurance: string;
    private _strength: string;
    private _pointLife:number;

    constructor(surname: string,family: string, order: string, role: string, classe: string, level: number, grade: string, endurance: string, strength: string, pointLife:number) {
        this._surname = surname;
        this._family = family;
        this._order = order;
        this._role = role;
        this._classe = classe;
        this._level = level;
        this._grade = grade;
        this._endurance = endurance;
        this._strength = strength;
        this._pointLife = pointLife;
    }
}