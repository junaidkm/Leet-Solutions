/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    
    let max = 0
    for(i=0;i<accounts.length;i++){
    let ans = 0
    for(j=0;j<accounts[i].length;j++){
     ans += accounts[i][j]
    }
    if ( ans > max){
        max = ans
    }
    }
    return max
};  