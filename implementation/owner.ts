import IAnimal from "../interface/ianimal";
import ICage from "../interface/icage";
import IShelter from "../interface/ishelter";

export default class Owner {
  private _name: string;
  private _yearOfBirth: number;
  private _shelter: IShelter;

  public constructor(name: string, yearOfBirth: number, shelter: IShelter) {
    this._name = name;
    this._yearOfBirth = yearOfBirth;
    this._shelter = shelter;
  }

  public get name(): string {
    return this._name;
  }

  public get age(): number {
    const currentYear: number = new Date().getFullYear();
    if (this._yearOfBirth === currentYear) {
      return 1;
    } else {
      return currentYear - this._yearOfBirth;
    }
  }

  public get shelter(): IShelter {
    return this._shelter;
  }
  public set shelter(shelter: IShelter) {
    this._shelter = shelter;
  }

  public feedHungryAnimals(): void {
    this._shelter!.hungryAnimals()!.forEach((animal: IAnimal): void => {
      animal.full();
    });
  }

  public cleanDirtyCages(): void {
    this._shelter!.dirtyCages()!.forEach((cage: ICage): void => {
      cage.clean();
    });
  }
}
