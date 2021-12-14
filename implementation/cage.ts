import IAnimal from "../interface/ianimal";
import ICage from "../interface/icage";

export default class Cage implements ICage {
  private _size: string;
  public readonly id: number;
  private _isDirty: boolean;
  private _animals: Array<IAnimal>;

  public constructor(size: string, animals: Array<IAnimal> = [], id: number = Date.now() + Math.floor(Math.random() * 100)) {
      this._size = size;
      this.id = id;
      this._isDirty = false;
      this._animals = animals;
    }

  public get size(): string {
      return this._size;
    }

  public get isDirty(): boolean {
      return this._isDirty;
    }
  public dirty(): void {
      this._isDirty = true;
    }
  public clean(): void {
      this._isDirty = false;
    }

  public get animals(): Array<IAnimal> {
      return this._animals;
    }

  public addAnimal(animal: IAnimal): void { 
      this.animals.push(animal);
    }

  public removeAnimalByID(id: number): void {
      const animalIndex: number = this.animals.findIndex((animal: IAnimal): boolean => animal.id === id);
      this.animals.splice(animalIndex, 1);
    }
}
