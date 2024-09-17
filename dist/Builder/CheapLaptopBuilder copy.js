"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheapLaptopBuilder = void 0;
const ILaptopCheapProduct_1 = require("./ILaptopCheapProduct");
class CheapLaptopBuilder {
    constructor() {
        this.product = new ILaptopCheapProduct_1.ILaptopProduct();
    }
    reset() {
        this.product = {};
    }
    setRam(ram) {
        this.product.rams = `Setting G-Skill ${ram} GB`;
    }
    setStorage(storage) {
        this.product.storage = `Setting Samsung NVMe ${storage} GB storage`;
    }
    setProcessor(processor) {
        this.product.processor = processor;
    }
    getLaptop() {
        return this.product;
    }
}
exports.CheapLaptopBuilder = CheapLaptopBuilder;
