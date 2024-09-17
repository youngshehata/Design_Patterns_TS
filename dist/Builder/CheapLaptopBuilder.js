"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheapLaptopBuilder = void 0;
const ILaptopProduct_1 = require("./ILaptopProduct");
class CheapLaptopBuilder {
    constructor() {
        this.product = new ILaptopProduct_1.ILaptopProduct();
    }
    reset() {
        this.product = {};
    }
    setRam(ram) {
        this.product.rams = `Setting Basic ${ram} GB`;
    }
    setStorage(storage) {
        this.product.storage = `Setting Basic HDD ${storage} GB storage`;
    }
    setProcessor(processor) {
        this.product.processor = processor;
    }
    getLaptop() {
        return this.product;
    }
}
exports.CheapLaptopBuilder = CheapLaptopBuilder;
