/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function(rows, cols, rStart, cStart) {
    const lastRow = rows - 1, lastColumn = cols - 1
    const dir = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    const totalElements = rows*cols
    let traversed = []
    for (let step = 1, currDir = 0, idx = 0; idx < totalElements;) {
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < step; j++) {
                if (rStart >= 0 && rStart < rows &&
                    cStart >= 0 && cStart < cols) {
                        traversed.push([rStart, cStart])
                        idx++
                }
                rStart += dir[currDir][0]
                cStart += dir[currDir][1]
            }
            currDir = (currDir+1)%4
        }
        step++
    }
    return traversed
};
