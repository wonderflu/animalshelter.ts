import IAnimal from "../interface/ianimal";

export default abstract class Animal implements IAnimal {
  // declaring private variables . объявление 
  private _name: string;
  private _yearOfBirth: number;
  private _isHungry: boolean;
  public readonly id: number;

  public constructor(name: string, yearOfBirth: number, id: number = Date.now() + Math.floor(Math.random() * 100)) {
    // defining private variables . присвоение полей
    this._name = name;
    this._yearOfBirth = yearOfBirth;
    this._isHungry = false;
    this.id = id;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) { 
    this._name = value;
  }

  public get age(): number {
    const currentYear: number = new Date().getFullYear();
    if (this._yearOfBirth === currentYear) {
      return 1;
    } else {
      return currentYear - this._yearOfBirth;
    }
  }

  public get isHungry(): boolean {
    return this._isHungry;
  }
  public hungry(): void {
    this._isHungry = true;
  }
  public full(): void {
    this._isHungry = false;
  }
}