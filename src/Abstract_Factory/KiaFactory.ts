import { IAbstractFactory } from "./IAbstractFactory";
import { ISedanCar } from "./ISedanCar";
import { ISuvCar } from "./ISuvCar";
import { KiaSedanCar } from "./KiaSedanCar";
import { KiaSuvCar } from "./KiaSuvCar";

export class KiaFactory implements IAbstractFactory {
  createSedanCar(): ISedanCar {
    return new KiaSedanCar();
  }

  createSuvCar(): ISuvCar {
    return new KiaSuvCar();
  }
}
