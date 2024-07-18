/**
 * @param {string} s
 * @return {string}
 */
const isVowel = (char) => {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
    return vowels.has(char.toLowerCase())
}
var reverseVowels = function (s) {
    const n = s.length
    s = s.split('')
    let start = 0, end = n - 1
    while (start < end) {
        while (start < n && !isVowel(s[start])) start++
        while (end >= 0 && !isVowel(s[end])) end--
        if (start < end) {
            [s[start], s[end]] = [s[end], s[start]]
            start++
            end--
        }
    }
    return s.join('')
};
