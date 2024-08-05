/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let allLetters = new Set()
    for (let char of s) {
        allLetters.add(char)
    }
    let maxLength = 0
    const isWindowValid = (start, end, charFrequency, maxReplacements) => {
        return end + 1 - start - charFrequency <= maxReplacements
    }
    for (let letter of allLetters) {
        let start = 0, count = 0
        for (let end = 0; end < s.length; end++) {
            if (s[end]===letter) {
                count++
            }
            while (!isWindowValid(start, end, count, k)) {
                if (s[start] === letter) {
                    count--
                }
                start++
            }
            maxLength = Math.max(maxLength, end + 1 - start)
        }
    }
    return maxLength
};
