"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const userValidation_1 = require("./userValidation");
const unit_test = () => __awaiter(void 0, void 0, void 0, function* () {
    // test 1: เช็ค age ให้เป็นตัวเลขเท่านั้น (และมากกว่า 0)
    if ((0, userValidation_1.validateAge)(25) === true && (0, userValidation_1.validateAge)("abc") === false && (0, userValidation_1.validateAge)(-5) === false) {
        console.log("Test 1 passed");
    }
    else {
        console.error("Test 1 failed: validateAge(age) failed");
        process.exit(1);
    }
    // test 2: เช็ค email ต้องมี @gmail.com ต่อท้ายเท่านั้น
    if ((0, userValidation_1.validateEmail)("user@gmail.com") === true && (0, userValidation_1.validateEmail)("user@yahoo.com") === false) {
        console.log("Test 2 passed");
    }
    else {
        console.error("Test 2 failed: validateEmail(email) failed");
        process.exit(1);
    }
});
unit_test();
