/**
 * @param {number} numPeople
 * @return {number}
 */
var numberOfWays = function (numPeople) {
    const modulo = BigInt(Math.pow(10, 9) + 7)
    const cache = new Array(numPeople + 1)
    cache[0] = cache[1] = cache[2] = 1n
    const dp = (n) => {
        if (cache[n] === undefined) {
            let ans = 0n
            for (let i = 2; i <= n; i += 2) {
                ans += (dp(i - 2) * dp(n - i))
            }
            cache[n] = ans % modulo
        }
        return cache[n]
    }
    return Number(dp(numPeople) % modulo)
};
