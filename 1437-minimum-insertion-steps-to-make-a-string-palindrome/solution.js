/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function (s) {
    const n = s.length, unseen = -1
    const memo = Array.from({ length: n + 1 }, () => Array.from({ length: n + 1 }, () => unseen))
    const lcs = (len1 = n, len2 = n) => {
        if (len1 == 0 || len2 == 0) return 0
        if (memo[len1][len2] !== unseen) return memo[len1][len2]
        if (s[len1 - 1] == s[n -len2]) {
            memo[len1][len2] = 1 + lcs(len1 - 1, len2 - 1)
        } else {
            const op1 = lcs(len1 - 1, len2), op2 = lcs(len1, len2 - 1)
            memo[len1][len2] = Math.max(op1, op2)
        }
        return memo[len1][len2]
    }
    return n - lcs()
};
