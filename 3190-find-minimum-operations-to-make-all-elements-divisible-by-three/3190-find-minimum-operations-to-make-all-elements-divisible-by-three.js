/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let ans = 0;

    for (let i = 0; i < nums.length; i++) {
        let rem = nums[i] % 3;

        ans += Math.min(rem, 3 - rem);
    }

    return ans;
};