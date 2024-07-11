/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let res = ''
    let i = 0
    const n1 = word1.length, n2 = word2.length
    const minN = Math.min(n1, n2)
    for (i = 0; i < minN; i++) {
        res += word1[i]
        res += word2[i]
    }
    if (i < n1) res += word1.slice(i)
    if (i < n2) res += word2.slice(i)
    return res
};
