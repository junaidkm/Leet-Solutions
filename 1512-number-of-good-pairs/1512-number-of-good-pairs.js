/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let count = 0
    for(i=0;i<nums.length;i++){
        for(j=0;j<i;j++){
            if(nums[i] == nums[j] ){
                count++
            }
        }
    }
    return count
};