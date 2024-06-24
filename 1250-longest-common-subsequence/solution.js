/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    let l1 = text1.length, l2 = text2.length
    if (l1 > l2) return longestCommonSubsequence(text2, text1)
    l1++
    let dp = new Array(l1).fill(0)
    for (let i2 = 0; i2 < l2; i2++) {
        const c2 = text2.charAt(i2)
        let prevBest = 0
        for (let i1 = 1; i1 < l1; i1++) {
            const c1 = text1.charAt(i1-1)
            const temp = dp[i1]
            dp[i1] = (c1 == c2) ? 1 + prevBest : Math.max(dp[i1], dp[i1-1])
            prevBest = temp
        }
    }
    l1--
    return dp[l1]
};
