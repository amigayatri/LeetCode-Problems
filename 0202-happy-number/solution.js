/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const getNext = (n) => {
        let totalSum = 0
        while (n > 0) {
            totalSum += Math.pow(n%10, 2)
            n = Math.floor(n/10)
        }
        return totalSum
    }
    let seen = new Set()
    while (n !=1 && !seen.has(n)) {
        seen.add(n)
        n = getNext(n)
    }
    if (n == 1) return true
    return false
};
