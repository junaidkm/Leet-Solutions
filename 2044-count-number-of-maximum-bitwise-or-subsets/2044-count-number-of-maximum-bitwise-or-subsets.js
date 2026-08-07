/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function(nums) {

    let maxOr = 0;
    for (let num of nums) {
        maxOr = maxOr | num;
    }
    let count = 0;

    function solve(index, currentOr) {
        if (index === nums.length) {
            if (currentOr === maxOr) {
                count++;
            }
            return;
        }
        solve(index + 1, currentOr | nums[index]);

        solve(index + 1, currentOr);
    }

    solve(0, 0);

    return count;
};