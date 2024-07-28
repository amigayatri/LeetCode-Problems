/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let numCol = 1
    let pascal = [[1]]
    for (let i = 1; i < numRows; i++) {
        let row = [1]
        for (let j = 1; j < numCol; j++) {
            row[j] = pascal[i-1][j-1] + pascal[i-1][j]
        }
        row[numCol] = 1
        numCol++
        pascal[i] = row
    }
    return pascal
};
