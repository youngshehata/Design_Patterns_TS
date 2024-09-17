import { IOrder } from "./IOrder";

export class AirplaneShippingProduct implements IOrder {
  constructor(public costInDollars: number, public timeInMinutes: number) {}
  public companyName: string = "Airplane Shipping Company";
  public contactNumber: string = "02266653225";
}
