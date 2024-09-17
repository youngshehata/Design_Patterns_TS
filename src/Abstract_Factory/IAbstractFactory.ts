import { ISedanCar } from "./ISedanCar";
import { ISuvCar } from "./ISuvCar";

export interface IAbstractFactory {
  createSedanCar(): ISedanCar;
  createSuvCar(): ISuvCar;
}
