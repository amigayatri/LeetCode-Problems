/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
    let seenB = false
    for (let c of s) {
        if (c == 'b') seenB = true
        if (c == 'a' && seenB) return false
    }
    return true
};
