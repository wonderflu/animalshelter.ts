import IShelter from "../interface/ishelter";
import ICage from "../interface/icage";
import IAnimal from "../interface/ianimal";

export default class Shelter implements IShelter {
  private _name: string;
  private _cages: Array<ICage>;

  public constructor(name: string, cages: Array<ICage> = []) {
    this._name = name;
    this._cages = cages;
  }

  public get name(): string {
    return this._name;
  }

  public get cages(): Array<ICage> {
    return this._cages;
  }

  public dirtyCages(): Array<ICage> | null {
    const dirtyCages: Array<ICage> = this._cages.filter((cage: ICage): boolean => cage.isDirty);
    if (!dirtyCages.length) {
      return null;
    } else {
      return dirtyCages;
    }
  }

  // public dirtyCagesCBAsync(callback: (error: Error, dirtyCages: ICage[]) => void): void {
  //   setTimeout(() => {
  //     const dirtyCages: ICage[] = this._cages.filter((cage: ICage): boolean => cage.isDirty);
  //     let error!: Error;
  //     if (!dirtyCages.length) {
  //       error = new Error(
  //         "There are no cages to clean, all of them are already clean."
  //       );
  //     }
  //     callback(error, dirtyCages);
  //   }, 1000);
  // }

  public dirtyCagesAsync(): Promise<ICage[]> {
    return new Promise((resolve, reject) => {
      const dirtyCages: ICage[] = this._cages.filter((cage: ICage): boolean => cage.isDirty);
      setTimeout(() => {
        if (!dirtyCages.length) {
          reject(
            new Error(
              "There are no cages to clean, all of them are already clean."
            )
          );
        } else {
          resolve(dirtyCages);
        }
      });
    }, 1000);
  }

  public findCageByID(id: number): ICage | null {
    const cageByID: ICage | undefined = this._cages.find((cage: ICage): boolean => cage.id === id);
    if (!cageByID) {
      return null;
    } else {
      return cageByID;
    }
  }

  public addCage(cage: ICage): void {
    this._cages.push(cage);
  }

  public deleteCageByID(id: number): void {
    const cageIndex: number = this._cages.findIndex((cage: ICage): boolean => cage.id === id);
    this._cages.splice(cageIndex, 1);
  }

  public hungryAnimals(): IAnimal[] | null {
    const hungryAnimals: IAnimal[] = [];
    this._cages.forEach((cage: ICage): void => {
      cage.animals.forEach((animal: IAnimal): void => {
        if (animal.isHungry) {
          hungryAnimals.push(animal);
        }
      });
    });
    if (!hungryAnimals.length) {
      return null;
    } else {
      return hungryAnimals;
    }
  }

  public findAnimalByID(id: number): IAnimal | null {
    let animalByID!: IAnimal; // non-null assertion operator. when you know the value is actually neither null nor undefined, but the compiler doesn't, you can use the non-null assertion operator to communicate this.
    this._cages.forEach((cage: ICage): void => {
      cage.animals.forEach((animal: IAnimal): void => {
        if (animal.id === id) {
          animalByID = animal;
        }
      });
    });
    if (!animalByID) {
      return null;
    } else {
      return animalByID;
    }
  }
}
