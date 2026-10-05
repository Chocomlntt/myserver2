"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userValidation_1 = require("./userValidation");
const runUnitTests = () => {
    console.log('========================================');
    console.log('🧪 RUNNING USER VALIDATION UNIT TESTS');
    console.log('========================================');
    // 1. Test Age validation (Must be number > 0)
    console.log('\n[1] Testing Age Validation:');
    if ((0, userValidation_1.validateAge)(25) === true)
        console.log('  ✅ Pass: 25 is valid number');
    else {
        console.error('  ❌ Fail: 25 should be valid');
        process.exit(1);
    }
    if ((0, userValidation_1.validateAge)("สามสิบ") === true)
        console.log('  ✅ Pass: "30" is valid numeric string');
    else {
        console.error('  ❌ Fail: "30" should be valid');
        process.exit(1);
    }
    if ((0, userValidation_1.validateAge)("abc") === false)
        console.log('  ✅ Pass: "abc" is rejected');
    else {
        console.error('  ❌ Fail: "abc" should be rejected');
        process.exit(1);
    }
    if ((0, userValidation_1.validateAge)(-5) === false)
        console.log('  ✅ Pass: -5 is rejected');
    else {
        console.error('  ❌ Fail: -5 should be rejected');
        process.exit(1);
    }
    // 2. Test Email validation (Must end with @gmail.com)
    console.log('\n[2] Testing Email Validation:');
    if ((0, userValidation_1.validateEmail)("john@gmail.com") === true)
        console.log('  ✅ Pass: john@gmail.com is valid');
    else {
        console.error('  ❌ Fail: john@gmail.com should be valid');
        process.exit(1);
    }
    if ((0, userValidation_1.validateEmail)("user@yahoo.com") === false)
        console.log('  ✅ Pass: user@yahoo.com is rejected');
    else {
        console.error('  ❌ Fail: user@yahoo.com should be rejected');
        process.exit(1);
    }
    if ((0, userValidation_1.validateEmail)("invalid-email") === false)
        console.log('  ✅ Pass: invalid-email is rejected');
    else {
        console.error('  ❌ Fail: invalid-email should be rejected');
        process.exit(1);
    }
    console.log('\n🎉 ALL UNIT TESTS PASSED SUCCESSFULLY!\n');
};
runUnitTests();
