export class Formation {
    private _nom: string;

    public get nom(): string {
        return this._nom;
    }

    public set nom(v: string) {
        this._nom = v;
    }

    constructor(nom: string) {
        this.nom = nom;
    }
}