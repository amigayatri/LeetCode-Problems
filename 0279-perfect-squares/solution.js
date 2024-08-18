/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
    const isSquare = (num) => {
        const squirt = Math.sqrt(num)
        return Math.ceil(squirt) == Math.floor(squirt)
    }
    while (n % 4 == 0) n /= 4
    if (n%8 == 7) return 4
    if(isSquare(n)) return 1
    for (let i = 1; i*i <= n; i++) {
        if (isSquare(n-i*i)) return 2
    }
    return 3
};
