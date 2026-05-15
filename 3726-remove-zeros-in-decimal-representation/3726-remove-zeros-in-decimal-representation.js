/**
 * @param {number} n
 * @return {number}
 */
var removeZeros = function(n) {

    let s = n.toString().split("");
    let A = "";

    for(let i = 0; i < s.length; i++){

        if(s[i] !== "0"){
            A += s[i];
        }
    }

    return Number(A);
};