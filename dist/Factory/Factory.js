"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Factory = void 0;
class Factory {
    getReceipt() {
        const order = this.createOrder();
        return `===RECEIPT===   Cost: ${order.costInDollars}$, Time: ${order.timeInMinutes} Minutes`;
    }
}
exports.Factory = Factory;
