/*
 * @lc app=leetcode id=1 lang=cpp
 *
 * [1] Two Sum
 */

// @lc code=start
#include <vector>
#include <unordered_map>

class Solution
{
public:
    std::vector<int> twoSum(std::vector<int> &nums, int target)
    {
        std::unordered_map<int, int> numToIndex;
        numToIndex[nums[0]] = 0;
        for (int i = 1; i < nums.size(); i++)
        {
            int complement = target - nums[i];
            if (numToIndex.find(complement) != numToIndex.end())
            {
                return {numToIndex[complement], i};
            }
            numToIndex[nums[i]] = i;
        }
        return {};
    };
};

// @lc code=end
