import { ILaptop } from "./ILaptopBuilder";
import { ILaptopProduct } from "./ILaptopProduct";

export class ExpensiveLaptopBuilder implements ILaptop {
  private product: ILaptopProduct;

  constructor() {
    this.product = new ILaptopProduct();
  }

  public reset(): void {
    this.product = {} as ILaptopProduct;
  }

  public setRam(ram: number): void {
    this.product.rams = `Setting G-Skill ${ram} GB`;
  }

  public setStorage(storage: number): void {
    this.product.storage = `Setting Samsung NVMe ${storage} GB storage`;
  }
  public setProcessor(processor: string): void {
    this.product.processor = processor;
  }
  public getLaptop(): ILaptopProduct {
    return this.product;
  }
}
