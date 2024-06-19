/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    const n = s.length
    let openCount = 0, closeCount = 0
    for (let i = 0; i < n; i++) {
        const left = s[i], right = s[n-i-1]
        if (left == '(' || left == '*') openCount++
        else openCount--
        if(right == ')' || right == '*') closeCount++
        else closeCount--
        if (openCount < 0 || closeCount < 0) return false
    }
    return true
};
