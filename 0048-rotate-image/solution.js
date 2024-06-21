/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    const n = matrix.length
    for (let i = 0; i < Math.floor((n+1)/2); i++) {
        for (let j = 0; j < Math.floor(n/2); j++) {
            const aux = matrix[n-1-j][i]
            matrix[n-1-j][i] = matrix[n-1-i][n-1-j]
            matrix[n-1-i][n-1-j] = matrix[j][n-1-i]
            matrix[j][n-1-i] = matrix[i][j]
            matrix[i][j] = aux
        }
    }
};
