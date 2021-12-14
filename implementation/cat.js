import Animal from "../implementation/animal.js";
export default class Cat extends Animal {
    constructor(name, yearOfBirth, breed, amountOfLegs) {
        super(name, yearOfBirth);
        this._breed = breed;
        this._amountOfLegs = amountOfLegs;
    }
    get breed() {
        return this._breed;
    }
    get amountOfLegs() {
        return this._amountOfLegs;
    }
    set amountOfLegs(value) {
        this._amountOfLegs = value;
    }
}
