/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let biggestSize = 0, size = 0
    let map = new Map()
    let left = 0
    for (let right = 0; right < s.length; right++) {
        if (map.has(s[right])) {
            left = Math.max(map.get(s[right]), left)
        }
        biggestSize = Math.max(biggestSize, right - left + 1)
        map.set(s[right], right + 1)
    }
    return biggestSize
};
