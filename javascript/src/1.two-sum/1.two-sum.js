/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = function (nums, target) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]
        if (map.has(complement)) {
            return [map.get(complement), i]
        }
        map.set(nums[i], i) // [{ nums[i], i }, ..]
    }
    // there is no solution case => return null
    return null
};

module.exports = twoSum;

// @lc code=end

