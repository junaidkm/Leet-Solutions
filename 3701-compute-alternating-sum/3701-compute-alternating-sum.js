/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSum = function(nums) {
    let ans = 0
    for(i=0;i<nums.length;i++){
        if (i % 2 === 1) {
          ans -= nums[i] 
        }
        else{
            ans += nums[i] 
        }
    }
    return ans
};