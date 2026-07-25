/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    let seen = new Set();
    let ans = [];

    for (let i = 0; i < nums.length; i++) {
        if (seen.has(nums[i])) {
            ans.push(nums[i]);
        } else {
            seen.add(nums[i]);
        }
    }

    return ans;
};