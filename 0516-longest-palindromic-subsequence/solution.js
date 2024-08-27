/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    const n = s.length
    let memo = Array.from({length: n}, () => new Array(n).fill(-1))
    const computSubseq = (start = 0, end = n-1) => {
        if (start > end) return 0
        if (start == end) return 1
        if (memo[start][end] != -1) return memo[start][end]
        if (s.charAt(start) == s.charAt(end)) {
            memo[start][end] = 2 + computSubseq(start+1, end-1)
        } else {
            memo[start][end] = Math.max(computSubseq(start+1, end), computSubseq(start, end-1))
        }
        return memo[start][end]
    }
    return computSubseq()
};
