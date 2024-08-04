/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
    const n = s.length
    const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
    let count = 0
    for (let i = 0; i < k; i++) {
        count += (vowels.has(s[i]) ? 1 : 0)
    }
    let max = count
    for (let i = k; i < n; i++) {
        count += (vowels.has(s[i]) ? 1 : 0)
        count -= (vowels.has(s[i - k]) ? 1 : 0)
        max = Math.max(max, count)
        if (max == k) break
    }
    return max
};
