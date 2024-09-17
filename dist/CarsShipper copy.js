"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarsShipper = void 0;
const CarsShippingProduct_1 = require("./CarsShippingProduct");
const Factory_1 = require("./Factory");
class CarsShipper extends Factory_1.Factory {
    constructor(distanceInKM) {
        super();
        this.distanceInKM = distanceInKM;
    }
    // because this is car shipping the cost will be lower than airplans and time will be longer
    getCost() {
        return this.distanceInKM * 2; // 2$ per km
    }
    getTime() {
        return this.distanceInKM * 1.5; // 1.5 minutes per km
    }
    createOrder() {
        return new CarsShippingProduct_1.CarsShippingProduct(this.getCost(), this.getTime());
    }
}
exports.CarsShipper = CarsShipper;
