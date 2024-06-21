/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const rows = matrix.length, columns = matrix[0].length
    const setColumn = (c) => {
        for (let r = 0; r < rows; r++) {
            matrix[r][c] = 0
        }
    }
    const setRow = (r) => {
        for (let c = 0; c < columns; c++) {
            matrix[r][c] = 0
        }
    }
    let cSet = new Set(), rSet = new Set()
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            if (matrix[r][c] == 0) {
                if (!cSet.has(c)) {
                    cSet.add(c)
                }
                if (!rSet.has(r)) {
                    rSet.add(r)
                }
            }
        }
    }
    for (let c of cSet) {
        setColumn(c)
    }
    for (let r of rSet) {
        setRow(r)
    }
};
