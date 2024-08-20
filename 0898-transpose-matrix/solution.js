/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    const rows = matrix.length, cols = matrix[0].length
    const lastRow = rows - 1, lastCol = cols-1
    let ans = Array.from({length: cols}, () => new Array(rows))
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            ans[c][r] = matrix[r][c]
        }
    }
    return ans
};
