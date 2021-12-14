export default class Cage {
    constructor(size, animals = [], id = Date.now() + Math.floor(Math.random() * 100)) {
        this._size = size;
        this.id = id;
        this._isDirty = false;
        this._animals = animals;
    }
    get size() {
        return this._size;
    }
    get isDirty() {
        return this._isDirty;
    }
    dirty() {
        this._isDirty = true;
    }
    clean() {
        this._isDirty = false;
    }
    get animals() {
        return this._animals;
    }
    addAnimal(animal) {
        this.animals.push(animal);
    }
    removeAnimalByID(id) {
        const animalIndex = this.animals.findIndex((animal) => animal.id === id);
        this.animals.splice(animalIndex, 1);
    }
}
