
export class De{
    private _face: number;

    constructor(){
        this._face = Math.floor(Math.random() * 6) + 1;
    }

    get lancerDe(): number {

        return this._face;
    }
}