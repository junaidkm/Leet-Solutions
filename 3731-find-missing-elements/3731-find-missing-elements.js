/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    let maxValue = Math.max(...nums);
    let minValue = Math.min(...nums);

    let set = new Set(nums);
    let result = [];

    for (let i = minValue; i <= maxValue; i++) {
        if (!set.has(i)) {
            result.push(i);
        }
    }

    return result;
};