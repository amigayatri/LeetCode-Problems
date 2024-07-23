/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
    const signs = new Set(['+', '-'])
    const digits = new Set(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'])
    const exp = new Set(['E', 'e'])
    let hasExp = false, hasDot = false, hasDigit = false, hasSign = false
    const isInteger = (s) => {
        const n = s.length
        for (let i = 0; i < n; i++) {
            if (signs.has(s[i]) && (i > 0 || hasDot)) return false
            hasDigit |= digits.has(s[i])
            if (s[i] == '.') {
                if (hasExp || hasDot) {
                    return false
                } else if (i == n - 1) {
                    return hasDigit
                } else {
                    hasDot = true
                    return isInteger(s.substring(i + 1))
                }
            }
            if (exp.has(s[i])) {
                if (hasExp || i == n - 1 || !hasDigit) return false
                else {
                    hasDigit = false
                    hasDot = false
                    hasSign = false
                    hasExp = true
                    return isInteger(s.substring(i + 1))
                }
            }
            if (!digits.has(s[i]) && !signs.has(s[i])) return false
        }
        return hasDigit
    }
    return isInteger(s)
};
