var minElement = function(nums) {
    let min = Infinity;

    for (let num of nums) {
        let sum = num
            .toString()
            .split("")
            .reduce((acc, digit) => acc + Number(digit), 0);

        if (sum < min) {
            min = sum;
        }
    }

    return min;
};