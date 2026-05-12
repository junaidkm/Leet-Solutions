/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {

    let small = Math.min(...nums);

    let large = Math.max(...nums);

    for(i = small; i >= 1 ; i--){
        if(small% i === 0 && large% i ===0){
            return i
        }
    }

    return i
};