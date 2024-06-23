/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    let l1 = word1.length, l2 = word2.length
    if (l1 == 0) return l2
    if (l1 > l2) return minDistance(word2, word1)
    if (word1 === word2) return 0
    l1++; l2++
    let prevRow = new Array(l1)
    for (let iW1 = 0; iW1 < l1; iW1++) {
        prevRow[iW1] = iW1
    }
    const emptyRow = () => new Array(l1).fill(0)
    for (let iW2 = 1; iW2 < l2; iW2++) {
        let row = emptyRow()
        row[0] = iW2
        for (let iW1 = 1; iW1 < l1; iW1++) {
            const equal = word1.charAt(iW1 - 1) === word2.charAt(iW2 - 1) ? 0 : 1
            const minToHere = Math.min(1 + row[iW1 - 1], 1 + prevRow[iW1], equal + prevRow[iW1 - 1])
            row[iW1] = minToHere
        }
        prevRow = row
    }
    return prevRow[l1 - 1]
};
