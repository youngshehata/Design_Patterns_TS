"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ILaptopProduct = void 0;
class ILaptopProduct {
    constructor() {
        this.rams = "";
        this.storage = "";
        this.processor = "";
    }
    getSpecs() {
        return `Specs are :   RAM: ${this.rams}, Storage: ${this.storage}, Processor: ${this.processor}`;
    }
}
exports.ILaptopProduct = ILaptopProduct;
