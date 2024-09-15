/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var numKLenSubstrNoRepeats = function(s, k) {
    const n = s.length
    if (k > n) return 0
    const charCount = new Map()
    for (let i = 0; i < k; i++) {
        const char = s[i]
        !charCount.has(char) && charCount.set(char, 0)
        charCount.set(char, charCount.get(char) + 1)
    }
    let count = 0
    if (charCount.size == k) count++
    for (let i = k; i < n; i++) {
        const outChar = s[i-k]
        charCount.set(outChar, charCount.get(outChar)-1)
        if (charCount.get(outChar) == 0) charCount.delete(outChar)
        const newChar = s[i]
        !charCount.has(newChar) && charCount.set(newChar, 0)
        charCount.set(newChar, charCount.get(newChar)+1)
        if (charCount.size == k) count++
    }
    return count
};
