/**
 * @param {string[]} strs
 * @return {string}
 */
const isCommonPrefix = (strs, len) => {
    for (let i = 1; i < strs.length; i++) {
        for(let j = 0; j < len; j++) {
            if (strs[0][j] != strs[i][j]) return false
        }
    }
    return true
}
var longestCommonPrefix = function(strs) {
    let minLen = Number.MAX_SAFE_INTEGER
    for (let str of strs) {
        if (str.length < minLen) minLen = str.length
    }
    let low = 1, high = minLen
    while (low <= high) {
        let mid = Math.floor((low+high)/2)
        if (isCommonPrefix(strs, mid)) low = mid + 1
        else high = mid - 1
    }
    return strs[0].substring(0, Math.floor((low+high)/2))
};
