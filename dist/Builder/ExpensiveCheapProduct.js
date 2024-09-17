"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ILaptopProduct = void 0;
class ILaptopProduct {
    constructor() {
        this.rams = 0;
        this.storage = 0;
        this.processor = "None";
    }
    getSpecs() {
        return `Specs are :   RAM: ${this.rams}, Storage: ${this.storage}, Processor: ${this.processor}`;
    }
}
exports.ILaptopProduct = ILaptopProduct;
