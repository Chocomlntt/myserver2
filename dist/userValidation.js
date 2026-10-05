"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAge = validateAge;
exports.validateEmail = validateEmail;
exports.validateUserData = validateUserData;
function validateAge(age) {
    if (age === null || age === undefined || age === '')
        return false;
    const num = Number(age);
    return !isNaN(num) && num > 0;
}
function validateEmail(email) {
    if (!email || typeof email !== 'string')
        return false;
    return email.trim().toLowerCase().endsWith('@gmail.com');
}
function validateUserData(data) {
    if (!validateAge(data.age)) {
        return { isValid: false, error: 'Age ต้องเป็นตัวเลขมากกว่า 0 เท่านั้น' };
    }
    if (!validateEmail(data.email)) {
        return { isValid: false, error: 'Email ต้องลงท้ายด้วย @gmail.com เท่านั้น' };
    }
    return { isValid: true };
}
