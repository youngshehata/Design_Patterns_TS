import { IAbstractFactory } from "./IAbstractFactory";
import { ISedanCar } from "./ISedanCar";
import { ISuvCar } from "./ISuvCar";
import { NissanSedanCar } from "./NissanSedanCar";
import { NissanSuvCar } from "./NissanSuvCar";

export class NissanFactory implements IAbstractFactory {
  createSedanCar(): ISedanCar {
    return new NissanSedanCar();
  }

  createSuvCar(): ISuvCar {
    return new NissanSuvCar();
  }
}
