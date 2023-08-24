// 0-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    it('should round and add two numbers', () => {
        assert.strictEqual(calculateNumber(1.4, 2.6), 5); // 1.4 rounds to 1, 2.6 rounds to 3, sum is 4
        assert.strictEqual(calculateNumber(2.49, 2.51), 5); // 2.49 rounds to 2, 2.51 rounds to 3, sum is 5
    });
});
