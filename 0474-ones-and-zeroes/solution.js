/**
 * @param {string[]} strs
 * @param {number} zeroLimit
 * @param {number} oneLimit
 * @return {number}
 */
var findMaxForm = function (strs, zeroLimit, oneLimit) {
    const countZeroesOnes = (str) => {
        const count = [0, 0]
        for (const c of str) {
            count[c-'0']++
        }
        return count
    }
    let dp = Array.from({length: zeroLimit+1}, () => new Array(oneLimit+1).fill(0))
    for (const str of strs) {
        const [zeroCount, oneCount] = countZeroesOnes(str)
        for (let zeroes = zeroLimit; zeroes >= zeroCount; zeroes--) {
            for (let ones = oneLimit; ones >= oneCount; ones--) {
                dp[zeroes][ones] = Math.max(1+dp[zeroes-zeroCount][ones-oneCount], dp[zeroes][ones])
            }
        }
    }
    return dp[zeroLimit][oneLimit]
};
