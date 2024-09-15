/**
 * @param {number[][]} mat1
 * @param {number[][]} mat2
 * @return {number[][]}
 */
var multiply = function(mat1, mat2) {
    const A = [], B = []
    const compressA = () => {
        const rows = mat1.length
        const cols = mat1[0].length
        for (let row = 0; row < rows; row++) {
            const currRow = []
            for (let col = 0; col < cols; col++) {
                const val = mat1[row][col]
                if (val !== 0) {
                    currRow.push([val, col])
                }
            }
            A.push(currRow)
        }
    }
    const compressB = () => {
        const rows = mat2.length
        const cols = mat2[0].length
        for (let row = 0; row < rows; row++) {
            const currRow = []
            for (let col = 0; col < cols; col++) {
                const val = mat2[row][col]
                if (val !== 0) {
                    currRow.push([val, col])
                }
            }
            B.push(currRow)
        }
    }
    compressA(), compressB()
    const m = mat1.length, k = mat1[0].length, n = mat2[0].length
    const ans = Array.from({length: m}, () => Array.from({length: n}, () => 0))
    for (let mat1Row = 0; mat1Row < m; mat1Row++) {
        for (const [mat1El, mat1Col] of A[mat1Row]) {
            for (const [mat2El, mat2Col] of B[mat1Col]) {
                ans[mat1Row][mat2Col] += mat1El*mat2El
            }
        }
    }
    return ans
};
