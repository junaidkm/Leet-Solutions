/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {

    let elementSum = nums.reduce((a, b) => a + b, 0);

    let digitSum = nums.join("").split("").reduce((a, b) => a + Number(b), 0);

    return Math.abs(elementSum - digitSum);
};