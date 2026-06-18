var climbStairs = function(n) {
    let first = 1;
    let second = 2;

    if (n <= 2) return n;

    for (let i = 3; i <= n; i++) {
        let temp = first + second;
        first = second;
        second = temp;
    }

    return second;
};