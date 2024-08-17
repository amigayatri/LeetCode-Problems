/**
 * @param {number} n
 * @return {boolean}
 */
var isArmstrong = function (n) {
    const sz = Math.floor(Math.log10(n)) + 1
    let total = 0, num = n
    while (num > 0) {
        const d = num % 10
        total += Math.pow(d, sz)
        num = Math.floor(num / 10)
    }
    return total == n

};
