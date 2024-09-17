export class ILaptopProduct {
  public rams: string = "";
  public storage: string = "";
  public processor: string = "";
  public getSpecs(): string {
    return `Specs are :   RAM: ${this.rams}, Storage: ${this.storage}, Processor: ${this.processor}`;
  }
}
