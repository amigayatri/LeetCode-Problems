/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    let oddLetters = new Set()
    for (let c of s) {
        if (oddLetters.has(c)) oddLetters.delete(c)
        else oddLetters.add(c)
    }
    return oddLetters.size <= 1
};
