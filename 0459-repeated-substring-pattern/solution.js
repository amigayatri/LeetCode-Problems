/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    const n = s.length
    let compare = (sz) => {
        let pattern = Array(n/sz).fill(s.substring(0, sz)).join('')
        return pattern == s
    }
    for (let i = 1; i <= n>>1; i++) {
        if ((n%i) == 0 && compare(i)) {
            return true
        }
    }
    return false
};
