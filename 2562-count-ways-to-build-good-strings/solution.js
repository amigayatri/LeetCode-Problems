/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
var countGoodStrings = function (low, high, zero, one) {
    const modAns = Math.pow(10, 9)+7
    let dp = new Array(high + 1)
    dp[0] = 1
    const countBySize = (size) => {
        if (typeof dp[size] === 'number') return dp[size]
        let count = 0
        if (size >= one) count += countBySize(size - one)
        if (size >= zero) count += countBySize(size - zero)
        dp[size] = count % modAns
        return dp[size]
    }
    let answer = 0
    for (let sz = low; sz <= high; sz++) {
        answer += countBySize(sz)
    }
    return answer % modAns
};
