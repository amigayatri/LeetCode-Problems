/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
    if (n <= 0) return false
    let primes = [2, 3, 5]
    let factors = { 2: 0, 3: 0, 5: 0 }
    primes.forEach((divisor) => {
        while (n > 1 && n % divisor == 0) {
            n /= divisor
            factors[divisor]++
        }
    })
    if (n == 1) return true
    return false
};
