export default class Animal {
    constructor(name, yearOfBirth, id = Date.now() + Math.floor(Math.random() * 100)) {
        this._name = name;
        this._yearOfBirth = yearOfBirth;
        this._isHungry = false;
        this.id = id;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get age() {
        const currentYear = new Date().getFullYear();
        if (this._yearOfBirth === currentYear) {
            return 1;
        }
        else {
            return currentYear - this._yearOfBirth;
        }
    }
    get isHungry() {
        return this._isHungry;
    }
    hungry() {
        this._isHungry = true;
    }
    full() {
        this._isHungry = false;
    }
}
