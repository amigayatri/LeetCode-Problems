/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    const n = mat.length
    let sum = 0
    for (let i = 0; i < n; i++) sum+=mat[i][i]
    for (let i = 0; i < n; i++) sum+=mat[i][n-1-i]
    if (n&1) sum -= mat[n>>1][n>>1]
    return sum
};
