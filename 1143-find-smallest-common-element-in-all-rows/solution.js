/**
 * @param {number[][]} mat
 * @return {number}
 */
var smallestCommonElement = function(mat) {
    const rows = mat.length, cols = mat[0].length
    const count = Array.from({length: 10001}, () => 0)
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            count[mat[r][c]]++
        }
    }
    for (let i = 0; i <= 10000; i++) {
        if (count[i] == rows) return i
    }
    return -1
};
