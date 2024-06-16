/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if(s.length == 0 || s[0] == 0) return 0
    const n = s.length
    let twoBack = 1, oneBack = 1
    for (let i = 1; i < n + 1; i++) {
        let current = 0
        if (s.charAt(i-1) !== '0') {
            current = oneBack
        }
        const twoDigit = parseInt(s.substring(i-2, i))
        if (twoDigit >= 10 && twoDigit <= 26) {
            current += twoBack
        }
        twoBack = oneBack
        oneBack = current
    }
    return oneBack
};
