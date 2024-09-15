/**
 * @param {character[][]} picture
 * @return {number}
 */
var findLonelyPixel = function (picture) {
    const rows = picture.length
    const cols = picture[0].length
    const match = 'B'
    const rArr = new Array(rows).fill(0)
    const cArr = new Array(cols).fill(0)
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (picture[r][c] === match) {
                rArr[r]++
                cArr[c]++
            }
        }
    }

    let count = 0
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (picture[r][c] === match && rArr[r] === 1 && cArr[c] === 1) count++
        }
    }
    return count
};
