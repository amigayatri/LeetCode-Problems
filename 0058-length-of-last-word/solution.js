/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const n = s.length
    let startOfWord = n-1
    while(s[startOfWord] == ' ') startOfWord--
    let i = startOfWord
    while (i >= 0 && s[i] != ' ') i--
    return startOfWord - i
};
