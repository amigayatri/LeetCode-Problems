/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const RADIX = 26, MOD = 1000000033
const hashValue = (string, m) => {
    let ans = 0
    let factor = 1
    for (let i = m - 1; i >= 0; i--) {
        const charValue = string.charCodeAt(i) - 'a'.charCodeAt(0)
        ans += (charValue*factor) % MOD
        factor = (factor * RADIX) % MOD
    }
    return ans % MOD
}
const updateHashValue = (hashValue, oldChar, newChar, MAX_WEIGHT) => {
    const oldCharValue = oldChar - 'a'.charCodeAt(0)
    const newCharValue = newChar - 'a'.charCodeAt(0)
    return (((hashValue*RADIX)%MOD) - ((oldCharValue*MAX_WEIGHT)% MOD) + newCharValue + MOD) % MOD
}
const checkNeedle = (haystack, start, needle) => {
    const m = needle.length
    for (let i = 0; i < m; i++) {
        if (haystack[start+i] != needle[i]) return false
    }
    return true
}
var strStr = function(haystack, needle) {
    const m = needle.length, n = haystack.length
    if (n < m) return -1
    let MAX_WEIGHT = 1
    for (let i = 0; i < m; i++) MAX_WEIGHT = (MAX_WEIGHT*RADIX)%MOD
    let hashNeedle = hashValue(needle, m)

    let hashHay = hashValue(haystack, m)

    if (hashHay == hashNeedle && checkNeedle(haystack, 0, needle)) return 0

    for (let windowStart = 1; windowStart <= n-m; windowStart++) {
        hashHay = updateHashValue(hashHay, haystack.charCodeAt(windowStart-1), haystack.charCodeAt(windowStart+m-1), MAX_WEIGHT)
        if (hashHay == hashNeedle && checkNeedle(haystack, windowStart, needle)) return windowStart
    }
    return -1
}
