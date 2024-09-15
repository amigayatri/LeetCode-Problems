/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
    const n = s.length
    let maxLen = 0, hashmap = new Map()
    for(let right = 0; right < n; right++) {
        !hashmap.has(s[right]) && hashmap.set(s[right], 0)
        hashmap.set(s[right], hashmap.get(s[right])+1)
        if (hashmap.size <= k) {
            maxLen++
        } else {
            hashmap.set(s[right-maxLen], hashmap.get(s[right-maxLen])-1)
            if(hashmap.get(s[right-maxLen]) == 0) {
                hashmap.delete(s[right-maxLen])
            }
        }
    }
    return maxLen
};
