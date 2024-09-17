"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _a, _Singleton_instance;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Singleton = void 0;
class Singleton {
    constructor() {
        this.variables = [];
        // Private constructor to prevent instantiation
    }
    static getinstance() {
        if (!__classPrivateFieldGet(_a, _a, "f", _Singleton_instance)) {
            __classPrivateFieldSet(_a, _a, new _a(), "f", _Singleton_instance);
        }
        return __classPrivateFieldGet(_a, _a, "f", _Singleton_instance);
    }
    addVariable(variable) {
        this.variables.push(variable);
    }
    getVariables(keyName) {
        const obj = this.variables.find((obj) => obj.key === keyName);
        if (!obj)
            return null;
        else {
            return obj;
        }
    }
}
exports.Singleton = Singleton;
_a = Singleton;
_Singleton_instance = { value: void 0 };
