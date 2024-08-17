/**
 * @param {string} s
 * @return {number}
 */
var countLetters = function (s) {
    const n = s.length
    let total = 0, count = 1
    for (let i = 0; i < n; i++) {
        total++
        if (s[i] == s[i-1]) {
            count++
        } else {
            total += ((count - 1) * count) / 2
            count = 1
        }
    }
    total += ((count - 1) * count) / 2
    return total
};
