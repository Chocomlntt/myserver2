"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
function hello() {
    console.log("Hello, World!");
}
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function IntegrationTest(a, b) {
    return add(a, b) + subtract(a, b) + multiply(a, b);
}
exports.Utils = {
    hello,
    add,
    subtract,
    multiply,
    IntegrationTest
};
