"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirplaneShipper = void 0;
const AirplaneShippingProduct_1 = require("./AirplaneShippingProduct");
const Factory_1 = require("./Factory");
class AirplaneShipper extends Factory_1.Factory {
    constructor(distanceInKM) {
        super();
        this.distanceInKM = distanceInKM;
    }
    // because this is aireplane shipping the cost will be higher than airplans and time will be shorter
    getCost() {
        return this.distanceInKM * 15; // 15$ per km
    }
    getTime() {
        return this.distanceInKM * 0.2; // 0.2 minutes per km
    }
    createOrder() {
        return new AirplaneShippingProduct_1.AirplaneShippingProduct(this.getCost(), this.getTime());
    }
}
exports.AirplaneShipper = AirplaneShipper;
