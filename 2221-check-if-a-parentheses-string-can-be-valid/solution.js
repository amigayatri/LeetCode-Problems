/**
 * @param {string} s
 * @param {string} locked
 * @return {boolean}
 */
var canBeValid = function (s, locked) {
    const n = s.length
    if (n % 2 == 1) return false
    let openCount = 0, closeCount = 0
    for (let left = 0; left < n; left++) {
        const right = n - left - 1
        if (s[left] == '(' || (s[left] == ')' && locked[left] == 0)) openCount++
        else openCount--
        if (s[right] == ')' || (s[right] == '(' && locked[right] == 0)) closeCount++
        else closeCount--
        if (openCount < 0 || closeCount < 0) return false
    }
    return true
};
