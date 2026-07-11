/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let total = nums.reduce((acc, curr) => acc + curr, 0);
    return total % k;
};