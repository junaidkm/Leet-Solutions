/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {

    let sum = x
        .toString()
        .split("")
        .reduce((a, b) => a + Number(b), 0);

    return x % sum === 0 ? sum : -1;
};