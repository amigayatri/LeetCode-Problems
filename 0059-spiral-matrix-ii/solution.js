/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    const mat = Array.from({ length: n }, (_) => Array(n))
    const rows = n, columns = n
    const lastRow = rows - 1, lastColumn = columns - 1
    let currVal = 1
    const setLayer = (i = 0) => {
        if (i >= n) return
        for (let c = i; c < columns - i; c++) {
            mat[i][c] = currVal
            currVal++
        }
        if (currVal > n * n) return
        for (let r = i + 1; r < rows - i; r++) {
            mat[r][lastColumn - i] = currVal
            currVal++
        }
        if (currVal > n * n) return
        for (let c = lastColumn - i - 1; c >= i; c--) {
            mat[lastRow - i][c] = currVal
            currVal++
        }
        if (currVal > n * n) return
        for (let r = lastRow - i - 1; r > i; r--) {
            mat[r][i] = currVal
            currVal++
        }
        if (currVal > n * n) return
        setLayer(i + 1)
    }
    setLayer()
    return mat
};
