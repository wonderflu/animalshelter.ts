import ICage from "./icage";
import IAnimal from "./ianimal";

export default interface IShelter {
  readonly name: string;
  readonly cages: Array<ICage>;
  dirtyCages(): Array<ICage> | null;
  // dirtyCagesCBAsync(callback: (error: Error, dirtyCages: Array<ICage>) => void): void;
  dirtyCagesAsync(): Promise<ICage[]>;
  findCageByID(id: number): ICage | null;
  addCage(cage: ICage): void;
  deleteCageByID(id: number): void;
  hungryAnimals(): Array<IAnimal> | null;
  findAnimalByID(id: number): IAnimal | null;
}