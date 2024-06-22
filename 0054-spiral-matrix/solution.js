/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    const rows = matrix.length, columns = matrix[0].length
    const answerSize = rows * columns
    let answer = []
    const push = (firstRow, lastRow, firstColumn, lastColumn, leftTop, isRow) => {
        if (answer.length == answerSize) return
        if (isRow) {
            if (leftTop) {
                const r = firstRow
                for (let c = firstColumn; c <= lastColumn; c++) {
                    answer.push(matrix[r][c])
                }
                push(firstRow+1, lastRow, firstColumn, lastColumn, leftTop, !isRow)
            } else {
                const r = lastRow
                for (let c = lastColumn; c >= firstColumn; c--) {
                    answer.push(matrix[r][c])
                }
                push(firstRow, lastRow-1, firstColumn, lastColumn, leftTop, !isRow)
            }
        } else {
            if (leftTop) {
                const c = lastColumn
                for (let r = firstRow; r <= lastRow; r++) {
                    answer.push(matrix[r][c])
                }
                push(firstRow, lastRow, firstColumn, lastColumn-1, !leftTop, !isRow)
            } else {
                const c = firstColumn
                for (let r = lastRow; r >= firstRow; r--) {
                    answer.push(matrix[r][c])
                }
                push(firstRow, lastRow, firstColumn+1, lastColumn, !leftTop, !isRow)
            }
        }
    }
    push(0, rows - 1, 0, columns - 1, true, true)
    return answer
};
