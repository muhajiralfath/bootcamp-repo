class Animals {

    private _name: string;


    constructor(name: string) {
        this._name = name
    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}

let cat: Animals = new Animals("Tom")

console.log(cat.name)