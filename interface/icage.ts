import IAnimal from "./ianimal";

export default interface ICage {
  readonly id: number;
  readonly isDirty: boolean;
  readonly animals: Array<IAnimal>;
  dirty(): void;
  clean(): void;
  addAnimal(animal: IAnimal): void;
  removeAnimalByID(id: number): void;
}