/**
 * @param {number} n
 * @return {number[]}
 */
var getRow = function (n) {
    let row = [1]
    for (let k = 1; k < n; k++) {
        const val = Math.floor((row[row.length-1]*(n-k+1))/k)
        row.push(val)
    }
    row[n] = 1
    return row
};
