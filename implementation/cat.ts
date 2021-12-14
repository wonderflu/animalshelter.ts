import Animal from "../implementation/animal.js";

export default class Cat extends Animal { // classes may extend from a base class. A derived class has all the properties and methods of its base class, and also define additional members.
  private _breed: string;
  private _amountOfLegs: number;

  public constructor(name: string, yearOfBirth: number, breed: string, amountOfLegs: number) {
  // constructor inherirance, the child class will have all fields from the parent class
    super(name, yearOfBirth); // 'super' must be called before accessing 'this' in the constructor of a derived class.
    this._breed = breed;
    this._amountOfLegs = amountOfLegs;
  }

  public get breed(): string {
    return this._breed;
  }

  public get amountOfLegs(): number {
    return this._amountOfLegs;
  }
  public set amountOfLegs(value: number) { 
    this._amountOfLegs = value;
  }
}
