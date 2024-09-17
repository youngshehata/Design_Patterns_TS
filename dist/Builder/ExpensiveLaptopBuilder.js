"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpensiveLaptopBuilder = void 0;
const ILaptopProduct_1 = require("./ILaptopProduct");
class ExpensiveLaptopBuilder {
    constructor() {
        this.product = new ILaptopProduct_1.ILaptopProduct();
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
exports.ExpensiveLaptopBuilder = ExpensiveLaptopBuilder;
