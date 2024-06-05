/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let hash1 = new Map()
    let hash2 = new Map()
    for (let letter of s1) {
        if (hash1.has(letter)) {
            hash1.set(letter, hash1.get(letter)+1)
        } else {
            hash1.set(letter, 1)
        }
    }
    let start = 0, end = s1.length-1
    for (let i = 0; i < end; i++) {
        if (hash2.has(s2[i])) hash2.set(s2[i], hash2.get(s2[i]) + 1)
        else hash2.set(s2[i], 1)
    }
    const compareHashes = (hash1, hash2) => {
        for (let [key, value] of hash1) {
            if (!hash2.has(key)) return false
            else if (hash2.get(key) !== value) return false
        }
        return true
    }
    for (; end < s2.length; start++, end++) {
        if (hash2.has(s2[end])) hash2.set(s2[end], hash2.get(s2[end])+1)
        else hash2.set(s2[end], 1)
        if(hash1.has(s2[end]) && hash1.size === hash2.size) {
            if (compareHashes(hash1, hash2)) return true
        }
        if (hash2.get(s2[start]) === 1) hash2.delete(s2[start])
        else hash2.set(s2[start], hash2.get(s2[start]) - 1)
    }
    return false
};
