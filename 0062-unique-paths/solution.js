/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const pathHelper = (memo, r, c) => {
        if (r == 0 || c == 0) return memo[r][c] = 1
        if (memo[r][c] != 0) return memo[r][c]
        return memo[r][c] = pathHelper(memo, r-1, c) + pathHelper(memo, r, c-1)
    }
    let memo = new Array(m).fill().map(()=>new Array(n).fill(0))
    return pathHelper(memo, m-1, n-1)
};
