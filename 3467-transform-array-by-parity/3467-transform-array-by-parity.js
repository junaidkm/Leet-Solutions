/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function(nums) {
    let ans = [];

    for (let i = 0; i < nums.length; i++) {
    if ((nums[i] & 1) === 1) {
        ans.push(1);
    }else{
        ans.push(0)
    }
    }


   return ans.sort((a,b)=>a-b)
};