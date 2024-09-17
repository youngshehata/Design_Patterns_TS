import { AirplaneShippingProduct } from "./AirplaneShippingProduct";
import { Factory } from "./Factory";
import { IOrder } from "./IOrder";

export class AirplaneShipper extends Factory {
  constructor(public distanceInKM: number) {
    super();
  }
  // because this is aireplane shipping the cost will be higher than airplans and time will be shorter
  private getCost(): number {
    return this.distanceInKM * 15; // 15$ per km
  }
  private getTime(): number {
    return this.distanceInKM * 0.2; // 0.2 minutes per km
  }

  public createOrder(): IOrder {
    return new AirplaneShippingProduct(this.getCost(), this.getTime());
  }
}
