/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    const M = s.length, N = t.length
    let dp = new Array(N).fill(0)
    let prev = 1
    for (let i = M-1; i >= 0; i--) {
        prev = 1
        for (let j = N-1; j >=0; j--) {
            let old_dpj = dp[j]
            if (s.charAt(i) == t.charAt(j)) dp[j] += prev
            prev = old_dpj
        }
    }
    return dp[0]
};
