/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    let sum = 0 ; let conut = 0;
for (let i = 0; i < nums.length; i++){
        if(nums[i]%2===0&&nums[i]%3===0){
            sum += nums[i]
            conut++
      }
    }
     return conut ? (sum / conut) | 0 : 0;
};