export default interface IAnimal {
  readonly id: number;
  readonly isHungry: boolean;
  hungry(): void;
  full(): void;
}
