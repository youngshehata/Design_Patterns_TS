import { KiaFactory } from "./Abstract_Factory/KiaFactory";
import { NissanFactory } from "./Abstract_Factory/NissanFactory";

// setting the factor to kia
let factor = new KiaFactory();
const firstSedan = factor.createSedanCar();
const firstSuv = factor.createSuvCar();
// setting factor to nissan
factor = new NissanFactory();
const secondSedan = factor.createSedanCar();
const secondSuv = factor.createSuvCar();

console.log(firstSedan);
console.log(firstSuv);
console.log(secondSedan);
console.log(secondSuv);
