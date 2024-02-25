/*
 * @lc app=leetcode id=1 lang=rust
 *
 * [1] Two Sum
 */

pub struct Solution;

// @lc code=start
use std::collections::HashMap;

impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut num_to_index: HashMap<i32, usize> = HashMap::with_capacity(nums.len());
        for (idx, num) in nums.into_iter().enumerate() {
            let complete = target - num;
            match num_to_index.get(&complete) {
                Some(&prev_idx) => {
                    return vec![prev_idx as i32, idx as i32];
                }
                None => {
                    num_to_index.insert(num, idx);
                }
            }
        }
        unreachable!()
    }
}
// @lc code=end

#[cfg(test)]
mod test {
    use super::*;

    #[test]
    fn test_two_sum() {
        let nums = vec![2, 7, 11, 15];
        let target = 9;
        let result = Solution::two_sum(nums, target);
        println!("{:?}", result);
    }
}
