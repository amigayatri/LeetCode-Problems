/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function (s) {
    const n = s.length
    if (n === 1) return n
    let [charA, charB] = [s[0]]
    let [open, close] = [0, 1]
    let firstIdxLastChar = 0, maxLen = 0
    while (close < n) {
        const lastChar = s[close - 1]
        const char = s[close]
        if (charB && char !== charA && char !== charB) {
            open = firstIdxLastChar
        }
        if (char !== lastChar) {
            [charA, charB] = [lastChar, char]
            firstIdxLastChar = close
        }
        maxLen = Math.max(maxLen, close - open)
        close++
    }
    return maxLen + 1
};
