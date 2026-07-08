/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let wo = digits.join("");
    let se = BigInt(wo) + 1n;     
    let an = se.toString().split("").map(Number);
    return an;
};