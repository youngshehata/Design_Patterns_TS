import { IOrder } from "./IOrder";

export abstract class Factory {
  public abstract createOrder(): IOrder;
  public getReceipt(): String {
    const order = this.createOrder();
    return `===RECEIPT===   Cost: ${order.costInDollars}$, Time: ${order.timeInMinutes} Minutes`;
  }
}
