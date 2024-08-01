/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, nRows) {
    if (nRows == 1) return s
    let answer = ''
    const n = s.length, charsInSection = 2 * (nRows - 1)
    for (let i = 0; i < n; i += charsInSection) answer += s[i]
    for (let r = 1; r < nRows - 1; r++) {
        const charsInBetween = charsInSection - 2 * r
        for (let i = r; i < n; i += charsInSection) {
            answer += s[i]
            const secondIndex = i + charsInBetween
            if (secondIndex < n) {
                answer += s[secondIndex]
            }
        }
    }
    for (let i = nRows - 1; i < n; i += charsInSection) answer += s[i]
    return answer
}
