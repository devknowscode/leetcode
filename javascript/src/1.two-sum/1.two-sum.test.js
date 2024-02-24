const assert = require('assert');
const twoSum = require('./1.two-sum.js');

describe('Two Sum', function() {
    it('should return [1, 2] for input ([3,2,4], 6)', function() {
        assert.deepStrictEqual(twoSum([3,2,4], 6), [1, 2]);
    });

    it('should return [0, 1] for input ([2,7,11,15], 9)', function() {
        assert.deepStrictEqual(twoSum([2,7,11,15], 9), [0, 1]);
    });
    it('should return [0, 1] for input ([3, 3], 6)', function() {
        assert.deepStrictEqual(twoSum([3,3], 6), [0, 1]);
    });

    it('should return null for input ([1,2,3,4], 10)', function() {
        assert.deepStrictEqual(twoSum([1,2,3,4], 10), null);
    });

    it('should return [0, 2] for input ([5,1,5,5], 10)', function() {
        assert.deepStrictEqual(twoSum([5,1,5,5], 10), [0, 2]);
    });
});