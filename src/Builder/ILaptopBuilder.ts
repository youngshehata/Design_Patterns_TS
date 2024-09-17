import { ILaptopProduct } from "./ILaptopProduct";

export interface ILaptop {
  setRam(ram: number): void;
  setStorage(storage: number): void;
  setProcessor(processor: string): void;
  getLaptop(): ILaptopProduct;
}
