export default class Shelter {
    constructor(name, cages = []) {
        this._name = name;
        this._cages = cages;
    }
    get name() {
        return this._name;
    }
    get cages() {
        return this._cages;
    }
    dirtyCages() {
        const dirtyCages = this._cages.filter((cage) => cage.isDirty);
        if (!dirtyCages.length) {
            return null;
        }
        else {
            return dirtyCages;
        }
    }
    dirtyCagesAsync() {
        return new Promise((resolve, reject) => {
            const dirtyCages = this._cages.filter((cage) => cage.isDirty);
            setTimeout(() => {
                if (!dirtyCages.length) {
                    reject(new Error("There are no cages to clean, all of them are already clean."));
                }
                else {
                    resolve(dirtyCages);
                }
            });
        }, 1000);
    }
    findCageByID(id) {
        const cageByID = this._cages.find((cage) => cage.id === id);
        if (!cageByID) {
            return null;
        }
        else {
            return cageByID;
        }
    }
    addCage(cage) {
        this._cages.push(cage);
    }
    deleteCageByID(id) {
        const cageIndex = this._cages.findIndex((cage) => cage.id === id);
        this._cages.splice(cageIndex, 1);
    }
    hungryAnimals() {
        const hungryAnimals = [];
        this._cages.forEach((cage) => {
            cage.animals.forEach((animal) => {
                if (animal.isHungry) {
                    hungryAnimals.push(animal);
                }
            });
        });
        if (!hungryAnimals.length) {
            return null;
        }
        else {
            return hungryAnimals;
        }
    }
    findAnimalByID(id) {
        let animalByID;
        this._cages.forEach((cage) => {
            cage.animals.forEach((animal) => {
                if (animal.id === id) {
                    animalByID = animal;
                }
            });
        });
        if (!animalByID) {
            return null;
        }
        else {
            return animalByID;
        }
    }
}
