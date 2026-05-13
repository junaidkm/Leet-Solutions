/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {

    let arr = n.toString().split("");

    let sum = arr.reduce((a, b) => a + Number(b), 0);

    let product = arr.reduce((a, b) => a * Number(b), 1);

    return product - sum;
};