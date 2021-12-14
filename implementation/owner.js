export default class Owner {
    constructor(name, yearOfBirth, shelter) {
        this._name = name;
        this._yearOfBirth = yearOfBirth;
        this._shelter = shelter;
    }
    get name() {
        return this._name;
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
    get shelter() {
        return this._shelter;
    }
    set shelter(shelter) {
        this._shelter = shelter;
    }
    feedHungryAnimals() {
        this._shelter.hungryAnimals().forEach((animal) => {
            animal.full();
        });
    }
    cleanDirtyCages() {
        this._shelter.dirtyCages().forEach((cage) => {
            cage.clean();
        });
    }
}
