import { IOrder } from "./IOrder";

export class CarsShippingProduct implements IOrder {
  constructor(public costInDollars: number, public timeInMinutes: number) {}
  public companyName: string = "Nile Shipping Company";
  public contactNumber: string = "01092110413";
}
