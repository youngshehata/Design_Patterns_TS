import { CarsShippingProduct } from "./CarsShippingProduct";
import { Factory } from "./Factory";
import { IOrder } from "./IOrder";

export class CarsShipper extends Factory {
  constructor(public distanceInKM: number) {
    super();
  }
  // because this is car shipping the cost will be lower than airplans and time will be longer
  private getCost(): number {
    return this.distanceInKM * 2; // 2$ per km
  }
  private getTime(): number {
    return this.distanceInKM * 1.5; // 1.5 minutes per km
  }

  public createOrder(): IOrder {
    return new CarsShippingProduct(this.getCost(), this.getTime());
  }
}
